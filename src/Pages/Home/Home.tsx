import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import Page from '../../Components/Pages/Pages'

const Home: FC = () => {
  const [videos, setVideos] = useState<Object[]>([])

  const videoApiResultMax: number = 50
  const itemMax: number = 100

  const getVideoData = (page: string | null = null): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.REACT_APP_YOUTUBE_API_URL}/videos`, {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: videoApiResultMax,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          pageToken: page
        }
      }).then(res => {
        console.log('api', res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      let items: object[] = [...videos]
      let pageToken: any = null

      while (items.length < itemMax) {
        let data = await getVideoData(pageToken)
        items = items.concat(data.data.items)
        pageToken = data.data.nextPageToken
      }
      setVideos(items)
    }
    fetchData()
  }, [])


  return (
    <div>
      <Page />
    </div>
  )
}

export default Home