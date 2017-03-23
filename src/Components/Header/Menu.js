import React, {Component} from 'react';
import './Menu.css';

//Router links
import {Link} from 'react-router';


export default class Manu extends Component {
    render() {

        const titleCompany = 'Merodata';

        const menuList = [{id: 0, name: 'Home', link:'/home'}, {id: 1, name: 'Quem Somos', link:'/quemsomos'}, {id: 2, name: 'Produtos', link:'produtos'},
            {id: 3, name: 'Clientes', link:'clientes'}, {id: 4, name: 'Trabalhe Conosco', link:'trabalheconosco'}, {id: 5, name: 'Extranet', link:'extranet'},
            {id: 6, name: 'Contato', link:'contato'}];


        const rederMenuList = menuList.map(list => {
           return(
               <li key={list.id}><Link to={list.link}>{list.name}</Link></li>
           )

        });

        return (
            <div className="menuContainer">

                <div className="logo">
                    <p>{titleCompany}</p>
                </div>

                <ul className="menuUL">
                    {rederMenuList}
                </ul>


            </div>
        );
    }
}



