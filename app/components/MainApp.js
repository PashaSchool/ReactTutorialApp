import React from 'react'

const MainApp = (props) => {
  return (
    <div className='container'>
      <h2>Main container</h2>
      {props.children}
    </div>
  )
}
module.exports = MainApp;
