import styled from "styled-components";
import {FaTimes,FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";



export const Container = styled.aside`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #040809;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({isOpen})=> (isOpen ? '100%':'0')}; 
    top: ${({isOpen})=> (isOpen ? '0' : '-100%')}; 
    
`
export const Close = styled(FaTimes)`
    color: #fff;
    font-size: 25px;
`
export const Icon = styled.div`
    position: absolute;
    top: 18px;
    right: 20px;
    background: transparent;
    font-size: 35px;
    cursor: pointer;
    outline: none;
`
export const Wrapper = styled.div`
    color: #fff;
`
export const MobileMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
`
export const SocialMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    svg{
        font-size:30px ;
    }
`
export const NLink =  styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &.hover{
        color: #999;
        transition: 0.2s ease-in-out;
    }
`
