import styled from "styled-components"

export const MainWrapper = styled.section`

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
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    /* width: 90%; */
    flex: 1;
    transition: all 0.5s ease-in-out;
    
    @media (max-width: 1300px){
        text-align: center;
        align-items: center;
        h1{
            font-size: 70px;
        }
    }
    @media (max-width: 500px){
        gap: 10px;
        h1{
            font-size: 65px;
            padding: 15px;
        }
        p{
            font-size: 16px;
            padding: 15px;
        }
    }
    @media (max-width: 340px){
        h1{
            font-size: 58px;
        }
    }

`
export const InputContainer = styled.div`
    width: 465px;
    height: 75px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(255,255,255,0.18);
    border-radius: 89px;
    background: rgba(255, 255, 255, 0.03);
    input{
        height: 100%;
        background: rgba(255, 255, 255, 0.03);
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
        transition: all 0.5s ease-in-out;

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
        transition: all 0.5s ease-in-out;
        background: rgba(255, 255, 255, 0.03);


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
        height: 68px;
        width: 68px;
        justify-self: flex-end;
        transition: all 0.5s ease-in-out;
        &:hover{
            svg{
                transform: rotate(360deg);
                transition: 0.60s;
            }
        }
    }

    @media (max-width: 1300px){
        align-self: center;
    }
    @media (max-width: 500px){
        height: 60px;
        width: 310px;
        input{
            width: 160px;
            font-size: 12px;
        }
        button{
            height: 50px;
            width: 50px;
        }
        select{
            width: 100px;
            background-position: right 15% bottom 48%;
            font-size: 14px;
            
        }
    }

`
export const ImageContainer = styled.div` 
    width: 100%;
    height: 100%;
    
    display: flex;
    flex: 1;
    position: relative;
    transition: all 0.5s ease-in-out;


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
export const BoxContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    img{
        width: 250px;
        height: 250px;
        position: relative;
        top: 60px;
        left: 250px;
    }
    /* div{height: 70px;} */
    div:first-child{
        top: 130px;
        left: -20px;
    }
    div:nth-child(2){
        left: 400px;
        top: 40px;
    }
    div:nth-child(3){
        top: 220px;
        right: -20px;
    }
    div:nth-child(4){
        left: 430px;
        top: 150px;
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
            top: 200px;
        }
        div:nth-child(4){
            left: 380px;
            top: 110px;
        }
        img{
            left: 220px;
            top: 10px;
        }
    }
    @media (max-width: 600px){
        div{
            width: 180px;
            height: 80px;
        }
        div:first-child{
            left: -20px;
            top: 100px;
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
            top: 100px;
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
            left: 20px;
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
    @media (max-width: 350px){
        img{
            width: 120px;
            height: 120px;
            top: -65px;
            left: 130px;
        }
        div:nth-child(4){
            left: 200px;
            top: -10px;
        }
        div:nth-child(3){
            left: 20px;
            top: 60px;
        }
        div:nth-child(1){
            left: 10px;
        }
    }
`

export const TextBox = styled.div`
    position: relative;
    width: 243px;
    height: 87px;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    transition: all 0.5s ease-in-out;

    p{
        font-size: 16px;
    }
    @media (max-width: 770px){
        p{font-size:14px;}
    }

    @media (max-width: 520px){
        border-radius: 70px;
        backdrop-filter: blur(20px);
        padding: 18px;
        p{
            font-size: 10px;
        }
    }
    @media (max-width: 350px){
        p{
            font-size: 9px;
        }
    }
`
export const H1 = styled.h1`
        font-weight: 500;
        font-size: 80px;
        color: #fff;
        align-self: left;
        transition: all 0.5s ease-in-out;
`
export const Para = styled.p`
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        transition: all 0.5s ease-in-out;
`

export const Input = styled.input``
export const Select = styled.select``
export const SelectOption = styled.option``
export const Button = styled.button``
export const Img = styled.img``