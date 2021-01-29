import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import VideoList from '../../Components/VideoList/VideoList'
import style from './Home.module.scss'

const Home: FC = () => {
  const [videos, setVideos] = useState<object[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentVideoList, setCurrentVideoList] = useState<object[]>([])

  const videoApiResultMax: number = 50
  const itemMax: number = 100
  const itemMaxPerPage: number = 12

  useEffect(() => {
    fetchData()
    onChangePage(1)
  }, [videos.length])

  const getVideoData = (page: string | null = null): Promise<any> => {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.REACT_APP_YOUTUBE_API_URL}/videos`, {
        params: {
          part: 'snippet,contentDetails',
          chart: 'mostPopular',
          maxResults: videoApiResultMax,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          pageToken: page
        }
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  const fetchData = async () => {
    let items: object[] = [...videos]
    if (items.length >= itemMax) {
      return null
    }

    let pageToken: any = null
    let data = await getVideoData(pageToken)
    items = items.concat(data.data.items)
    pageToken = data.data.nextPageToken
    setVideos(items)
  }

  function onChangePage(page: number = 1): void {
    let videoList: object[] = []

    // Set current page
    setCurrentPage(page)

    // Set videoList
    videoList = videos.slice((page - 1) * itemMaxPerPage, page * itemMaxPerPage)
    setCurrentVideoList(videoList)
  }

  return (
    <div className={style['home']}>
      {/* video list area */}
      <VideoList list={currentVideoList} title="首頁" />

      {/* Page */}
      <Pagination itemLength={videos.length}
        itemMaxPerPage={itemMaxPerPage}
        currentPage={currentPage}
        onChagePage={(index: number) => onChangePage(index)} />
    </div>
  )
}

export default Home