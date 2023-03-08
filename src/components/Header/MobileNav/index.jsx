import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { Close, Container, Icon, MobileMenu, NLink, SocialMenu, Wrapper } from '../../../styles/MobileNav'

const MobileNav = ({isOpen,toggle}) => {
  return (
    <Container isOpen={isOpen} >
        <Icon onClick={toggle}>
          <Close/>
        </Icon>
        <Wrapper>
          <MobileMenu>
            <NLink to='#' onClick={toggle}>Road Map</NLink>
            <NLink to='#' onClick={toggle}>Contact</NLink>
            <NLink to='#' onClick={toggle}>Blog</NLink>
          </MobileMenu>
          <SocialMenu>
            <FaDiscord/>
            <FaTwitter/>
          </SocialMenu>
        </Wrapper>
    </Container>
  )
}

export default MobileNav