import React from 'react'
import Footer from '../components/Footer'
import NavMenu from '../components/NavMenu'
import {Outlet} from 'react-router-dom'

export default function AppRoot() {
  return (
    <div>
      <header>
        <NavMenu/>

      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
