import { success, error, defaultModules, Stack, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
import '@pnotify/desktop/dist/PNotifyDesktop.css';

defaultModules.set(PNotifyBootstrap4, {});

defaults.width = 'auto';
defaults.delay = 3000;

const stackAlert = new Stack({
  dir1: 'down',
  firstpos1: 15,
  push: 'bottom',
  maxOpen: 1,
  maxStrategy: 'close',
  maxClosureCausesWait: false,
  context: document.body,
});

const noteSuccess = () =>
  success({
    text: 'Contact was created!',
    stack: stackAlert,
    styling: 'custom',
    addClass: 'noteSuccess-elem',
  });

const noteSuccessLogin = () =>
  success({
    text: 'Success! You are in.',
    stack: stackAlert,
    styling: 'custom',
    addClass: 'noteSuccess-elem',
  });

const noteErrorLogin = () =>
  success({
    text: 'Failure!',
    stack: stackAlert,
    styling: 'custom',
    addClass: 'noteErrorInRange-elem',
  });

const noteDeleteSuccess = () =>
  success({
    text: 'Contact was deleted!',
    stack: stackAlert,
    styling: 'custom',
    addClass: 'noteDeleteSuccess-elem',
  });

const noteErrorInRange = name =>
  error({
    text: `${name} already in the list!`,
    stack: stackAlert,
    styling: 'custom',
    addClass: 'noteErrorInRange-elem',
  });

const noteErrorCreate = () =>
  error({
    text: 'Failure occurred!',
    stack: stackAlert,
    styling: 'custom',
    addClass: 'noteErrorInRange-elem',
  });

// eslint-disable-next-line
export default {
  noteSuccessLogin,
  noteErrorLogin,
  noteSuccess,
  noteDeleteSuccess,
  noteErrorInRange,
  noteErrorCreate,
};
