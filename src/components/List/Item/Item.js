import React from 'react';
import Figure from './Figure/Figure';
import Detail from './Detail/Detail';
import './Item.css';

const Item = React.forwardRef((props,ref) => {
    return (
        <div className="launch-item">
            <Figure source={props.mission_patch_small} name={props.mission_name} />
            <p ref={ref} className="launch-name">{props.mission_name}  #{props.flight_number}</p>
            <Detail value={props.mission_id} label="Mission Ids" />
            <Detail value={props.launch_year} label="Launch Year" />
            <Detail value={props.launch_success} label="Successful Launch" />
            <Detail value={props.landing_success} label="Successful Landing" />
        </div>
    );
})

export default Item;