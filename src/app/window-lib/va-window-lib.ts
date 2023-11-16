import {kinderenBuilder} from './kinderen-builder';

declare global {
  interface Window {
    VALib: any;
  }
}

export const VALib = () => {
  window.VALib = {};

  // Startform
  window.VALib.kinderenBuilder = kinderenBuilder;
};
