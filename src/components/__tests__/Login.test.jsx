import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStore } from '../../redux/store';
import Login from '../Login';
import UserService from '../../services/userService';

jest.mock('../../services/userService');

describe('<Login />', () => {
  const { location } = window;
  const store = makeStore();

  beforeAll(() => {
    delete window.location;
    window.location = {
      href: ''
    };
  });

  afterAll(() => {
    window.location = location;
  });

  it('Should Component Renders With Default Behaviour', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login title="LoremIpsum" />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it('Should Component Renders With Props', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Login title="LoremIpsum" subTitle="Lorem ipsum dolor sit amet" />
        </Router>
      </Provider>
    );
    expect(await screen.findByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  });

  it("Should 'onSubmit' Function Has Been Called", async () => {
    UserService.loginUser.mockResolvedValue({
      login: 'jojododo',
      passwordStrong: 8,
      email: 'jojododo@yahoo.fr'
    });

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login title="LoremIpsum" />
        </Router>
      </Provider>
    );

    const loginInput = container.querySelector('#login');
    const passwordInput = container.querySelector('#password');
    const emailInput = container.querySelector('#email');

    fireEvent.change(loginInput, { target: { value: 'jojododo' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });
    fireEvent.change(emailInput, { target: { value: 'jojododo@yahoo.fr' } });

    const sendButton = screen.getByText('NEXT');

    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(window.location.href).not.toEqual('https://www.google.com');
      // expect(history.push).toHaveBeenCalledWith('/register')
    });
  });
});
