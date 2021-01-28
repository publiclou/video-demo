import React, { FC } from 'react'

// interface typeProps {
//   currentPage: number,
//   totalPage: number
// }

const Pages: FC = () => {
  function page() {
    const pa = []
    for (let i = 0; i < 3; i++) {
      pa.push(<div>{i}</div>)
    }


    return (
      <div>
        {pa}
      </div>
    )
  }

  const a = page()

  // const Page = () => {
  //   return (
  //     <div>1</div>
  //   )
  // }

  return (
    <div>
      <div>left arrow</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>right arrow</div>
      {/* aaa */}
      {/* {a} */}
    </div>
  )
}

export default Pages