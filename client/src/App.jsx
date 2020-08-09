import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

// A SPA (Single Page App) will always have header and footer,
// with only the content displayed based on current route.
export default () => {
  return (
    <Grid>
      <GlobalStyle />
      <Router>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <ContentWrapper>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Shop />
          </Route>
        </ContentWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Router>
    </Grid>
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
  background: #203040;
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  height: 100%;
  background: #203040;
`;
