import React from 'react'
import './MainContainer.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import CardContainer from '../CardContainer/CardContainer'

function MainContainer() {
  return (
    <>
      <div className='app__main-container'>
        <Sidebar />
        <CardContainer />
      </div>
    </>
  )
}

export default MainContainer