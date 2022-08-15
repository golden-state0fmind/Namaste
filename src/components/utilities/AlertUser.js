import React from 'react';

const AlertUser = (...props) => {
    return (
        <div className="alert alert-danger col-md-6" role="alert">
            <h4>ERROR: <br /> {props}</h4>
        </div>
    );
};

export default AlertUser;
