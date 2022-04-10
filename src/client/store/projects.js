import axios from 'axios'

const SET_PROJECTS = 'SET_PROJECTS'
const CREATE_PROJECT = 'CREATE_PROJECT'

const _setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects
  }
}

const _createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project
  }
}

export const fetchProjects = () => {
  return async dispatch => {
    try {
      const projects = (await axios.get('/api/projects')).data;
      dispatch(_setProjects(projects));
    } catch (error) {
      console.log('error in fetchProjects thunk', error)
    }
  }
}

export const createProject = (project) => {
  return async dispatch => {
    try {
      const { data: created } = await axios.post('/api/projects', project);
      dispatch(_createProject(created));
    } catch (error) {
      console.log('error in createProject thunk', error)
    }
  }
}

export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case CREATE_PROJECT:
      return [...state, action.project];
    default:
      return state;
  }
}