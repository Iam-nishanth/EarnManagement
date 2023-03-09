import React from 'react'
import {FaDiscord,  FaMobileAlt, FaTwitter} from 'react-icons/fa'
import {FooterWrapper,Group,Container1, Container2, Copyright, Icons, Discord,H3,Link, ContentWrapper} from '../../styles/Footer'

const Footer = () => 

        <FooterWrapper>
            <ContentWrapper>
            <Container1>
                <Group>
                   <H3>Fingertips</H3> 
                    <Link>Home</Link>
                    <Link>Blog</Link>
                    <Link>Roadmap</Link>
                    <Link>Contact</Link>
                </Group>
                <Group>
                    <H3>Resources</H3>
                    <Link>Discord</Link>
                    <Link>Twitter</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                </Group>
                <Group>
                    <H3>About</H3>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                    <Link>Lorem</Link>
                </Group>
            </Container1>
            <Container2>
                <H3 className='first'><FaDiscord/> Join us on Discord</H3>
                <H3><FaMobileAlt/>(239) 555-0193</H3>
                <Icons><FaTwitter/><FaDiscord/></Icons>
            </Container2></ContentWrapper>
            <Copyright><p>@Copyright. earnmanagement 2022</p></Copyright>
            <Discord><FaDiscord/><p>Join Discord</p></Discord>

        </FooterWrapper>




export default Footer