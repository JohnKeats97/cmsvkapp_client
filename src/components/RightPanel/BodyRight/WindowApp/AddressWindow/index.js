import React from 'react'

import './style.css';


export default (props) => {

    return <div
        className="components-RightPanel-BodyRight-WindowApp-AddressWindow-root"
        style={props.pageConfig.background} >
        <button style={props.pageConfig.buttonOK}>Принять</button>
    </div>
};
