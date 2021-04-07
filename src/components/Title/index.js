import React from "react";

import { Container, Line } from "./styles";

function Title({children}) {
  return (
    <Container>
      {children}
      {children && <Line />}
    </Container>
  );
}

export default Title;
