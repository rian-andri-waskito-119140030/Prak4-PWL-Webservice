import React from "react"

const Kotak = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Kotak