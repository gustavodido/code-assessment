import { connect } from 'react-redux'

import CategoryResult from './../components/CategoryResult'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const CategoryResultContainer = connect(mapStateToProps)(CategoryResult);

export default CategoryResultContainer;
