import React from 'react'
import gorilla from '../assets/images/gorilla.png'
import bitcoin from '../assets/images/bitcoin.png'
import { BoxContainer, Button, H1, ImageContainer, Img, Input, InputContainer, MainWrapper,Para, Select, TextBox, TitleContainer,SelectOption } from '../../styles/GorillaSection'

const GorillaSection = () => <MainWrapper>

            <TitleContainer>
                <H1>Guild Hub of the Metaverse</H1>
                <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet. </Para>
                <InputContainer>
                    <Input placeholder='Enter Email address' />
                    <Select>
                        <SelectOption>Owner</SelectOption>
                        <SelectOption>User</SelectOption>
                        <SelectOption>Admin</SelectOption>
                    </Select>
                    
                        <Button>
                            <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8296 10.693L1.22414 0.863296C1.14445 0.823452 1.05304 0.814078 0.966324 0.835171C0.767105 0.88439 0.642886 1.08595 0.692105 1.28751L2.71242 9.5422C2.74289 9.66642 2.83429 9.7672 2.95617 9.80704L6.41789 10.9953L2.95851 12.1836C2.83664 12.2258 2.74523 12.3242 2.71711 12.4485L0.692105 20.7149C0.671011 20.8016 0.680386 20.893 0.72023 20.9703C0.811636 21.1555 1.03664 21.2305 1.22414 21.1391L20.8296 11.3656C20.9023 11.3305 20.9609 11.2695 20.9984 11.1992C21.0898 11.0117 21.0148 10.7867 20.8296 10.693ZM3.00304 18.3664L4.18195 13.5477L11.1007 11.1735C11.1546 11.1547 11.1991 11.1125 11.2179 11.0563C11.2507 10.9578 11.1991 10.8524 11.1007 10.8172L4.18195 8.44533L3.00773 3.64533L17.7265 11.0258L3.00304 18.3664Z" fill="white" />
                            </svg>

                        </Button>
                    

                </InputContainer>
            </TitleContainer>

            <ImageContainer>
                <Img src={gorilla} className='gorilla' alt='gorilla-img' />
                <BoxContainer>
                    <TextBox >
                        <Para>Automate payments for quick transparent cashout?</Para>
                    </TextBox>
                    <TextBox>
                        <Para>You mean, I can track my scholars's performance</Para>
                    </TextBox>
                    <TextBox>
                        <Para>All on one platform that doesn't lag? You're kidding</Para>
                    </TextBox>
                    <TextBox>
                        <Para>Search and Breed Axies and NFTs</Para>
                    </TextBox>
                    <Img src={bitcoin} />
                </BoxContainer>
            </ImageContainer>

        </MainWrapper>




export default GorillaSection