import "./CertificateCardStyle.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const CertificateCard = (props) => {
  return (
    <div className="certificate-card">
        <img src={props.imgsrc} alt="certificateImg"></img>
        <h2 className="certificate-date">{props.completion_date}</h2>
        <h2 className="certificate-title">{props.title}</h2>
        <div className="certificate-details">
            <p>{ props.description }</p>
            <div className="certificate-btns">
                <NavLink to={props.verify} className="btn btn-light" >Verify</NavLink>
            </div>
        </div>
    </div>
  )
}

export default CertificateCard;