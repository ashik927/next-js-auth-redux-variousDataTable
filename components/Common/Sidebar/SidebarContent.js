import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import SimpleBar from "simplebar-react"
import MetisMenu from "metismenujs"
import { useRouter } from 'next/router'
import { userService } from '../../../services'
import { useDispatch } from 'react-redux'
import { deauthenticate } from '../../../redux/actions/authActions'


export const Sidebar = (props) => {

  const ref = useRef()
  const router = useRouter()
  const dispatch = useDispatch()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = router.pathname
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [router.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(deauthenticate(''));
    userService.logout()
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title"> Main Menu </li>

            <li>
              <Link href="/" className="has-arrow "><a>
                <i className="fas fa-poll" />
                  <span> Dashboard</span>
                </a></Link>
             
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="bx bx-store"></i>
                <span>Retailer</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/retailer/browseretailer"><a>Browse Retailer </a></Link>
                </li>
                <li>
                  <Link href="/retailer/addretailer"><a>Add Retailer </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="far fa-user-circle"></i>
                <span>HR</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/hr/browseemployee"><a>Browse Employee </a></Link>
                </li>
                <li>
                  <Link href="/hr/addemployee"><a>Add Employee </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="far fa-calendar-minus"></i>
                <span>Route Planning</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/routeplanning/browseroute"><a>Browse Route </a></Link>
                </li>
                <li>
                  <Link href="/routeplanning/addroute"><a>Add Route </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/targets" className="has-arrow "><a>
                <i className="fab fa-searchengin" />
                <span>Targets </span>
              </a></Link>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="bx bx-store"></i>
                <span>Stock</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/stock/qcentry"><a>QC Entry </a></Link>
                </li>
                <li>
                  <Link href="/stock/warehouseqcentry"><a>Warehouse QC Entry </a></Link>
                </li>
              </ul>
            </li>
           
            <li>
              <Link href="/salesplan/managebrandsku" className=""><a>
                <i className="far fa-file-alt" />
                <span> Sales Plan </span>
              </a></Link>
            </li>
          
            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="fas fa-clipboard-list"></i>
                <span>Reports</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/reports/browse_report"><a>Browse Reports </a></Link>
                </li>
                <li>
                  <Link href="/reports/add_report"><a>Add Report </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="fas fa-tasks"></i>
                <span>Data Entry</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/data_entry/browse_entry"><a>Browse Entries </a></Link>
                </li>
                <li>
                  <Link href="/data_entry/add_entry"><a>Add New </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/credential/changepassword" className=""><a>
                <i className="bx bx-chat" />
                <span> Credentials </span>
              </a></Link>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="bx bx-store"></i>
                <span>Products</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/products/browse_products"><a>Browse Employee </a></Link>
                </li>
                <li>
                  <Link href="/products/add_products"><a>Add Employee </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="bx bx-store"></i>
                <span>Stock Rotation</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/stockrotation/webentry"><a>Web Entry </a></Link>
                </li>
                <li>
                  <Link href="/stockrotation/stockrotationreport"><a>Stock Rotation Report </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="bx bx-store"></i>
                <span>Stock Management</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">

                <li>
                  <Link href="/stockmangement/stockmanagereport"><a>Stock Mgt. Report </a></Link>
                </li>
                <li>
                  <Link href="/stockmangement/pointtopointtransfer"><a>Point to point transfer </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/voicerecording" className=""><a>
                <i className="bx bx-chat" />
                <span> Voice Recording </span>
              </a></Link>
            </li>

            <li>
              <Link href="/paanmasalaCollection" className=""><a>
                <i className="bx bx-chat" />
                <span>Paan Masala Collection</span>
              </a></Link>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="fas fa-clipboard-list"></i>
                <span>Survey</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link href="/survey/surveyconfiguration"><a>Survey Configuration </a></Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#"><a className="has-arrow">
                <i className="fas fa-clipboard-list"></i>
                <span>Section Config Create</span>
              </a></Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link href="/sectionconfigcreate"><a>Section Config Create </a></Link>
                </li>
                <li>
                  <Link href="/sectionconfigcreate/ffsectionmapping"><a>FF Section Mapping  </a></Link>
                </li>
                <li>
                  <Link href="/sectionconfigcreate/fieldforce"><a>Field Force </a></Link>
                </li>
              </ul>
            </li>
           
            <li onClick={(e)=>handleLogout(e)} className='pt-4'>
              {/* <Link href="#" className=""><a> */}
                <button className="btn  btn_red logOutButton"  >
                {/* <i className="bx bx-chat" />  */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.996 1.5H1v16h8M13 13.5l4-4-4-4M5.445 9.497H17"
                  ></path>
                </svg>
                 &nbsp; &nbsp;  Logout
                </button>
                {/* </a></Link> */}
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}
