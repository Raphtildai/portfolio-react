import "./CertificateCardStyle.css";

import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const CertificateCard = (props) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  }
  return (
    <div className="certificate-card">
        <img src={props.imgsrc} alt="certificateImg"></img>
        <h2 className="certificate-date">{props.completion_date}</h2>
        <h2 className="certificate-title">
          {showContent ? props.title : (props.title.length > 25 ? props.title.slice(0, 25) + " ..." : props.title)}</h2>
        <div className="certificate-details">
            <p>{showContent ? props.description : (props.description.length > 100 ? props.description.slice(0, 100) + " ..." : props.description) }</p>
            <div className="certificate-btns">
                <button onClick={toggleContent} className="btn">{showContent ? 'Show Less' : 'Read More' }</button>
                <NavLink to={props.verify} target={"_blank"} className="btn btn-light" >Verify</NavLink>
            </div>
        </div>
    </div>
  )
}

export default CertificateCard;