import styled from "styled-components";
import Gorilla from "../components/Gorilla";
import Input from '../components/Title/Input/index'

export const Wrapper = styled.div`
    display: flex;
    padding: 50px 100px;
    
    
    @media (max-width: 1200px){
        flex-direction: column;
        gap: 80px;
    }
`

export const Div = styled.div`
    height: 600px;
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    flex: 1;

    @media (max-width: 1300px){
        left: 80px;
        h1{
            font-size: 70px;
        }
        h1,p{
            width: 450px;
        }
       
    }
    @media (max-width: 1200px){
      position: unset;
      align-items: center;
      text-align: center;
      h1{
        width: 60%;
        text-align: center;
      }
    }
    @media (max-width: 460px){
        h1{
            width: 80%;
            font-size: 50px;
        }
        P{
            width: 80%;

        }
    }
`
export const Heading = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap');

font-family: 'Outfit', sans-serif;
font-weight: 500;
font-size: 80px;
color: #fff;
width: 614px;
align-self: left;


`
export const Para = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap');

    font-family: 'Outfit', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    width: 582px;
`
export const InputGroup = styled(Input)`
    justify-content: center;
`
export const Container = styled.div``
export const Div2 = styled.div``