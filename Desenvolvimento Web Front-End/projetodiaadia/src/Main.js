import React from "react"
import MainBase from './MainBase'
import MainInscricao from './MainInscricao'

function Main(props) {
  if(props.desconto === 'sim'){
    return <MainInscricao/>
  }
  else{
    return <MainBase
    instagram = 'instagram.com/renatodw'
    whatsapp = '(32) 98484-5162'/>
  }
}

export default Main;