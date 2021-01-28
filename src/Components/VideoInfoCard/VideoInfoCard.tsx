import React, { FC } from 'react'
import style from './VideoInfoCard.module.scss'

const VideoInfoCard: FC = () => {
  return (
    <div className={style['video-info-card']}>
      <div className={style['info-top']}>
        <img className={style['thumbnail']} src="https://i.ytimg.com/vi/8C3Z9n2Wqww/maxresdefault.jpg" />
        <div className={style['video-length']}>Time</div>
      </div>

      <div className={style['info-bottom']}>
        <div className={style['info-title']}>title title title title title title title title title title</div>
        <div className={style['info-description']}>Swapping Girlfriends with FaZe Jarvis (Brother) ft. @FaZe Jarvis @HanRidge @Alexa Adams \nWatch Jarvis V</div>
      </div>
    </div>
  )
}

export default VideoInfoCard