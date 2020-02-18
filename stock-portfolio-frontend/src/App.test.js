import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders register button', () => {
  const wrapper = shallow(<Register />); 
  const appComponent = wrapper.find("[data-test='component-register-button']");
  expect(appComponent.length).toBe(1);
});

test('renders login button', () => {
  const wrapper = shallow(<Login />); 
  const appComponent = wrapper.find("[data-test='component-login-button']");
  expect(appComponent.length).toBe(1)
});

test('renders register form', () => {
  const wrapper = shallow(<Register />); 
  const appComponent = wrapper.find("[data-test='component-register-form']");
  expect(appComponent.length).toBe(1);
});

test('renders login form', () => {
  const wrapper = shallow(<Login />); 
  const appComponent = wrapper.find("[data-test='component-login-form']");
  expect(appComponent.length).toBe(1)
});

