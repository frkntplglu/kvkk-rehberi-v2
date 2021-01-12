import '../styles/main.scss';
import {useEffect} from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

import AOS from 'aos'
import "aos/dist/aos.css"
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // initialization 
        AOS.init({
          duration: 1200
        });
      }, [])
    return <Component {...pageProps} />
}
export default MyApp;