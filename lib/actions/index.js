'use strict';

import errors from './errors';
import online from './online';
import repository from './repository';
import resources from './resources';
import windows from './windows';

const merged = {
  ... errors,
  ... online,
  ... repository,
  ... resources,
  ... windows
};

export default merged;
