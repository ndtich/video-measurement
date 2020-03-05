import React from 'react'
import { Row, Button, Badge } from 'react-bootstrap'
import Video from './Video'

function Channel(props) {
    const channel = props.channel
    return (
        <React.Fragment>
            <Button variant="primary" className="mt-30">
                {channel.name} <Badge variant="light">{channel.videos.length}</Badge>
            </Button>
            <Row className="mt-10">
                {channel.videos.map((video, indexVideo) => (
                    <Video key={indexVideo} video={video}/>
                ))}
            </Row>
            <hr />
          </React.Fragment>
    )
}

export default Channel