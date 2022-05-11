import React, { useState } from 'react'
import logo from "../../../../public/assests/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'


export const Header = (props) => {

  const [headerVerticalButton , setHeaderVerticalButton] = useState(false)

    function tToggle() {
        var body = document.body;
        if (window.screen.width <= 998) {
          body.classList.toggle("sidebar-enable");
        } else {
          body.classList.toggle("vertical-collpsed");
          body.classList.toggle("sidebar-enable");
          setHeaderVerticalButton(!headerVerticalButton)
          // document.getElementById('vertical-menu-btn').classList.remove("vertical-menu-btn-rotate")
        }
      }

  return (
    <React.Fragment>
    <header id="page-topbar">
      <div className="navbar-header">

        <div className="d-flex">
          <div className="navbar-brand-box d-lg-none d-md-block">
          <Link href="/" className="logo logo-dark"><a>
              <span className="logo-lg">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </span>
              </a></Link>

              {/* <Link href="/" className="logo logo-dark"><a>
              <span className="logo-lg">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </span>
              </a></Link> */}
          </div>

          <button
            type="button"
            onClick={() => {
                tToggle();
              }}
            className={headerVerticalButton ? "btn btn-sm px-3 font-size-16 header-item vertical-menu-btn-rotate" : "btn btn-sm px-3 font-size-16 header-item vertical-menu-btn-rotate-again"}
            id="vertical-menu-btn"
          >
            <i className="fas fa-arrow-circle-left"></i>
          </button>

          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <h4 style={{color:'#01529C'}}>{props.headbar ?? "Dashboard" }</h4>
            </div>
          </form>

        </div>
      </div>
    </header>
    {/* <ReactDrawer
      open={this.state.open}
      position={this.state.position}
      onClose={this.onDrawerClose}
    > */}
      {/* <RightSidebar onClose={this.onDrawerClose} /> */}
    {/* </ReactDrawer> */}
  </React.Fragment>
  )
}
