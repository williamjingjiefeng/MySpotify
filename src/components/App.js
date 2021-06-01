import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "../theme/GlobalStyles";
import { useTheme } from "../theme/useTheme";

import ThemeSelector from "../ThemeSelector";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import SongsPage from "./songs/SongsPage";
import ManageSongPage from "./songs/ManageSongPage"; // eslint-disable-line import/no-named-as-default
import ArtistsPage from "./songs/ArtistsPage";
import QueuedAlbumsPage from "./songs/QueuedAlbumsPage.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../ErrorBoundary.tsx";

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <ErrorBoundary>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/songs" component={SongsPage} />
                <Route path="/artists" component={ArtistsPage} />
                <Route path="/albums" component={QueuedAlbumsPage} />
                <Route path="/song/:youtubeId" component={ManageSongPage} />
                <Route path="/song" component={ManageSongPage} />
                <Route
                  path="/themes"
                  render={() => (
                    <ThemeSelector setSelectedTheme={setSelectedTheme} />
                  )}
                />
                <Route component={PageNotFound} />
              </Switch>
              <ToastContainer autoClose={3000} hideProgressBar />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
