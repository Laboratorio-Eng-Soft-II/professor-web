import React from "react";
import { AppContainer, GlobalStyled } from "./app-styles";
import { Routes } from "./app/routes";

function App() {
  return (
    <>
      <GlobalStyled />
      <AppContainer>
        <Routes />
      </AppContainer>
    </>
  );
}

export default App;
