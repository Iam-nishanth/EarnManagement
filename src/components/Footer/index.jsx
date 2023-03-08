import React from 'react'
import styled from 'styled-components'
import {FaDiscord,  FaMobileAlt, FaTwitter} from 'react-icons/fa'
import {FooterWrapper,Div,Container1, Container2, Copyright, Icons, Discord,H3,Link, Wrapper} from '../../styles/Footer'

const Footer = () => {
    return (
        <FooterWrapper>
            <Wrapper>
            <Container1>
                <Div>
                   <H3>Fingertips</H3> 
                    <Link>Home</Link>
                    <Link>Blog</Link>
                    <Link>Roadmap</Link>
                    <Link>Contact</Link>
                </Div>
                <Div>
                    <H3>Resources</H3>
                    <Link>Discord</Link>
                    <Link>Twitter</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                </Div>
                <Div>
                    <H3>About</H3>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                </Div>
            </Container1>
            <Container2>
                <H3 className='first'><FaDiscord/> Join us on Discord</H3>
                <H3><FaMobileAlt/>(239) 555-0193</H3>
                <Icons><FaTwitter/><FaDiscord/></Icons>
            </Container2></Wrapper>
            <Copyright><p>@Copyright. earnmanagement 2022</p></Copyright>
            <Discord><FaDiscord/><p>Join Discord</p></Discord>

        </FooterWrapper>
    )
}




export default Footer