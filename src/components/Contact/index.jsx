import React from 'react'
import { Wrapper, Title, Details, ContactDetails, ContactInput, Heading, Para, MainWrapper } from '../../styles/Contact.jsx'


const Contact = () =>
  <MainWrapper>
    <Wrapper>
      <Title>
        <Heading>Contact us</Heading>
        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Para>
      </Title>
      <Details>
        <ContactDetails>
          <a target='_blank' href='https://earnmanagement.com'>Earnmanagement.com</a>
          <Para><span>US </span>+1(872)288 9283</Para>
          <Para><span>US </span>+1(872)288 9283</Para>
        </ContactDetails>
        <ContactInput>
          <input placeholder='Your Name' />
          <input placeholder='Your Email Address' />
          <input placeholder='Describe your needs' />
          <button className='btn' type='submit'>Submit Request</button>
        </ContactInput>
      </Details>


    </Wrapper>
  </MainWrapper>





export default Contact