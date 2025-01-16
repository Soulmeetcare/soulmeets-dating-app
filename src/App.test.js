import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Basic smoke test to ensure the App renders without crashing
test('renders the main heading of the app', () => {
    render(<App />);
    const headingElement = screen.getByText(/soulmeets/i); // Adjust based on your actual content
    expect(headingElement).toBeInTheDocument();
});

// Test to check for a button or link
test('renders a login button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /login/i });
    expect(buttonElement).toBeInTheDocument();
});

// Test for a form presence
test('renders a registration form', () => {
    render(<App />);
    const formElement = screen.getByTestId('registration-form'); 
    expect(formElement).toBeInTheDocument();
});

// Snapshot Testing (Optional)
test('matches the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
