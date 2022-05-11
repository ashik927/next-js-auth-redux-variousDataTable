import React , {useState , useEffect} from 'react'
import { Header } from '../components/Common/Sidebar/Header/Header'
import { VerticalSideBar } from '../components/Common/Sidebar/VerticalSideBar'
import { useRouter } from 'next/router'
import { Loader } from '../components/Loader'
import { getIsMobile } from '../redux/actions/fooActions'
import { useDispatch } from 'react-redux'


export const Layout = (props) => {
  const [loading , setLoading] =useState (true)
  const [isMobile , setIsMobile] =useState (false)
  const router = useRouter()
  const dispatch = useDispatch()
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  // const isMobile = false

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    // console.log('NEXT_PUBLIC_APP_VERSION' , process.env.BASE_URL)
    // console.log('NEXT_PUBLIC_APP_VERSION' , process.env.BASE_URL_ONE)
    dispatch(getIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)));
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [router.pathname])
  return (
    <>
    {
    loading ? 
    <>
     <Loader isMobile={isMobile}/>
     {/* <VerticalSideBar/> */}
     </>
    :
    <div id="layout-wrapper">
        <Header headbar={props.headbar}/>
        <VerticalSideBar/>
        <div className="main-content">{props.children}</div>
      </div>
    }
     
    </>
  )
}
