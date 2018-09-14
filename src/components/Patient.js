import React from 'react';

const Patient = (props) => (
    <div>
        <img src={`img/${props.name}.jpg`}
             height={30}
             width={30}
             style={{ marginRight: '10px' }}
        />
        {props.name}
    </div>
);

export default Patient;