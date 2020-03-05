import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Measurement(props) {
    const measurement = props.measurement
    if (!measurement) {
        return <i>There are no measurements made 2 days after the video was created</i>
    }
    const measurementElm = Object.keys(measurement).map((obj, i) => (
        <ListGroup.Item key={i}>{obj} : {measurement[obj]}</ListGroup.Item>
    ))
    return measurementElm
}

export default Measurement