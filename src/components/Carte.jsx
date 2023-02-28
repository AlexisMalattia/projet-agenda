import '../styles/Carte.scss'
import {useState} from "react";
function Carte(props) {
    const data = props.data;
    return(
        <div className="container">
            <div>{data.title}</div>
            <div>{data.content}</div>
            <div>{data.footer}</div>
        </div>
    )
}
export default Carte
