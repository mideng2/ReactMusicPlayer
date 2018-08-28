import React from 'react';
import { render } from 'react-dom';
import { Router , IndexRoute ,Link, Route,browserHistory,hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import '../common/style/base.less'


import App from './App'
import Player from '../pages/Player/main';
import Index from '../pages/Index/main';


let Root = React.createClass({
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index}/>
                    <Route path="/player" component={Player} />
                </Route>
            </Router>
        );
    }
});

render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);




if(module.hot){
    module.hot.accept('./App',()=>{
        const NewRoot  = require('./App').default;
        render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        )
    })

}