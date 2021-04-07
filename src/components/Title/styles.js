import styled from "styled-components";

export const Container = styled.div`
  width: 145px;
  height: 23px;
  font-size: 18px;
  font-family: ${props=>props.theme.fontFamily.orbitron};
  font-weight: bold;
  color: ${props=>props.theme.blueMarguerite};
`;

export const Line = styled.div`
    height: 3px;
    width: 40%;
    margin-top: 5px;
    background-color: ${props=>props.theme.blueMarguerite};
`