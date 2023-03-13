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
    flex: 1;
    transition: all 0.5s ease-in-out;
    
    @media (max-width: 1300px){
        text-align: center;
        align-items: center;
    }
    @media (max-width: 500px){
        gap: 10px;
    }
`
export const TitleH1 = styled.h1`
        font:  500 80px 'Outfit';
        color: #fff;
        align-self: left;
        transition: all 0.5s ease-in-out;
        @media (max-width: 1300px){
            font-size: 70px;
        }
        @media (max-width: 500px){
            font-size: 65px;
            padding: 15px;
        }
        @media (max-width: 340px){
            font-size: 58px;
        }
`
export const Para = styled.p`
    font : 400 20px 'Outfit';
    color: #fff;
    transition: all 0.5s ease-in-out;
`
export const TitlePara = styled.p`
    font:  400 20px 'Outfit';
    color: #fff;
    transition: all 0.5s ease-in-out;
    @media (max-width: 500px){
        font-size: 16px;
        padding: 15px;
    }
`
export const Button = styled.button`
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
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: flex-end;
    transition: all 0.5s ease-in-out;
    
    @media (max-width: 500px){
        height: 50px;
        width: 50px;
    }

    &:hover{
        svg{
            transform: rotate(360deg);
            transition: 0.60s;
        }
    }
`

export const Input = styled.input`
    height: 100%;
    background: transparent;
    color: #fff;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    border: unset;
    border-right: 1px solid rgba(255, 255, 255, 0.18);
    border-top-left-radius: 89px;
    border-bottom-left-radius: 89px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 500px){
        width: 160px;
        font-size: 12px;
    }
    `
export const Select = styled.select`
    height: 100%;
    width: 125px;
    background: transparent;
    color: rgba(255, 255, 255, 0.18);
    font-size: 16px;
    border:  unset;
    font-weight: bold;
    color: #fff;
    line-height: 10px;
    font-size: 16px;
    padding-left: 10px;
    transition: all 0.5s ease-in-out;

    appearance: none;
    background-image: url('/src/components/assets/images/Arrow.svg');
    background-repeat: no-repeat;
    background-position: right 35% bottom 45%;
    @media (max-width: 500px){
        width: 95px;
        background-position: right 15% bottom 48%;
        font-size: 14px;
    }
`
export const InputContainer = styled.div`
    width: 465px;
    height: 75px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(255,255,255,0.18);
    border-radius: 89px;
    
    @media (max-width: 1300px){
        align-self: center;
    }
    @media (max-width: 500px){
        height: 60px;
        width: 310px;
    }

`
export const ImageContainer = styled.div` 
    max-width: 100%;
    min-height: 320px;
    min-width: 320px;
    
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
        width: 600px;
    }
    @media (max-width: 600px){
        width: 450px;
    }
    @media (max-width: 520px){
        width: 400px;
    }
    @media (max-width: 400px){
        width: 350px;
    }
    @media (max-width: 350px){
        width: 320px;
    }
    `
export const BoxContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

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
    }
    @media (max-width: 350px){
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
    width: 100%;
    max-width: 243px;
    height: 87px;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    transition: all 0.5s ease-in-out;

    @media (max-width: 520px){
        border-radius: 70px;
        backdrop-filter: blur(20px);
        padding: 18px;
    }

`
export const TextBoxP = styled.p`
    font-size: 16px;
    @media (max-width: 770px){
        font-size: 14px;
    }
    @media (max-width: 520px){
        font-size: 10px;
    }
    @media (max-width: 350px){
        font-size: 9px;
    }
` 

export const Img = styled.img``
export const BitcoinImg = styled.img`
    width: 250px;
    height: 250px;
    position: relative;
    top: 60px;
    left: 250px;
    @media (max-width: 1300px){
        left: 220px;
        top: 10px;
    }
    @media (max-width: 600px){
        width: 160px;
        height: 160px;
        top: -50px;
        left: 180px;
    }
    @media (max-width: 520px){
        top: -20px;
        left: 160px;
    }
    @media (max-width: 400px){
        width: 130px;
        height: 130px;
        top: -45px;
        left: 140px;
    }
    @media (max-width: 350px){
        width: 120px;
        height: 120px;
        top: -65px;
        left: 130px;
    }
`

export const SelectOption = styled.option``