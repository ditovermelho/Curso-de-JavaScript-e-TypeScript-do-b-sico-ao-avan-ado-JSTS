import styled, { keyframes } from "styled-components";

export const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 30px;

div{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  display: flex;
}

span {
  z-index: 2;
}
`;

const rotate360 = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: flow-root;
  box-sizing: border-box;
`;
