import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from "./course/ManageCoursePage";
import Header from "./shared/Header";
import { theme, GlobalStyle } from "./globalStyles";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import configureStore from "../redux/configureStore";

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/courses" component={CoursesPage}></Route>
            <Route path="/course/:slug" component={ManageCoursePage}></Route>
            <Route path="/course" component={ManageCoursePage}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </Router>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
