import React from "react";

const Status = props => {
    return <div> hi, {
        props.isAuthenticated ? props.name : "User"
    }; </div>
}

export default Status;