import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Field from '../Field';

describe('<Field />', () => {
  it('Should Component Renders With Default Behaviour', () => {
    const { container } = render(<Field id="fieldId" onChange={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('Should Component Renders With Props', () => {
    const { queryByText } = render(
      <Field
        id="fieldId"
        name="fieldName"
        type="text"
        label="FieldLabel"
        placeholder="DefaultField"
        defaultValue="Default"
        onChange={jest.fn()}
      />
    );
    expect(queryByText('FieldLabel')).toBeInTheDocument();
  });

  it("Should 'onChange' Function Has Been Called", () => {
    const onChangeMock = jest.fn();

    const { container } = render(<Field id="fieldId" onChange={onChangeMock} />);

    const field = container.querySelector('#fieldId');

    fireEvent.change(field, { target: { value: 'HelloWorld' } });

    expect(onChangeMock).toHaveBeenCalled();
  });
});