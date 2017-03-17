import React, { PropTypes } from 'react';

import Row from './../layout/Row'
import Column from './../layout/Column'
import Panel from './../layout/Panel'

const CategoryResult = ({categories}) => 
    <Row>
        <Column size={12}>
            <Panel title='CategoryResult'>
                {
                    categories.map(category => 
                        <div key={ category.id } >
                            <div>{ category.label }</div>
                            <div>{ category.value }</div>
                        </div>
                    )
                }
            </Panel>
        </Column>
    </Row>;

CategoryResult.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoryResult;
