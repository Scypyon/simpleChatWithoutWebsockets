import React, { useState } from "react";

import {
  Wrapper,
  AuthPanel,
  StyledInputName,
  StyledLink,
  InputButtonWrapper
} from "shared/StyledAppPanel";

function App() {
  const [name, setName] = useState();

  return (
    <Wrapper>
      <AuthPanel>
        <h1>Hi ! Please write your name...</h1>
        <InputButtonWrapper>
          <StyledInputName
            type="text"
            onChange={e => setName(e.target.value)}
          ></StyledInputName>
          <StyledLink to="/chat" onClick={localStorage.setItem("name", name)}>
            GO CHAT
          </StyledLink>
        </InputButtonWrapper>
      </AuthPanel>
    </Wrapper>
  );
}

export default App;
