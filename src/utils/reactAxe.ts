import React from 'react';
import ReactDOM from 'react-dom';
import axe from 'react-axe';

const TIMING_DELAY = 1000;

export const initReactAxe = (
  react: typeof React,
  reactDOM: typeof ReactDOM
) => {
  axe(react, reactDOM, TIMING_DELAY);
};
