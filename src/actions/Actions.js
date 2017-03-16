import ActionTypes from  './../constants/ActionTypes'

export const changeQuestionValue = (id, value) => {
  return {
    type: ActionTypes.ChangeQuestionValue,
    id,
    value
  }
}
