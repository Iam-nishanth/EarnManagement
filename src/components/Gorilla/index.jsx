import React from 'react'
import gorilla from '../assets/images/gorilla.png'
import bitcoin from '../assets/images/bitcoin.png'
import { Container, Para, TextBox, Wrapeer } from '../../styles/Gorilla'


const Gorilla = () => {
  return (
    <Wrapeer>
      <img src={gorilla}/>
      <Container>
        <TextBox><Para>Automate payments for quick transparent cashout?</Para></TextBox>
        <TextBox><Para>You mean, i can track my scholars' performance</Para></TextBox>
        <img src={bitcoin}/>
        <TextBox><Para>All on one platform that doesn't lag? You're kidding</Para></TextBox>
        <TextBox><Para>Search and Breed Axies and NFTs</Para></TextBox>
      </Container>
      
    </Wrapeer>
  )
}




export default Gorilla