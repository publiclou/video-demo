import React, { FC, useEffect, useRef } from 'react'
import videojs from "video.js"
import style from './VideoPlayer.module.scss'
import './VideoPlayer.scss'
import 'video.js/dist/video-js.css'

interface Iprops {
  src: string
  onPlayPauseVideo: any
}

const VideoPlayer: FC<Iprops> = (props: Iprops) => {
  const player = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videojs(player.current, {
      autoplay: true,
      muted: true,
      controls: true,
    }, () => {
      video.src(props.src);
    });

    // video eventLisenter
    video.on('pause', () => onPlayPauseVideo(false))
    video.on('play', () => onPlayPauseVideo(true))

    return () => {
      video.dispose();
    };
  }, [])

  function onPlayPauseVideo(data: boolean) {
    props.onPlayPauseVideo(data)
  }

  return (
    <div className={style['player']}>
      <video className="video-js vjs-big-play-centered vjs-ehs" ref={player}></video>
    </div>
  )
}

export default VideoPlayer