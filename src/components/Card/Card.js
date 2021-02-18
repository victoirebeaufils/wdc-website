import React from 'react';
import './card.scss';
export default function Card(props) {

    return (
        <div class="card d-flex justify-content-center">
            <div class="card-icon  d-flex justify-content-center"><img class="img-fluid" src={props.icon} width="25%" height="25%"></img></div>
            <div class="card-title d-flex justify-content-center">{props.title}</div>
            <div class="card-description d-flex justify-content-center"> {props.description}</div>
            <React.Fragment class="d-flex justify-content-center">
            {props.children}
            </React.Fragment>
        </div>
    )
}