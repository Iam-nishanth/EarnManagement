import styled from "styled-components";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
@import url('https://fonts.cdnfonts.com/css/graphik');
    height: 100px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    /* position: sticky; */
    /* top: 0; */
    z-index: 5;
    font-family: "Graphik",sans-serif;
    font-weight: 500;
    letter-spacing: 0.3px;

    @media screen and (max-width: 960px){
        transition: 0.5s all ease;
        img{
            height: 100%;
            transition: .5s all ease;
        }

    }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 8px 24px;
    max-width: 95%;
`
export const Image = styled.img`
    height: 100%;
    &:hover{
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        scale: 1.05;
    }
`
export const MobileIcon = styled.div`
    display: none;
    transition: .8s all ease;
    cursor: pointer;

    @media screen and (max-width: 600px){
        
        display: block;
        position: absolute;
        color: white;
        top: 18px;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 25px;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align: center;
    gap: 20px;
    @media screen and (max-width: 600px) {
        display: none;
    }
`
export const NavItem = styled.li``

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &:hover{
        transition: 0.5s all ease-in-out;
        /* color: #3990ac; */
        border-bottom: 3px solid #3990ac;
        scale: 1.1;
    }
`
export const NavSocials = styled.div`

    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 20px;
    width: 106px;
    height: 56px;
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 60px;
    transition: 0.5s all ease-in-out;
    a{
        color: #fff;
        font-size: 20px;
        transition: 0.2s all ease-in-out;
        &:hover{
            scale: 1.3;
            color: #3990ac;
        }
    }


@media screen and (max-width: 600px) {
    display: none;
}
@media screen and (max-width: 770px) {
    height: 46px;
}

`
export const Hamburger = styled(FaBars)`
    display: flex;
    /* position: absolute; */

`