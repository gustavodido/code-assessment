import { connect } from 'react-redux'

import { changeQuestionValue } from './../actions/Actions'
import QuestionList from './../components/QuestionList/QuestionList'

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuestionValueChanged: (id, value) => {
       dispatch(changeQuestionValue(id, value))
    }
  }
}

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionList);

export default QuestionListContainer;
