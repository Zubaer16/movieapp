import React, { useState, useEffect } from 'react'
import axios from './axios'
function Row({ title }) {
  const [movies, setMovies] = useState([])
  // A snippet of code which runs based on a specific conditions
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
  }, [movies])
  return (
    <div>
      <h2>{title}</h2>

      {/*container -> posters*/}
    </div>
  )
}

export default Row
