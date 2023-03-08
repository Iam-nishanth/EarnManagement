import React from 'react'
import styled from 'styled-components'
import gorilla from '../assets/images/gorilla.png'

const Gorilla2 = () => {
  return (
    <Wrapper>
        <img src={gorilla}/>
        <Container>
            <TextBox>
               <p>Automate payments for quick transparent cashout?</p>
            </TextBox>
            <TextBox>
               <p>You mean, I can track my scholars's performance</p>
            </TextBox>
            <TextBox>
               <p>All on one platform that doesn't lag? You're kidding</p>
            </TextBox>
            <TextBox>
               <p>Search and Breed Axies and NFTs</p>
            </TextBox>
        </Container>
    </Wrapper>
    
    
  )
}
const Wrapper = styled.div`
    position: relative;
    padding-bottom: 200px;
    height: 600px;
    width: 100%;
    img{
        position: absolute;
        /* height: 600px; */
        object-fit: contain;
        width: 100%;
        height: 100%;
        display: flex;
    }
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 243px);
    grid-template-rows: repeat(2, 83px);
    grid-column-gap: 150px;
    grid-row-gap: 150px;
    div{
        position: relative;
    }
    div:first-child{
        top: 150px;
    }
    div:nth-child(2){
        top: 100px;
    }
    div:nth-child(3){
        top: 150px;
    }
    div:nth-child(4){
        top: 150px;
        width: 190px;
    }
    

`
const TextBox = styled.div`
    color: #fff;
    width: 243px;
    height: 83px;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
`

export default Gorilla2