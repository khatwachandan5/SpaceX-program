import React from 'react';
import Item from '../Item/Item';
import './Category.css';

const Category = (props) => {

    const onFilterClick = (value) => {
        props.onFilterApply(props.filerType, value);
    }

    const items = props.filterValues.map((filter) =>
        <Item
            value={filter}
            key={filter}
            isActive={filter === props.activeItem}
            onClick={onFilterClick} />
    )

    return (
        <section className="filter-category">
            <h3 className="filter-type">{props.filterDisplayName}</h3>
            <div className="filter-values">
                {items}
            </div>
        </section>
    );
}

export default Category;