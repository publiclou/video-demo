import React, { useEffect } from 'react'
import axios from 'axios'

function Home() {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_YOUTUBE_API_URL}/videos`, {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  })

  return (
    <div>HHHH</div>
  )
}

export default Home