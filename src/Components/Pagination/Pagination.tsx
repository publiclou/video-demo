import React, { FC } from 'react'
import style from './Pagination.module.scss'

// interface typeProps {
//   currentPage: number,
//   totalPage: number
// }

const Pagination: FC = () => {
  // function page() {
  //   const pa = []
  //   for (let i = 0; i < 3; i++) {
  //     pa.push(<div>{i}</div>)
  //   }


  //   return (
  //     <div>
  //       {pa}
  //     </div>
  //   )
  // }

  // const a = page()

  return (
    <div className={style['pagination']}>
      <div className={style['prev-button']}>Previous Page</div>
      <div className={style['page-button']}>1</div>
      <div className={style['page-button']}>2</div>
      <div className={style['page-button']}>3</div>
      <div className={style['next-button']}>Next Page</div>
    </div>
  )
}

export default Pagination