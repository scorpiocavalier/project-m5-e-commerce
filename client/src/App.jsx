import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

// A SPA (Single Page App) will always have header and footer,
// with only the content displayed based on current route.
export default () => {
  return (
    <Router>
      <Grid>
        <GlobalStyle />

        <HeaderWrapper pathname={"/"}>
          <Header />
        </HeaderWrapper>

        <ContentWrapper>
          <Content />
        </ContentWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Grid>
    </Router>
  );
};

const Grid = styled.div`
  display: grid;
  grid: auto 5vh / 1fr;
  grid-template-areas:
    "content"
    "footer";
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 5vh;
  background: rgba(32, 48, 64, 0);
  margin-top: 20px;
  position: ${(p) => (p.pathname === "/" ? "fixed" : "relative")};
  top: 0;

  @media (min-width: 768px) {
    grid-template-rows: auto 6vh;
  }

  @media (min-width: 1200px) {
    grid-template-rows: auto 7vh;
  }
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  height: 100%;
  background: rgba(32, 48, 64, 1);
`;
