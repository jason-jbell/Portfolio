import axios from 'axios'

const SET_PROJECT = 'SET_PROJECT'

export const _setProject = (project) => {
  return {
    type: SET_PROJECT,
    project
  }
}

export const fetchProject = (id) => {
  return async dispatch => {
    try {
      const project = (await axios.get(`/api/projects/${id}`)).data
      dispatch(_setProject(project));
    } catch (error) {
      console.log('error in fetchProject thunk', error)
    }
  }
}

export default function singleProjectReducer(state = {}, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;
    default:
      return state;
  }
}