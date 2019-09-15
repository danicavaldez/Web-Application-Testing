import React from 'react';
import { render } from "@testing-library/react";
import App from './App.js'
import { addStrike } from './components/Dashboard'


test('App renders without crashing', () => {
  render(<App />)
})

test('Contains balls and strikes tracker', () => {
  const {getByText} = render(<App />);
  getByText(/balls/i)
  getByText(/strikes/i)
})