import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';

const AppRouter = () => {
    return (
        <Router>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AppRouter);