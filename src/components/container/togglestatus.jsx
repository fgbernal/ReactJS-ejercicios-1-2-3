import React from 'react';
import PropTypes from 'prop-types';


const ToggleStatus = ({handler}) => {
    return (
        <div>
            <button onClick={handler}>Cambiar</button>
        </div>
    );
};


ToggleStatus.propTypes = {
    handler: PropTypes.func.isRequired,
};


export default ToggleStatus;
