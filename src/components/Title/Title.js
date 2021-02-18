import React from 'react'
import "./title.scss"
export default function Title(props) {
    return (
        <p class="title">{props.children}</p>
    )
}