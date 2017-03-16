import React, { PropTypes } from 'react';

import Panel from './../layout/Panel'
import Column from './../layout/Column'

import QuestionList from './QuestionList'

const CategoryList = ({onQuestionValueChanged, questions, categories}) => 
    <div>
        {
            categories.map(category => 
                <Column key={ category }>
                    <Panel title={ category } >
                        <QuestionList category={ category }
                                      onQuestionValueChanged={ onQuestionValueChanged }
                                      questions={ questions } 
                         />
                    </Panel>
                </Column>)
        }
    </div>;

CategoryList.propTypes = {
  onQuestionValueChanged: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired }).isRequired).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default CategoryList;
