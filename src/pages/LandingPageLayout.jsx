import React from 'react'
import LandingPageLayoutBody from '../components/LandingPageBody'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <div >
      <Outlet/>
      <LandingPageLayoutBody/>
    </div>
  )
}

export default LandingPageLayout
