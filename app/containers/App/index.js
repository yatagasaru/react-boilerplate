/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import SideBar from 'components/Sidebar';
import Main from 'components/Main';
import Container from 'components/Container';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Fergus Hagaswara"
        defaultTitle="Codemi Test Case"
      >
        <meta name="description" content="A Codemi Test Case application" />
      </Helmet>
      <Header notificationCount="18" />
      <Main>
        <SideBar />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </Container>
      </Main>
      <GlobalStyle />
    </AppWrapper>
  );
}
