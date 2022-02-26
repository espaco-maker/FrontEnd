import { Tokens } from './tokens.js';

export function isLoggedIn() {
  return !!localStorage.getItem(Tokens.user);
}

export function ifLoggedIn(callback) {
  if (isLoggedIn()) {
    callback();
  }
}