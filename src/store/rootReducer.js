import { combineReducers } from 'redux';
import primary from './ducks/primary/primary'
import education from './ducks/education/education';
import experience from './ducks/experience/experience';

export default combineReducers({
  primary,
  education,
  experience
})