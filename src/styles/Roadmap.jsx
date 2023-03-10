import styled from "styled-components";


export const MainWrapper = styled.div`
    color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    
    &::before{
        content: "";
        position: absolute;
        border-bottom: 3px solid rgba(255,255,255,0.18);
        border-bottom-right-radius: 26px;
        top: -16px;
        width: 17.6%;
        height: 50px;
        transform: rotateX(180deg);
        
        @media (max-width: 450px){
            width: 22%;
        }
    }
    `
export const Details = styled.div`
    align-self: center;
    width: 100%;
    max-width: 65%;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    transition: all 0.5s ease-in-out;
    border-left: 3px solid rgba(255,255,255,0.12);

    @media (max-width: 620px ){
        padding-bottom: 75px;
    }
    @media (max-width: 500px){
        width: 100%;
        padding-left: 20px;
    }
`
export const DetailsPara = styled.p`
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 620px){
        font-size: 16px;
    }
    @media (max-width: 500px){
        font-size: 14px;
        width: 200px;
    }
`

export const DetailsHeading = styled.h1`
    font-size: 80px;
    font-weight: 500;

    @media (max-width: 620px){
        font-size: 70px;
    }
    @media (max-width: 500px){
        font-size: 50px;
        font-weight: 500;
    }
`
export const FirstBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 350px;
    transition: all 0.5s ease-in-out;
    /* p{
        width: 380px;
    } */
    @media (max-width: 600px){
        height: 280px;
    }


`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    
    
    @media (max-width: 450px){
        align-self: center;
        max-width: 87%;
        padding-right: 15px;
    }
    @media(max-width: 330px){
        max-width: 87%;
    }
    
`
export const Box = styled.div`
    width: 214px;
    height: 133px;
    background: rgba(29, 51, 64, 0.45);
    backdrop-filter: blur(40px);
    border-radius: 32px;
    transition: all 0.5s ease-in-out;


    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1000px){
        width: 180px;
        height: 110px;
    }
    @media (max-width: 600px){
        width: 160px;
        height: 90px;
    }
    @media (max-width: 480px){
        width: 120px;
        height: 80px;
    }

    @media (max-width: 370px){
        width: 100px;
    }
`
export const InnerCircle = styled.div`
    width: 100px;
    height: 100px;
    background: linear-gradient(200deg, #778282 0%, #2F3842 100%);
    border: 6px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: all 0.5s ease-in-out;

    @media (max-width: 1000px){
        width: 80px;
        height: 80px;
    }
    @media (max-width: 600px){
        width: 60px;
        height: 60px;
    }
    @media (max-width: 480px){
        width: 55px;
        height: 55px;
    }
    @media (max-width: 370px){
        width: 48px;
        height: 48px;
    }
`
export const Box1 = styled.div`
    width: 210px;
    height: 180px;
    background: #FFFFFF;
    box-shadow: 12px 32px 80px 20px rgba(0, 0, 0, 0.12);
    border-radius: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -100px;

    @media (max-width: 1000px){
        width: 190px;
        height: 150px;
    }
    @media (max-width: 770px){
        width: 170px;
        height: 130px;
    }
    @media (max-width: 600px){
        width: 150px;
        left: -80px;
    }
    @media (max-width: 480px){
        width: 120px;
        height: 100px;
        left: -60px;
    }
`
export const InnerCircle1 = styled.div`
    width: 100px;
    height: 100px;

    background: linear-gradient(180deg, #15C4C6 0%, #0C79F4 100%);
    border: 6px solid rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    @media (max-width: 770px){
        width: 80px;
        height: 80px;
    }
    @media (max-width: 480px){
        width: 60px;
        height: 60px;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 65%;
    align-items: center;
    align-self: center;
    position: relative;
    border-bottom: 3px solid rgba(255, 255, 255, 0.12);
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-radius:  0 30px 0 30px;
    transition: all 0.5s ease-in-out;
    background-blend-mode: overlay normal;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
    background-repeat: no-repeat;
    
    img{
        width: 200px;
    }
    @media (max-width: 650px){
        flex-direction: column-reverse;
        /* text-align: center; */
    }
    @media (max-width: 500px){
        img{
            width: 180px;
            height: 180px;
        }
    }
`
export const BoxGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 65%;
    height: 250px;
    align-self: center;
    position: relative;
    transition: all 0.5s ease-in-out;

    
    &:nth-child(odd){
        justify-content: right;
        flex-direction: row-reverse;
        text-align: right;
        border-right: 3px solid rgba(255, 255, 255, 0.12);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        position: relative;
        left: 17px;
        height: 260px;

    }
    &:nth-child(even){
        border: 3px solid rgba(255, 255, 255, 0.12);
        border-right: none;
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
        height: 240px;
    }
    &:last-child{
        border-bottom: 3px solid rgba(255, 255, 255, 0.12);
    }
    .box2,.box4,.box6{
        position: absolute;
        right: -100px;
        @media (max-width: 600px){
            right: -80px;
        }
        @media (max-width: 480px){
            right: -65px;
        }
        @media (max-width: 370px){
            right: -50px;
        }
    }
    .box3,.box5{
        position: absolute;
        left: -100px;
        @media (max-width: 600px){
            left: -80px;
        }
        @media (max-width: 480px){
            left: -65px;
        }
        @media (max-width: 370px){
            left: -50px;
        }
    }
    .textbox2,.textbox4,.textbox6{
        padding-right: 150px;
        @media (max-width: 1000px){
            padding-right: 110px;
        }
        @media (max-width: 600px){
            padding-right: 70px;
        }
        @media (max-width: 360px){
            padding-right: 70px;
        }
    }
    .textbox3,.textbox5{
        padding-left: 150px;
        @media (max-width: 1000px){
            padding-left: 110px;
        }
        @media (max-width: 600px){
            padding-left: 70px;
        }
        @media (max-width: 360px){
            padding-left: 70px;
        }
    }
`
export const TextBox1 = styled.div`
    padding-left: 150px;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 1000px){
        padding-left: 100px;
    }
    @media (max-width: 600px){
        padding-left: 90px;
    }
    @media (max-width: 375px){
        padding-left: 150px;
    }
`
export const FirstBoxH1 = styled.h1`
        font-size: 70px;
        font-weight: 100;
        @media (max-width: 1000px){
            font-size: 65px;
        }
        @media (max-width: 500px){
            font-size: 50px;
        }

`
export const FirstBoxH3 = styled.h3`
        font-size: 33px;
        font-weight: 500;
        color: #15c4c6;
        @media (max-width: 1000px){font-size:30px;}
        @media (max-width: 500px){font-size:25px;}
`
export const FirstBoxPara = styled.p`
        font-size: 16px;
        font-weight: 400;
        color: rgba(255,255,255,.39);
        mix-blend-mode: luminosity;
        @media (max-width: 1000px){width:280px ;}
        @media (max-width: 600px){width:220px ;}
        @media (max-width: 500px){
            width:150px ;
            font-size: 14px;
            }
`
export const TextBox2 = styled.div`
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 5px;

    
`
export const BoxGroupH1 = styled.h1`
    font-size: 70px;
    font-weight: 100;
    @media (max-width: 1000px){
        font-size: 65px;
    }
    @media (max-width: 500px){
        font-size: 50px;
    }
`
export const BoxGroupH3 = styled.h3`
    font-size: 33px;
    font-weight: 500;
    color: #15c4c6;
    @media (max-width: 1000px){
        font-size: 30px;
    }
    @media (max-width: 500px){
        font-size: 25px;
    }
`
export const BoxGroupPara = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: rgba(255,255,255,.39);
    mix-blend-mode: luminosity;
    @media (max-width: 650px){
        width: 220px;
    }
    @media (max-width: 500px){
        font-size: 14px;
        width: 150px;
    }
`

export const Img = styled.img``
export const H1 = styled.h1``
export const H3 = styled.h3`` 
export const Para = styled.p``