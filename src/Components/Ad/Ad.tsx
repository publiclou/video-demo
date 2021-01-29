import { FC } from 'react'
import style from './Ad.module.scss'

interface Iprops {
  text: string
}

const Ad: FC<Iprops> = (props: Iprops) => {

  return (
    <div className={style['ad']}>
      {props.text}
    </div>
  )
}

export default Ad