import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import sideMenuReducer from './sideMenuReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  selectedProject: sideMenuReducer
})

export default rootReducer;
