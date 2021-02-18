import React from 'react';
import './layout.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Container from '../Container/Container'
import Navbar from './../Navbar/Navbar';
import '../normalize.css'
import {Grommet } from 'grommet'
import FadeIn from './../FadeIn/FadeIn';

export default function Layout(props){

    return(
    
        <div style={props.style}>
             <FadeIn><Navbar/></FadeIn>
         
          
            {props.children}
            
</div>


   
    )

}