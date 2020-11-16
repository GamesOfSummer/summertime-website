import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import GitAliasArticle from './articles/GitAliasArticle';
import AboutMe from './AboutMe';
// import MainPageContent from './MainPageContent';
import FooterPage from './FooterPage';

const Main = () => {
    return (
        <div>
            <NavbarPage />
            <div style={{ minHeight: '1000px' }}>
                <Router>
                    <Switch>
                        <Route path="/aboutme" component={AboutMe} />
                        {/* <Route exact path="/" component={MainPageContent} /> */}

                        <Route
                            path="/freebies/gitalias"
                            component={GitAliasArticle}
                        />
                    </Switch>
                </Router>
            </div>
            <FooterPage />
        </div>
    );
};

export default Main;
