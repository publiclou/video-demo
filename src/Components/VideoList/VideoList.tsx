import React, { FC } from 'react'
import style from './VideoList.module.scss'
import VideoInfoCard from '../VideoInfoCard/VideoInfoCard'

interface Iprops {
  list: object[]
  title: string
}

const VideoList: FC<Iprops> = (props: Iprops) => {
  const VideoInfoCards = props.list.map((ele: any) => {
    return (
      <VideoInfoCard key={ele.id}
        duration={ele.contentDetails.duration}
        thumbnail={ele.snippet.thumbnails.medium.url}
        title={ele.snippet.title}
        description={ele.snippet.description}
      />
    )
  })

  return (
    <div className={style['video-list']}>
      <div className={style['title']}>
        {props.title}
      </div>

      <div className={style['list']}>
        {VideoInfoCards}
      </div>
    </div>
  )
}

export default VideoList