import Navbar from '@/components/NavBar';
import '@/styles/globals.css'
import {useState,useEffect} from "react"
import LoadingScreen from '../components/LoadingScreen';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])

  return !loading ?
    <>
      <Navbar/>
      <Component {...pageProps} />
    </> :<LoadingScreen />;
}
