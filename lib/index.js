'use strict';

import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import * as reducers from './reducers';

import resources from './middlewares/resources';
import socket from './middlewares/socket';
import View from './containers/view';
import InputManager from './utils/input-manager';

const middlewares = { resources, socket };
const containers  = { View };
const utils       = { InputManager };

export {
  actions,
  constants,
  selectors,
  reducers,
  middlewares,
  containers,
  utils
};