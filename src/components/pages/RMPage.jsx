import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import MobileNav from '../Header/MobileNav'
import Navbar from '../Header/Navbar'
import Roadmap from '../Roadmap'

const Map = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <MobileNav isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        <Container>
            <Roadmap />
            <Footer />
        </Container>
        </>
    )
}

const Container = styled.div`
      display: flex;
      flex-direction: column;
      padding-top: 100px;
    `

export default Map