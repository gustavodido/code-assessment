export const changeQuestionValue = (id, value) => {
  return {
    type: 'CHANGE_QUESTION_VALUE',
    id,
    value
  }
}
