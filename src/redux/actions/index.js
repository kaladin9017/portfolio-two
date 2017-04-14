import {
  SELECT_PROJECT
} from './types';

export function selectProject(project) {
  return {
    type: SELECT_PROJECT,
    payload: project
  }
}
