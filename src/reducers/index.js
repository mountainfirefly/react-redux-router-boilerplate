import { combineReducers } from 'redux';

import Packages from './Packages';

const reducers = combineReducers({
  packages: Packages,
});

export default reducers;