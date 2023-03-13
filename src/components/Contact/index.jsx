import React from 'react'
import { Wrapper, Title, Details, ContactDetails, ContactInput,  Para, MainContainer, Input, Button, Anchor, DetailsHeading, DetailsPara, Span } from '../../styles/Contact.jsx'


const Contact = () =>
  <MainContainer>
    <Wrapper>
      <Title>
        <DetailsHeading>Contact us</DetailsHeading>
        <DetailsPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</DetailsPara>
      </Title>
      <Details>
        <ContactDetails>
          <Anchor target='_blank' href='https://earnmanagement.com'>Earnmanagement.com</Anchor>
          <Para><Span>US </Span>+1(872)288 9283</Para>
          <Para><Span>US </Span>+1(872)288 9283</Para>
        </ContactDetails>
        <ContactInput>
          <Input placeholder='Your Name' />
          <Input placeholder='Your Email Address' />
          <Input placeholder='Describe your needs' />
          <Button className='btn' type='submit'>Submit Request</Button>
        </ContactInput>
      </Details>


    </Wrapper>
  </MainContainer>





export default Contact