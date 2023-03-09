import React, { useState } from 'react'
import styled from 'styled-components'
import Contact from '../Contact'
import Footer from '../Footer'
import MobileNav from '../Header/MobileNav'
import Navbar from '../Header/Navbar'

const ContactPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>

      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Contact />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default ContactPage