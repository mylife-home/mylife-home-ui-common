'use strict';

import online from './online';
import repository from './repository';
import resources from './resources';
import view from './view';
import windows from './windows';

const merged = {
  ... online,
  ... repository,
  ... resources,
  ... view,
  ... windows,
};

export default merged;
