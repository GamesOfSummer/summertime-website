import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GitAliasArticle from '../articles/GitAliasArticle';
import AboutMe from './AboutMe';
import MainPageContent from './MainPageContent';
import { callAsyncGetPictures } from '../redux/pictureActions';
import ReactAppChecklist from '../articles/ReactAppChecklist';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(callAsyncGetPictures());
        };

        fetchData();
    }, []);

    return (
        <div>
            <div style={{ minHeight: '1000px' }}>
                <Router>
                    <Switch>
                        <Route path="/aboutme" component={AboutMe} />
                        <Route exact path="/" component={MainPageContent} />
                        <Route
                            path="/freebies/gitalias"
                            component={GitAliasArticle}
                        />
                        <Route
                            path="/freebies/ReactAppChecklist"
                            component={ReactAppChecklist}
                        />
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Main;
