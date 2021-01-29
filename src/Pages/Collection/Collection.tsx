import React, { FC, useState, useEffect } from 'react'
import VideoList from '../../Components/VideoList/VideoList'
import style from './Collection.module.scss'
import axios from 'axios'

const Collection: FC = () => {
  const [videos, setVideos] = useState<object[]>([])
  const videoApiResultMax: number = 50
  const collection = sessionStorage.getItem('collection')

  const getVideoData = (page: string | null = null): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.REACT_APP_YOUTUBE_API_URL}/videos`, {
        params: {
          part: 'snippet,contentDetails',
          id: collection,
          maxResults: videoApiResultMax,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        }
      }).then(res => {
        console.log(res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  const fetchData = async () => {
    let data = await getVideoData()
    setVideos(data.data.items)
  }

  useEffect(() => {
    fetchData()
  }, [videos.length])

  return (
    <div className={style['collection']}>
      <VideoList list={videos} title="收藏影片" />
    </div>
  )
}

export default Collection