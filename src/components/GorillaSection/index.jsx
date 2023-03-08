import React from 'react'
import styled from 'styled-components'
import gorilla from '../assets/images/gorilla.png'
import bitcoin from '../assets/images/bitcoin.png'

const GorillaSection = () => {
    return (
        <MainWrapper>

            <TitleContainer>
                <h1>Guild Hub of the Metaverse</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet. </p>
                <InputContainer>
                    <input placeholder='Enter Email address' />
                    <select>
                        <option>Owner</option>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    
                        <button>
                            <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8296 10.693L1.22414 0.863296C1.14445 0.823452 1.05304 0.814078 0.966324 0.835171C0.767105 0.88439 0.642886 1.08595 0.692105 1.28751L2.71242 9.5422C2.74289 9.66642 2.83429 9.7672 2.95617 9.80704L6.41789 10.9953L2.95851 12.1836C2.83664 12.2258 2.74523 12.3242 2.71711 12.4485L0.692105 20.7149C0.671011 20.8016 0.680386 20.893 0.72023 20.9703C0.811636 21.1555 1.03664 21.2305 1.22414 21.1391L20.8296 11.3656C20.9023 11.3305 20.9609 11.2695 20.9984 11.1992C21.0898 11.0117 21.0148 10.7867 20.8296 10.693ZM3.00304 18.3664L4.18195 13.5477L11.1007 11.1735C11.1546 11.1547 11.1991 11.1125 11.2179 11.0563C11.2507 10.9578 11.1991 10.8524 11.1007 10.8172L4.18195 8.44533L3.00773 3.64533L17.7265 11.0258L3.00304 18.3664Z" fill="white" />
                            </svg>

                        </button>
                    

                </InputContainer>
            </TitleContainer>

            <ImageContainer>
                <img src={gorilla} className='gorilla' alt='gorilla-img' />
                <BoxContainer>
                    <TextBox >
                        <p>Automate payments for quick transparent cashout?</p>
                    </TextBox>
                    <TextBox>
                        <p>You mean, I can track my scholars's performance</p>
                    </TextBox>
                    <TextBox>
                        <p>All on one platform that doesn't lag? You're kidding</p>
                    </TextBox>
                    <TextBox>
                        <p>Search and Breed Axies and NFTs</p>
                    </TextBox>
                    <img src={bitcoin} />
                </BoxContainer>
            </ImageContainer>

        </MainWrapper>
    )
}

const MainWrapper = styled.section`
    color: #fff;
    display: flex;

    width: 100%;
    max-width: 1300px;
    min-width: 320px;
    align-self: center;

    @media (max-width: 1300px){
        flex-direction: column;
        align-items: center;
        gap: 50px;        
    }

    padding-bottom: 100px;
    
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    /* width: 90%; */
    flex: 1;
    p{
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap');
        font-family: 'Outfit', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #fff;
    }
    h1{
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500&display=swap');
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        font-size: 80px;
        color: #fff;
        align-self: left;
    }
    
    @media (max-width: 1300px){
        text-align: center;
        align-items: center;
        h1{
            font-size: 70px;
        }
    }
    @media (max-width: 500px){
        h1{
            font-size: 65px;
            padding: 15px;
        }
        p{
            font-size: 16px;
            padding: 15px;
        }
    }

`
const InputContainer = styled.div`
    width: 465px;
    height: 75px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(255,255,255,0.18);
    border-radius: 89px;
    input{
        height: 100%;
        background-color: transparent;
        color: #fff;
        padding: 20px;
        font-size: 16px;
        font-weight: bold;
        /* outline: none; */
        position: relative;
        border: unset;
        border-right: 1px solid rgba(255, 255, 255, 0.18);
        border-top-left-radius: 89px;
        border-bottom-left-radius: 89px;
    }
    select{
        height: 100%;
        width: 140px;
        background-color: transparent;
        color: rgba(255, 255, 255, 0.18);
        font-size: 16px;
        border:  unset;
        /* padding: 14px; */
        font-weight: bold;
        color: #fff;
        line-height: 10px;
        font-size: 16px;
        padding-left: 10px;

        appearance: none;
        background-image: url('/src/components/assets/images/Arrow.svg');
        background-repeat: no-repeat;
        background-position: right 35% bottom 45%;
    }
    
    button{
        background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
        border: none;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 63px;
        width: 63px;
        justify-self: flex-end;
    }

    @media (max-width: 1300px){
        align-self: center;
    }
    @media (max-width: 500px){
        height: 60px;
        width: 310px;
        input{
            width: 165px;
            font-size: 12px;
        }
        button{
            height: 40px;
            width: 40px;
        }
        select{
            width: 100px;
            background-position: right 15% bottom 48%;
            font-size: 14px;
            
        }
    }

`
const ImageContainer = styled.div` 
    width: 100%;
    height: 100%;
    
    display: flex;
    flex: 1;
    position: relative;

    .gorilla{
        width: 100%;
        height: 100%;
        position: relative;
        padding-left: 50px;
    }
    @media (max-width: 1300px){
        height   :600px ;
        width: 600px;
    }
    @media (max-width: 600px){
        height: 450px;
        width: 450px;
    }
    @media (max-width: 520px){
        height: 400px;
        width: 400px;
    }
    @media (max-width: 400px){
        height: 350px;
        width: 350px;
    }
    @media (max-width: 350px){
        height: 320px;
        width: 320px;
    }
    `
const BoxContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    img{
        width: 250px;
        height: 250px;
        position: relative;
        top: 20px;
        left: 270px;
    }
    div{
        /* width: 210px; */
        height: 70px;
    }
    div:first-child{
        top: 100px;
    }
    div:nth-child(2){
        left: 400px;
    }
    div:nth-child(3){
        top: 200px;
        right: -20px;
    }
    div:nth-child(4){
        left: 430px;
        top: 100px;
        width: 190px;
    }
    @media (max-width: 1300px){
        div{
            width: 210px;
            /* top: 100px; */
        }
        div:nth-child(2){
            left: 380px;
        }
        div:nth-child(3){
            top: 230px;
        }
        div:nth-child(4){
            left: 380px;
            top: 150px;
        }
        img{
            left: 220px;
            top: 75px;
        }
    }
    @media (max-width: 600px){
        div{
            width: 180px;
            height: 80px;
            text-align: center;
        }
        div:first-child{
            left: -20px;
        }
        div:nth-child(2){
            left: 300px;
            top:-40px;
        }
        div:nth-child(3){
            top:110px;
        }
        div:nth-child(4){
            left: 280px;
            top: 10px;
        }img{
            width: 160px;
            height: 160px;
            top: -50px;
            left: 180px;
        }
    }
    @media (max-width: 520px){
        div{
            width: 150px;
            height: 60px;
        }
        div:first-child{
            left: 20px;
        }
        div:nth-child(2){
            left: 240px;
            top: 10px;
        }

        div:nth-child(4){
            width: 120px;
            left: 250px;
            top: 50px;
        }
        img{
            top: -20px;
            left: 160px;
        }
    }
    @media (max-width: 400px){
        div{
            width: 120px;
        }
        div:first-child{
            top: 50px;
            left: 0px;
        }
        div:nth-child(2){
            left: 200px;
            top: -20px;
        }
        div:nth-child(3){
            left: 0px;
            top: 80px;
        }
        div:nth-child(4){
            left: 230px;
            top: 20px;
        }
        img{
            width: 130px;
            height: 130px;
            top: -45px;
            left: 140px;
        }
        
    }
`

const TextBox = styled.div`
    position: relative;
    width: 243px;
    height: 83px;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    
    @media (max-width: 520px){
        border-radius: 70px;
        p{
            font-size: 11px;
        }

    }
`

export default GorillaSection