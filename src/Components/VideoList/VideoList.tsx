import React, { FC } from 'react'
import style from './VideoList.module.scss'

interface Iprops {
  list: object[]
  title: string
}

type time = string | null

const VideoList: FC<Iprops> = (props: Iprops) => {

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

  const VideoInfoCards = props.list.map((ele: any) => {
    return (
      <div className={style['video-info-card']} key={ele.id}>
        <div className={style['info-top']}>
          <img className={style['thumbnail']} src={ele.snippet.thumbnails.medium.url} />
          <div className={style['video-length']}>{videoLengthFormat(ele.contentDetails.duration)}</div>
        </div>

        <div className={style['info-bottom']}>
          <div className={style['info-title']}>{ele.snippet.title}</div>
          <div className={style['info-description']}>{ele.snippet.description}</div>
        </div>
      </div>
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