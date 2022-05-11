import React from 'react'
import Link from 'next/link'
import { Sidebar } from './SidebarContent'
import logo from "../../../public/assests/images/logo.png"
import Image from 'next/image'


export const VerticalSideBar = () => {
  return (
    <React.Fragment>
        <div className="vertical-menu">
          <div className="navbar-brand-box">
            <Link href="/" className="logo logo-dark"><a>
              <span className="logo-lg">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </span>
              {/* <span className="logo-sm">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </span> */}
              </a></Link>
          </div>
          <div data-simplebar className="h-100">
            <Sidebar/>
          </div>
          <div className="sidebar-background"></div>
        </div>
      </React.Fragment>
  )
}
