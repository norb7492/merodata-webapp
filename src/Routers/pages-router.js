import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Main Component
import Layout from './../Components/Layout/Layout';

//Pages imports
import Home from './../Pages/Home/Home';
import QuemSomos from './../Pages/QuemSomos/QuemSomos';
import Produtos from './../Pages/Produtos/Produtos';
import Clientes from './../Pages/Clientes/Clientes';
import TrabalheConosco from './../Pages/TrabalheConosco/TrabalheConosco';
import Extranet from './../Pages/Extranet/Extranet';
import Contato from './../Pages/Contato/Contato';

export default class PagesRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Layout}>
                            <IndexRoute component={Home}/>
                            <Route path={'home'} component={Home}/>
                            <Route path={'quemsomos'} component={QuemSomos}/>
                            <Route path={'produtos'} component={Produtos}/>
                            <Route path={'clientes'} component={Clientes}/>
                            <Route path={'trabalheconosco'} component={TrabalheConosco}/>
                            <Route path={'extranet'} component={Extranet}/>
                            <Route path={'contato'} component={Contato}/>

                </Route>

            </Router>
        );
    }
}


