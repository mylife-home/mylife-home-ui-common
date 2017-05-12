'use strict';

import actions from './actions';
import errors from './errors';
import online from './online';
import repository from './repository';
import resources from './resources';
import view from './view';
import windows from './windows';

const merged = {
  ... actions,
  ... errors,
  ... online,
  ... repository,
  ... resources,
  ... view,
  ... windows
};

export default merged;
