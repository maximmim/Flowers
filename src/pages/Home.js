

import React, { useEffect } from 'react'
import Header from '../cpms/Header'
import Floter from '../cpms/Floter'
import Loading from '../cpms/Loading'
import Korzina from '../cpms/Korzina'
import Full_scr from '../cpms/Full_dw'


function Home() {
  useEffect(()=>{
    if (!localStorage.storage) {
      localStorage.storage = '[]';
    }
    if (!localStorage.notification) {
      localStorage.notification = '{}'
}
    if (!localStorage.openmenu) {
      localStorage.openmenu = '{"korz":true,menu:false}'
    }
},[])
  return (
    <>

        <Header/>
        

        <Korzina/>
        <Full_scr/>
        <Floter/>
    </>
  )
}

export default Home