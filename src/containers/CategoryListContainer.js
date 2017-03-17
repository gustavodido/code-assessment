import { connect } from 'react-redux'

import { changeQuestionValue } from './../actions/Actions'
import CategoryList from './../components/CategoryList'

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuestionValueChanged: (id, value) => {
       dispatch(changeQuestionValue(id, value));
    }
  }
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;
