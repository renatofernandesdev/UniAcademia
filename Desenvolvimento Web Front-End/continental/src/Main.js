import React from 'react'
import Home from './Home'
import Home2 from './Home2'

function Main(props) {
  if(props.ativo){
    return <Home/>
  }
  else{
    return <Home2
    instagram = 'instagram.com/renatodw'
    whatsapp = '(32) 98484-5162'
    email = 'a@ass.com'/>
  }
}

export default Main;