import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Container } from 'react-bootstrap'
import Channel from './components/Channel'

const BASE_URI = 'http://127.0.0.1:5000'

function App() {

  const [apiData, setApiData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        setIsError(false)
        try {
          const result = await axios.get(
            BASE_URI + '/results'
          )
          setIsLoading(false)
          setApiData(result.data)
        }
        catch (error) {
          setIsLoading(false)
          setIsError(true)
        }
    }

    fetchData()
  }, [])
  
  if (isLoading) {
    return (
      <p>Loading ...</p>
    )
  } else if (isError) {
    return (
      <p>An error has occurred ...</p>
    )
  }

  return (
    <div>
      <h1 className="App">Measurement made 2 days after the video was created</h1>
      <Container>
        {apiData.map((channel, index) => (
          <Channel key={index} channel={channel}/>
        ))}
      </Container>
    </div>
  )
}

export default App
