import styled from "styled-components"

export const Wrapeer = styled.div`
  /* width: 100%; */
  img:first-child{
    /* width: 100%; */
    height: 600px;
    object-fit: contain;
    position: absolute;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 100%);
    /* right: 20px; */

    @media (max-width: 1250px){
      height: 500px;
    }
    @media (max-width: 1070px){
      transform: translate(50%);
    }
    @media (max-width: 800px){
      transform: translate(30%);
    }
    @media (max-width: 600px){
      /* transform: translate(30%); */
      height: 300px;
    }
  }
`
export const Container = styled.div`
position: absolute;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 50px;
@media (max-width: 1070px){
  transform: translate(40%);
}
@media (max-width: 1070px){
  transform: translate(30%);
}
@media (max-width: 600px){
  /* display: none; */
  /* transform: translate(30%); */
}
div:first-child{
  top: 150px;
  left: 0;
  @media (max-width: 1250px){
      left : -50px ;
      top: 100px;
    }
}
div:nth-child(2){
  top: 60px;
  left: 80px;
  @media (max-width: 1250px){
      left: -10px;
    }
}
div:nth-child(4){
  top: 320px;
  left: 0;
  @media (max-width: 1250px){
    top: 200px;
    left: -40px;
  }
}
div:nth-child(5){
  top: 320px;
  left: 75px;
  width: 190px;
  @media (max-width: 1250px){
     top : 200px;
     left: 25px;
     
    }
}

img{
  height: 250px;
  position: absolute;
  top: 340px;
  left: 200px;
  @media (max-width: 1250px){
      top: 290px;
      left: 170px;
      height: 200px;
    }
}

`
export const TextBox = styled.div`
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
 
`
export const Para = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`
