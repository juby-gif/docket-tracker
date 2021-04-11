import React, {Component, Suspense, lazy} from 'react'
import {BrowserRouter as Router,withRouter,Route,Switch} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

const HomeContainer = lazy(()=> import('./homeContainer'))
class AppContainers extends Component<RouteComponentProps> {
    render(){
        return(
            <Router>
                <Suspense fallback={<h1>Loading....</h1>}>
                    <Switch>
                        <Route path="/" exact component = {HomeContainer} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default withRouter(AppContainers);