import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../Register';
import UserService from '../../services/userService';

jest.mock('../../services/userService');

describe('<Register />', () => {
  it('Should Component Renders With Default Behaviour', () => {
    const { container } = render(<Register title="LoremIpsum" />);
    expect(container).toMatchSnapshot();
  });

  it('Should Component Renders With Props', () => {
    const { queryByText } = render(<Register title="LoremIpsum" subTitle="Lorem ipsum dolor sit amet" />);
    expect(queryByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  });

  it("Should 'onSubmit' Function Has Been Called", async () => {
    UserService.registerUser.mockResolvedValue({
      firstName: 'John',
      lastName: 'DOE',
      birthYear: '1993',
      gender: 'Boy'
    });

    const goToNextViewMock = jest.fn();

    const { container } = render(<Register title="LoremIpsum" goToNextView={goToNextViewMock} />);

    const firstNameInput = container.querySelector('#firstName');
    const lastNameInput = container.querySelector('#lastName');
    const yearOldInput = container.querySelector('#yearOld');
    const genderSelect = container.querySelector('#gender');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(yearOldInput, { target: { value: '42' } });
    fireEvent.change(genderSelect, { target: { value: 'gentleman' } });

    const sendButton = screen.getByText('SEND');

    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(goToNextViewMock).toHaveBeenCalled();
    });
  });
});
