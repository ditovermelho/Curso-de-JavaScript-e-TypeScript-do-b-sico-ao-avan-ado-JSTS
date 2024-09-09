import styled from 'styled-components';

import * as colors from "../../config/colors";

export const ProfilePicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 0 20px;
position: relative;
margin-top: 20px;

img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

a{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  color: #fff;
  background: ${colors.primaryColor};
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
`;

export const Img = styled.form`
label{
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  border: 5px dashed ${colors.primaryColor};
  margin: 30px auto;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 180px;
    height: 180px;
  }
}
input{
  display: none;
}
`;
