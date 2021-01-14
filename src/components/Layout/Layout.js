import React from 'react';
import './layout.scss'
import Container from '../Container/Container'
import Navbar from './../Navbar/Navbar';
import '../normalize.css'
export default function Layout(props){

    return(
        <div style={props.style}>
      <Container> 
          <Navbar/>
          
            {props.children}
            
           
</Container>
</div>
   
    )

}