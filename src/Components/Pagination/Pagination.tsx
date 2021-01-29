import React, { FC, useEffect, useState } from 'react'
import style from './Pagination.module.scss'

interface typeProps {
  itemLength: number
  itemMaxPerPage: number
  currentPage: number
  onChagePage: any
}

const Pagination: FC<typeProps> = (props: typeProps) => {
  const [totalPage, setTotalPage] = useState<number>(1)

  function onClickPage(index: number): void {
    props.onChagePage(index)
  }

  function onClickPrev(): void {
    if (props.currentPage > 1) {
      props.onChagePage(props.currentPage - 1)
    }
  }

  function onClickNext(): void {
    if (props.currentPage < totalPage - 1) {
      props.onChagePage(props.currentPage + 1)
    }
  }

  useEffect(() => {
    let total: number = props.itemLength / props.itemMaxPerPage
    if (props.itemLength % props.itemMaxPerPage !== 0) {
      total = total + 1
    }
    setTotalPage(total)
  }, [props.itemLength])

  const createPageButton = () => {
    let page: any = []

    for (let i = 1; i <= totalPage; i++) {
      page.push(
        <div className={i === props.currentPage ? style['page-button-active'] : style['page-button']}
          key={`page-${i}`}
          onClick={() => onClickPage(i)}>
          {i}
        </div>
      )
    }
    return page
  }

  const PageButton = createPageButton()

  return (
    <div className={style['pagination']}>
      <div className={style['prev-button']} onClick={() => onClickPrev()}>
        {'<<'}
      </div>
      {PageButton}
      <div className={style['next-button']} onClick={() => onClickNext()} >
        {'>>'}
      </div>
    </div>
  )
}

export default Pagination