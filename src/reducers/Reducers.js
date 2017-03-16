import { combineReducers } from 'redux'

import ActionTypes from "./../constants/ActionTypes"
import InitialState from "./../constants/InitialState"

const questions = (state = InitialState.Questions, action) => {
  switch (action.type) {
      
    case ActionTypes.ChangeQuestionValue:
      return state.map(q => {
          if (q.id === action.id) {
            return { ...q, value: action.value };
          }
          return { ...q };
      });

    default:
      return state
  }
}

const Reducers = combineReducers({
    questions
})

export default Reducers