import React, { FC, useEffect, useState } from 'react'
import style from './VideoInfoCard.module.scss'

interface Idata {
  id: string
  duration: string
  thumbnail: string
  title: string
  description: string
}

type time = string | null

const VideoInfoCard: FC<Idata> = (props: Idata) => {
  const [isCollect, setIsCollect] = useState<boolean>(false)


  useEffect(() => {
    let collectionList = sessionStorage.getItem('collection')
    let list: string[] = []

    if (collectionList) {
      list = collectionList.split(',')
    }

    list.includes(props.id) ? setIsCollect(true) : setIsCollect(false)
  }, [])

  function onClickVideoInfoCard(e: any): void {
    console.log('on click video card')
  }

  function onClickCollection(e: any): void {
    e.stopPropagation()
    let list: string[] | undefined = sessionStorage.getItem('collection')?.split(',')

    isCollect ? setIsCollect(false) : setIsCollect(true)

    if (isCollect && list) {
      list = list.filter(ele => ele !== props.id)
    } else {
      list = list ? [...list, props.id] : [props.id]
    }

    if (list) {
      sessionStorage.setItem('collection', list.join(','))
    }
  }

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

  const Collection = isCollect ? "\u2665" : "\u2661"

  return (
    <div className={style['video-info-card']} onClick={(e) => onClickVideoInfoCard(e)}>
      <div className={style['info-top']}>
        <div className={style['collection']} onClick={(e) => onClickCollection(e)}>
          {Collection}
        </div>
        <img className={style['thumbnail']} src={props.thumbnail} alt='' />
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