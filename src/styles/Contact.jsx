import styled from "styled-components";


export const MainWrapper = styled.div`
    color: #fff;
    font-family: sans-serif;
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
    h1{
        font-size: 80px;
        font-weight: 500;
    }
    p{
        font-size: 18px;
        font-weight: 400;
    }
    @media (max-width: 760px){
        /* text-align: center; */
    }
    @media (max-width: 600px){
        h1{font-size: 60px;}
        p{font-size:16px;}
        gap: 10px;
    }
    @media (max-width: 400px){
        h1{font-size: 45px;}
        p{font-size:14px;}
    }

`
export const Details = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 760px){
        flex-direction : column ;
        align-items: center;
        gap: 50px;
    }
`
export const ContactDetails = styled.div`
    display: flex;
    /* justify-content: center; */
    gap: 30px;
    /* align-items: center; */
    
    flex-direction: column;
    a,p{
        color: #fff;
        font-size: 25px;
        padding-top: 10px;
        span{
            color: #6c6c6c;
        }
        @media (max-width: 1000px){
            font-size: 20px;
        }
        @media (max-width: 400px){
            font-size: 16px;
            text-align: center;
        }
    }
`
export const ContactInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    input{
        font-size: 18px;
        height: 50px;
        border: none;
        border-bottom: 1px solid #6C6C6C;
        background-color: transparent;
        color: #fff;
        outline-color: transparent;
        padding-left: 10px;
        width: 582px;
        @media (max-width: 1300px){
            width: 400px;
        }
        @media (max-width: 1000px){
            height: 40px;
            width: 300px;
        }
        @media (max-width: 400px){
            width: 250px;
        }
    }
    button{
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
        
    }
    @media (max-width: 760px){
        button{
        width: 90%;
        border-radius: 50px;
        height: 50px;
        align-self: center;
      }
      padding-left: 50px;
    }
`
export const Heading = styled.h1``
export const Para = styled.p``