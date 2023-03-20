import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors', () => {
  // arrange
  render(<ContactForm />);

  // act
  const formContact = screen.getByText(/contact form/i);

  // assert
  expect(formContact).toBeTruthy();
  expect(formContact).toBeInTheDocument();
  expect(formContact).toBeVisible();
});

test('renders the contact form header', () => {
    // arrange
    render(<ContactForm />);

    // act
    const elemHeader = screen.getByText(/contact form/i);
  
    // assert
    expect(elemHeader).toBeTruthy();
    expect(elemHeader).toBeInTheDocument();
    expect(elemHeader).toBeVisible();
    expect(elemHeader).toHaveTextContent(/contact form/i);

});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    // arrange
    render(<ContactForm />);

    // act
    const elemFirstName = screen.getByLabelText(/First Name/i);
    userEvent.type(elemFirstName, "abc");

    const errMessages = await screen.findAllByTestId("error"); // gets ALL error message
  
    // assert
    expect(errMessages).toHaveLength(1);
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    // arrange
    render(<ContactForm />);

    // act
    const elemButton = screen.getByRole("button");
    userEvent.click(elemButton);

    const errMessages = await screen.findAllByTestId("error"); // gets ALL error message
  
    // assert
    expect(errMessages).toHaveLength(3);
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {

});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {

});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {

});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {

});

test('renders all fields text when all fields are submitted.', async () => {

});
