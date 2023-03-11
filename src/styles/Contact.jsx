import styled from "styled-components";


export const MainContainer = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    `
export const Wrapper = styled.div`
    border-left: 3px solid rgba(255,255,255,.12);
    border-top-left-radius: 30px;
    position: relative;
    bottom: 5px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    max-width: 65%;
    padding: 50px;
    @media (max-width: 600px){
        gap: 50px;
    }
    @media (max-width: 400px){
        gap: 30px;
    }
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 600px){
        gap: 10px;
    }
    `
export const DetailsPara = styled.p`
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 600px){
        font-size: 16px;
    }
    @media (max-width: 400px){
        font-size: 14px;
    }

`
export const DetailsHeading = styled.h1`
    font-size: 80px;
    font-weight: 500;
    @media (max-width: 600px){
        font-size: 58px;
    }
    @media (max-width: 400px){
        font-size: 45px;
    }
`

export const Details = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 50px;
    @media (max-width: 760px){
        flex-direction : column ;
        align-items: center;
        /* gap: 50px; */
    }
`
export const ContactDetails = styled.div`
    display: flex;
    gap: 30px;
    
    flex-direction: column;
    
`
export const  Input = styled.input`
    font-size: 18px;
    height: 50px;
    border: none;
    border-bottom: 1px solid #6C6C6C;
    background-color: transparent;
    color: #fff;
    outline-color: transparent;
    padding-left: 10px;
    min-width: 500px;
    min-height: 40px;
    @media (max-width: 1300px){ min-width: 400px; }
    @media (max-width: 1000px){ min-width: 300px; }
    @media  (max-width: 400px){ min-width: 250px; }
`
export const Button = styled.button`
    width: 150px;
    height: 150px;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    border-radius: 50%;
    align-self: flex-end;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    border: none;

    &:hover{
        background: #359dfd55;
        color: #6C6C6C;
    }
    @media (max-width: 800px){
        width: 100px;
        height: 100px;
    }
`

export const ContactInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    @media (max-width: 600px){
      padding-left: 50px;
    }
`

export const Para = styled.p`
    color: #fff;
    font-size: 25px;
    padding-top: 10px;
    @media (max-width: 1000px){
        font-size: 20px;
    }
    @media (max-width: 400px){
        font-size: 16px;
    }
`
export const Anchor = styled.a`
    
        color: #fff;
        font-size: 25px;
        padding-top: 10px;
        @media (max-width: 1000px){
            font-size: 20px;
        }
        @media (max-width: 400px){
            font-size: 16px;
        }
`
export const Span = styled.span`
    color: #6c6c6c;
`