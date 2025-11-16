import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Authenticated = () => {
  return (
    <>
        <Nav />

        <main className='main-content ml-0 lg:ml-[280px] p-4 md:p-8 transition-all duration-300'>
          <Outlet />
        </main>
    </>
  )
}

export default Authenticated