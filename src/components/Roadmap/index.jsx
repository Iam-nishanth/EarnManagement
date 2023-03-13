import React from 'react'
import monero from '../assets/images/monero.png'
import { MainWrapper, FirstBox, Img, Container, Details, Box1, InnerCircle1, Box, InnerCircle, BoxGroup, ImageContainer, TextBox1, H1,H3,TextBox2, Para, DetailsHeading, DetailsPara, FirstBoxH1, FirstBoxH3, FirstBoxPara, BoxGroupH1, BoxGroupH3, BoxGroupPara } from '../../styles/Roadmap.jsx'

const Roadmap = () => {

    const year = '2022'
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Suspendisse id purus augue. Lorem ipsum dolor `
    const N = [2, 3, 4, 5, 6]
    return (
        <MainWrapper>
            <Container>
                <Details>
                    <DetailsHeading>Road Map</DetailsHeading>
                    <DetailsPara>Lorem ipsum dolor sit amet, consectetur adiposcing elit.</DetailsPara>
                </Details>
                <ImageContainer>
                    <FirstBox className='.first'>
                        <Box1>
                            <InnerCircle1/>
                        </Box1>
                        <TextBox1>
                            <FirstBoxH1>{year}</FirstBoxH1>
                            <FirstBoxH3>Q1</FirstBoxH3>
                            <FirstBoxPara>{text}</FirstBoxPara>
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
                            <BoxGroupH1>{year}</BoxGroupH1>
                            <BoxGroupH3>{'Q' + elementInArray}</BoxGroupH3>
                            <BoxGroupPara>{text}</BoxGroupPara>
                        </TextBox2>
                    </BoxGroup>
                ))}
            </Container>
        </MainWrapper>


    )
}


export default Roadmap