import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check NavBar', () => {
  render(<App />);
  const home: HTMLElement = screen.getByText("Home");
  expect(home).toBeInTheDocument();
  const skills: HTMLElement = screen.getAllByText("Skills")[0];
  expect(skills).toAppearAfter(home);
  const projects: HTMLElement = screen.getAllByText("Projects")[0];
  expect(projects).toAppearAfter(skills);
  const linkedin: HTMLElement = screen.getByAltText("LinkedIn");
  expect(linkedin).toAppearAfter(projects);
  const github: HTMLElement = screen.getByAltText("GitHub");
  expect(github).toAppearAfter(linkedin);
  const mail: HTMLElement = screen.getByAltText("Mail");
  expect(mail).toAppearAfter(github);
  const connect: HTMLElement = screen.getAllByText("Let's connect!")[0];
  expect(connect).toAppearAfter(mail);
  const resume: HTMLElement = screen.getByText("Resume");
  expect(resume).toAppearAfter(connect);
});

test('Check Banner', () => {
  render(<App />);
  const resume: HTMLElement = screen.getByText("Resume");
  const welcome: HTMLElement = screen.getByText(/Welcome.*to my Portfolio/i);
  expect(welcome).toAppearAfter(resume);
  const title: HTMLElement = screen.getByText(/Hi, I'm David Xchel!/i);
  expect(title).toAppearAfter(welcome);
  const connect: HTMLElement = screen.getAllByText("Let's connect!")[1];
  expect(connect).toAppearAfter(title);
  const atom: HTMLElement = screen.getByAltText("https://www.reshot.com/free-svg-icons/item/worldwide-shipping-ZFBPUD562K/");
  expect(atom).toAppearAfter(connect);
});

test('Check Skills', () => {
  render(<App />);
  const atom: HTMLElement = screen.getByAltText("https://www.reshot.com/free-svg-icons/item/worldwide-shipping-ZFBPUD562K/");
  const skills: HTMLElement = screen.getAllByText("Skills")[1];
  expect(skills).toAppearAfter(atom);
  const langs: HTMLElement = screen.getByText("Programming languages");
  expect(langs).toAppearAfter(skills);
  //const lang: HTMLElement = screen.getByText("Python Scripting");
  //expect(lang).toAppearAfter(langs);
  const tools: HTMLElement = screen.getByText("Tools");
  expect(tools).toAppearAfter(langs);
  //const linux: HTMLElement = screen.getByText("Linux OS and FS");
  //expect(linux).toAppearAfter(tools);
  const soft: HTMLElement = screen.getByText("Soft skills");
  expect(soft).toAppearAfter(tools);
  //const math: HTMLElement = screen.getByText("Mathematics");
  //expect(math).toAppearAfter(soft);
});

test('Check Projects', () => {
  render(<App />);
  const soft: HTMLElement = screen.getByText("Soft skills");
  const projects: HTMLElement = screen.getAllByText("Projects")[1];
  expect(projects).toAppearAfter(soft);
  const personal: HTMLElement = screen.getByText("Personal");
  expect(personal).toAppearAfter(projects);
  const work: HTMLElement = screen.getByText("Work");
  expect(work).toAppearAfter(personal);
  const university: HTMLElement = screen.getByText("University");
  expect(university).toAppearAfter(work);
  const multiapp: HTMLElement = screen.getByText("MultiApp");
  expect(multiapp).toAppearAfter(university);
  const plans: HTMLElement = screen.getByText("Testing plans");
  expect(plans).toAppearAfter(multiapp);
  const electro: HTMLElement = screen.getByText("Electrocardiogram");
  expect(electro).toAppearAfter(plans);
});

test('Check Contact', () => {
  render(<App />);
  const electro: HTMLElement = screen.getByText("Electrocardiogram");
  const world: HTMLElement = screen.getByAltText("https://www.freepik.com/");
  expect(world).toAppearAfter(electro);
  const touch: HTMLElement = screen.getByText("Get in touch");
  expect(touch).toAppearAfter(world);
  const first: HTMLElement = screen.getByPlaceholderText("First Name");
  expect(first).toAppearAfter(touch);
  const last: HTMLElement = screen.getByPlaceholderText("Last Name");
  expect(last).toAppearAfter(first);
  const mail: HTMLElement = screen.getByPlaceholderText("Email Address");
  expect(mail).toAppearAfter(last);
  const phone: HTMLElement = screen.getByPlaceholderText("Phone");
  expect(phone).toAppearAfter(mail);
  const message: HTMLElement = screen.getByPlaceholderText("Message");
  expect(message).toAppearAfter(phone);
  const submit: HTMLElement = screen.getByText("Mail");
  expect(submit).toAppearAfter(message);
});
