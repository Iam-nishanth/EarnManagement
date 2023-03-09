import React from 'react'
import SiteLogo from '../../assets/images/SiteLogo.svg'
import { Nav, NavContainer, Image, MobileIcon, NavMenu, NavItem, NavLink, NavSocials, Hamburger } from '../../../styles/NavStyles'
import { NavLink as Link, Router } from 'react-router-dom'
import {  FaDiscord, FaTwitter } from 'react-icons/fa'
import Roadmap from '../../Roadmap'
import Contact from '../../Contact'


const Navbar = ({ toggle }) => 
      <Nav>
        <NavContainer>
          <Link to='/'>
            <Image src={SiteLogo} alt='logo-img' />
          </Link>
          <MobileIcon onClick={toggle}>
            <Hamburger />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='/roadmap' element={<Roadmap/>}>Roadmap</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/contact' element={<Contact/>}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/blog'>Blog</NavLink>
            </NavItem>
          </NavMenu>
          <NavSocials>
            <Link to='https://discord.com' target='_blank'><FaDiscord /></Link>
            <Link to='https://twitter.com' target='_blank'><FaTwitter /></Link>
          </NavSocials>
        </NavContainer>
      </Nav>


export default Navbar