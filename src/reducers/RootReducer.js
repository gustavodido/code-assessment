import { combineReducers } from 'redux'

const initialState = [
    { id:1, label: "This is a question by temp", value: 0 } ,
    { id: 2, label: "This is a second question", value: 2 }
];

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUESTION_VALUE':
      return state.map(q => {
          if (q.id === action.id) {
              q.value = action.value;
          }
          return q;
      });

    default:
      return state
  }
}

const RootReducer = combineReducers({
    questions
})

export default RootReducer