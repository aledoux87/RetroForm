import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStore } from '../../redux/store';
import Login from '../Login';
import UserService from '../../services/userService';

jest.mock('../../services/userService');

describe('<Login />', () => {
  // const { location } = window;
  const store = makeStore();

  // beforeAll(() => {
  //   delete window.location;
  //   window.location = {
  //     href: '',
  //   };
  // });

  // afterAll(() => {
  //   window.location = location;
  // });

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

  it('Should Component Renders With Props', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <Router>
          <Login title="LoremIpsum" subTitle="Lorem ipsum dolor sit amet" />
        </Router>
      </Provider>
    );
    expect(queryByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  });

  it("Should 'onSubmit' Function Has Been Called", async () => {
    UserService.loginUser.mockResolvedValue({
      login: 'JDoe',
      email: 'john.doe@gmail.com',
      passwordStrong: 6
    });

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login title="LoremIpsum" />
        </Router>
      </Provider>
    );

    const loginInput = container.querySelector('#login');
    const emailInput = container.querySelector('#email');
    const passwordInput = container.querySelector('#password');

    fireEvent.change(loginInput, { target: { value: 'JDoe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '6' } });

    const nextButton = screen.getByText('NEXT');

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(window.location.href).toEqual('http://localhost/register');
    });
  });
});
