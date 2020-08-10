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

        <HeaderWrapper>
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
  grid: 8vh auto 8vh / 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  height: 100%;
  background: rgba(32, 48, 64, 0.95);
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  height: 100%;
  background: rgba(32, 48, 64, 1);
`;
