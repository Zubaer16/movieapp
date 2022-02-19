import React from 'react'
import './App.css'
import Row from './row'
import requests from './requests'

// cfe6e49760b8f02085257553baa8237a
//https://netflix-clone-3efda.web.app/

function App() {
  return (
    <div>
      <h1>Hello this is zubaer</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  )
}

export default App
