import React from 'react'

export default (props) => (
    <div>
        <div id={props.match.params.serviceId}>Loading {props.match.params.serviceId}</div>
    </div>
)
