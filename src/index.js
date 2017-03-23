import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Importing router
import PagesRouter from "./Routers/pages-router";

ReactDOM.render(
  <PagesRouter/>,
  document.getElementById('root')
);
