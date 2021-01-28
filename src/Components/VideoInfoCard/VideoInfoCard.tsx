import React, { FC } from 'react'
import style from './VideoInfoCard.module.scss'

interface Idata {
  duration: string
  thumbnail: string
  title: string
  description: string
}

type time = string | null

const VideoInfoCard: FC<Idata> = (props: Idata) => {
  //  ISO 8601 format to timestring
  const videoLengthFormat = (duration: string): time => {
    let reptms: RegExp = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;

    if (reptms.test(duration)) {
      let matches: RegExpExecArray | null = reptms.exec(duration);

      if (matches !== null) {
        let timeString: string[] = []

        if (matches[1]) timeString.push(matches[1])
        matches[2] ? timeString.push(matches[2]) : timeString.push('00')
        matches[3] ? timeString.push(matches[3]) : timeString.push('00')

        return timeString.join(":")
      }
    }
    return '00:00'
  }

  return (
    <div className={style['video-info-card']}>
      <div className={style['info-top']}>
        <img className={style['thumbnail']} src={props.thumbnail} />
        <div className={style['video-length']}>{videoLengthFormat(props.duration)}</div>
      </div>

      <div className={style['info-bottom']}>
        <div className={style['info-title']}>{props.title}</div>
        <div className={style['info-description']}>{props.description}</div>
      </div>
    </div>
  )
}

export default VideoInfoCard