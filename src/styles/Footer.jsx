//import {Wrapper,Div,Container1, Container2, Copyright, Icons, Discord,H3,Link} from '../../styles/Footer'

import styled from "styled-components";

export const FooterWrapper = styled.footer`
    height: 320px;
    border-top:1px solid rgba(255, 255, 255, 0.21)    ;
    color: #fff;
    position: relative;
    a{color: #fff;}

    @media (max-width: 650px){
        height: 450px;
    }
    
`
export const ContentWrapper = styled.footer`
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;
    @media (max-width: 680px){
        flex-direction: column;
        text-align: center;
        gap: 25px;
        padding: 50px 0;
        div{
            align-items: center;
        }
    }
`
export const Group = styled.div`
    gap: 15px;
`
export const Container = styled.div`
`
export const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    transition: all 0.5s ease-in-out;
    
    div{
        display: flex;
        flex-direction: column;
    }
    @media (max-width: 400px){
        gap: 30px;
        
    }
    
`
export const Container2 = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    h3:first-child{
        color: blue;
    }
    h3{
        display: flex;
        gap: 25px;
        align-items: center;
    }
    svg{
        font-size: 30px;
    }
    @media (max-width: 600px){
        gap: 10px;
        padding-bottom: 50px;
    }
`
export const Copyright = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    width: 100%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    p{
        font-family: sans-serif;
        letter-spacing: 0.3px;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
    }
    
`
export const Icons = styled.div`
    display: flex;
    gap: 25px;

`
export const Discord = styled.button`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #fff;
    position: fixed;
    right: 30px;
    bottom:30px;
    transition: 0.5s all ease-in-out ;
    cursor: pointer;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    gap: 5px;
    svg{
        font-size: 25px;
    }
    p{
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 900;
        letter-spacing: 0.1px;

    }
    @media (max-width: 800px){
        width: 80px;
        height: 80px;
        
        p{
            text-align: center;
            font-size:12px;
            line-height: 14px;
        }
    }
    @media (max-width: 600px){
        right: 5px;
        bottom: 25px;
        /* display: none; */
    }
`
export const H3 = styled.h3`
`
export const Link = styled.a`
`
