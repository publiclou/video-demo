import React, { FC, useState, useEffect } from 'react'
import VideoList from '../../Components/VideoList/VideoList'
import style from './Collection.module.scss'
import axios from 'axios'

const Collection: FC = () => {
  const [videos, setVideos] = useState<object[]>([])
  const videoApiResultMax: number = 50
  const collection = sessionStorage.getItem('collection')

  useEffect(() => {
    if (collection && collection !== '') {
      fetchData()
    }
  }, [videos.length])

  const fetchData = async () => {
    let data = await getVideoData()
    setVideos(data.data.items)
  }

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
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  return (
    <div className={style['collection']}>
      <VideoList list={videos} title="收藏影片" />
    </div>
  )
}

export default Collection