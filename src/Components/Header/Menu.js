import React, {Component} from 'react';
import './Menu.css';

export default class Manu extends Component {
    render() {

        const titleCompany = 'Merodata';

        const menuList = [{id: 0, name: 'Home'}, {id: 1, name: 'Quem Somos'}, {id: 2, name: 'Produtos'},
            {id: 3, name: 'Clientes'}, {id: 4, name: 'Trabalhe Conosco'}, {id: 5, name: 'Extranet'},
            {id: 6, name: 'Contato'}];


        const rederMenuList = menuList.map(list => {
           return(
               <li key={list.id}>{list.name}</li>
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



