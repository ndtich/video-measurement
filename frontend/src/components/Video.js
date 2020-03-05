import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'
import Measurement from './Measurement'

function Video(props) {
    const video = props.video
    return (
        <Col xs={6} md={4}>
            <Card style={{ width: '18rem' }} className="mt-10 p-10">
            <Card.Title>{video.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{video.create_date}</Card.Subtitle>
            <ListGroup variant="flush">
                <Measurement measurement={video.measurement_after_2_days}/>
            </ListGroup>
            </Card>
        </Col>
    )
}

export default Video