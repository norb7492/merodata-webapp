import React, { Component } from 'react';
import Menu from './../Header/Menu';
import './Layout.css';


export default class Layout extends Component {
    render() {
        return (
            <div className="wrapper">



                <Menu/>
                {this.props.children}



            </div>
        );
    }
}


