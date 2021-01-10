import React from 'react';
import Image from '../../../Image/Image'
import './Figure.css'

const Figure = React.memo((props) => {
    return (
        <figure className="figure-item">
            <Image src={props.source} alt={props.name} />
        </figure>
    );
});

export default Figure;