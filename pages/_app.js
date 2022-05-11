import { useEffect } from 'react'
import { RouteGuard } from '../components/RouteGuard/RouteGuard'
import '../styles/globals.css'
import "../styles/scss/theme.scss"
import { wrapper } from "../redux";
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/fooActions';
import { checkAuthnticateRedux } from '../redux/actions/authActions';
import useSWR from 'swr'
import { getData } from '../helpers/api_helper';


function MyApp({ Component, pageProps }) {

   const selector =useSelector((state) => state)
   const dispatch = useDispatch()
 
  
   useEffect( () => {
      // const data = await getData(process.env.BASE_URL)
      // console.log(data)
    dispatch(getPosts());
    dispatch(checkAuthnticateRedux('setToken'));
 
   },[])

  return <>
  {/* <RouteGuard> */}
     <Component {...pageProps} />
  {/* </RouteGuard> */}
  </>
}

export default wrapper.withRedux(MyApp)
