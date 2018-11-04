import React from 'react'
import {Redirect, Route, Switch} from 'react-router'

import Dashboard from '../dashboard/Dashboard.jsx'
import Services from '../services/Services.jsx'
import PortalService from '../services/ServicePortal.jsx'

export default () => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/services/:serviceId' component={PortalService}/>
            <Route path='/services' component={Services}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </div>
)
