import React from 'react';
import Category from './Category/Category';
import './Filters.css';

const Filters = (props) => {

    const categories = props.filterData.map(category =>
        <Category
            filterValues={category.data}
            filerType={category.type}
            key={category.type}
            filterDisplayName={category.displayName}
            activeItem={category.activeItem}
            onFilterApply={props.onFilterApply} />
    )

    return (
        <div className="launch-filters">
            <h2>Filters</h2>
            {categories}
        </div>
    );
}

export default Filters; 