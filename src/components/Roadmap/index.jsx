import React from 'react'
import monero from '../assets/images/monero.png'
import { MainWrapper, FirstBox, Img, Container, Details, Box1, InnerCircle1, Box, InnerCircle, BoxGroup, ImageContainer, TextBox1, TextBox2, Heading1, Heading3, Para } from '../../styles/Roadmap.jsx'

const Roadmap = () => {

    const year = '2022'
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Suspendisse id purus augue. Lorem ipsum dolor `
    const N = [2, 3, 4, 5, 6]
    return (
        <MainWrapper>


            <Container>
                <Details>
                    <h1>Road Map</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adiposcing elit.</p>
                </Details>
                <ImageContainer>
                    <FirstBox className='.first'>
                        <Box1>
                            <InnerCircle1/>
                        </Box1>
                        <TextBox1>
                            <Heading1>{year}</Heading1>
                            <Heading3>Q1</Heading3>
                            <Para>{text}</Para>
                        </TextBox1>
                    </FirstBox>
                    <Img src={monero} />
                </ImageContainer>
                {N.map((elementInArray, index) => (
                    <BoxGroup key={index}>
                        <Box className={'box' + elementInArray}>
                            <InnerCircle />
                        </Box>
                        <TextBox2 className={'textbox' + elementInArray}>
                            <Heading1>{year}</Heading1>
                            <Heading3>{'Q' + elementInArray}</Heading3>
                            <Para>{text}</Para>
                        </TextBox2>
                    </BoxGroup>
                )
                )}
            </Container>
        </MainWrapper>


    )
}


export default Roadmap