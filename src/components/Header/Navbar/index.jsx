import React from 'react'
import SiteLogo from '../../assets/images/SiteLogo.svg'
import { Nav, NavContainer, Image, MobileIcon, NavMenu, NavItem, NavLink, NavSocials, Hamburger } from '../../../styles/NavStyles'
import { NavLink as Link, Router } from 'react-router-dom'
import { FaBars, FaDiscord, FaTwitter } from 'react-icons/fa'
import Roadmap from '../../Roadmap'
import Contact from '../../Contact'


const Navbar = ({ toggle }) => {
  return (
    <>
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
            <Link to='/discord'><FaDiscord /></Link>
            <Link to='/twitter'><FaTwitter /></Link>
          </NavSocials>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar