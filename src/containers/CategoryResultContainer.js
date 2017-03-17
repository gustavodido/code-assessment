import { connect } from 'react-redux'
import sumBy from 'lodash/sumBy'

import CategoryResult from './../components/CategoryResult'

const scale = function(score, limit) {
		const min = -limit;
		const scaledValue = (score - min) / (limit - min);
		const finalValue = -2 + (scaledValue * 4);
		return parseFloat(Math.round(finalValue * 100) / 100).toFixed(2);
}

const aggregate = (categories, questions) => {
  return categories.map(category => {
    const categoryQuestions = questions.filter(q => q.category === category.label);
    const scores = sumBy(categoryQuestions, p => p.value);
    const value = scale(scores, categoryQuestions.length);
    
    return {...category, value: value}
  })
}

const mapStateToProps = (state) => {
  return {
    categories: aggregate(state.categories, state.questions)
  }
}

const CategoryResultContainer = connect(mapStateToProps)(CategoryResult);

export default CategoryResultContainer;
