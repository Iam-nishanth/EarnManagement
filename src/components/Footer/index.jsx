import React from 'react'
import { FaDiscord, FaMobileAlt, FaTwitter } from 'react-icons/fa'
import { FooterWrapper, Group, Container1, Container2, Copyright, Icons, Discord, H3, Link, ContentWrapper, DiscordH3, MobileH3, CopyrightPara, DiscordPara, MainContainer } from '../../styles/Footer'

const Footer = () =>
    <MainContainer>    
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
                <DiscordH3 className='first'><FaDiscord /> Join us on Discord</DiscordH3>
                <MobileH3><FaMobileAlt />(239) 555-0193</MobileH3>
                <Icons><FaTwitter /><FaDiscord /></Icons>
            </Container2>
        </ContentWrapper>
        <Copyright><CopyrightPara>@Copyright. earnmanagement 2022</CopyrightPara></Copyright>
        <Discord>
            <FaDiscord /><DiscordPara>Join Discord</DiscordPara>
        </Discord>

    </FooterWrapper></MainContainer>





export default Footer