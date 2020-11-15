import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavbarPage from './NavBarPage';
import GitAliasArticle from './articles/GitAliasArticle';
import AboutMe from './AboutMe';
import MainPageContent from './MainPageContent';
import FooterPage from './FooterPage';

const Main = () => {
    return (
        <div>
            <NavbarPage />
            <div style={{ minHeight: '1000px' }}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPageContent} />
                        <Route path="/aboutme" component={AboutMe} />
                        <Route
                            path="/freebies/gitalias"
                            component={GitAliasArticle}
                        />
                        <Route path="*">
                            <div>No match</div>
                        </Route>
                    </Switch>
                </Router>
            </div>
            <FooterPage />
        </div>
    );
};

export default Main;
