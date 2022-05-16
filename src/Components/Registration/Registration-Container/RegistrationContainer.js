import React from 'react'
import ContainerLeftPanel from './Container-left-panel/ContainerLeftPanel'
import ContainerRightPanel from './Container-right-panel/ContainerRightPanel'
import './registration-container.scss'


function RegistrationContainer() {
  return (
    <div className='registration-container'>
        <ContainerLeftPanel />
        <ContainerRightPanel />
    </div>
  )
}

export default RegistrationContainer