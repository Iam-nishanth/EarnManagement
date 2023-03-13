import styled from "styled-components";

export const MainContainer = styled.section`
    width: 100%;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0  0 0;
    border-top:1px solid rgba(255, 255, 255, 0.21)    ;
    `

export const FooterWrapper = styled.footer`
    min-height: 300px;
    width: 100%;
    max-width: 1200px;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;

    
`
export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    @media (max-width: 680px){
        flex-direction: column;
        text-align: center;
    }
`
export const Group = styled.div`
    gap: 15px;
    display: flex;
    flex-direction: column;
`
export const Container = styled.div`
`
export const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    transition: all 0.5s ease-in-out;

    @media (max-width: 400px){
        gap: 30px;
    }
    
`
export const Container2 = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    svg{
        font-size: 30px;
    }
    @media (max-width: 680px){
        gap: 10px;
        padding-bottom: 50px;
        align-items: center;
    }
`
export const MobileH3 = styled.h3`
    display: flex;
    gap: 25px;
    cursor: pointer;
    align-items: center;
`
export const DiscordH3 = styled.h3`
    color: blue;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
`
export const Copyright = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    width: 100%;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`
export const CopyrightPara = styled.p`
    letter-spacing: 0.3px;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
`
export const Icons = styled.div`
    display: flex;
    gap: 25px;
`
export const Discord = styled.button`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #fff;
    position: fixed;
    right: 30px;
    bottom:30px;
    transition: 0.5s all ease-in-out ;
    cursor: pointer;
    border: none;
    &:hover{
        background-color: coral;
        svg,p{
            scale: 1.1;
        } 
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    gap: 5px;
    svg{
        font-size: 25px;
        transition: all 0.5s ease-in-out;
    }
    @media (max-width: 800px){
        width: 80px;
        height: 80px;
    }
    @media (max-width: 600px){
        right: 15px;
        bottom: 25px;
    }
`
export const DiscordPara = styled.p`
    font-size: 14px;
    font-weight: 900;
    @media (max-width: 800px){
        text-align: center;
        font-size: 12px;
    }
    @media (max-width: 400px){
        font-size: 10px;
    }
`

export const H3 = styled.h3`
`
export const Link = styled.a`
color: #fff;
&:hover{
    color: #3990ac;
    scale: 1.05;
}
`
