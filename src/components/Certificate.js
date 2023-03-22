import "./CertificateCardStyle.css";

import React, { Component } from 'react'
import CertificateCard from "./CertificateCard";
import CertificateCardData from "./CertificateCardData";

class Certificate extends Component {
    render() {
        return (
          <div className="certificates-container">
              <h1 className="certificate-heading">{this.props.title}</h1>
                  <div className="certificate-container">
                      {
                          CertificateCardData.slice(0, this.props.range).map((val, index) => {
                              return (
                                  <CertificateCard 
                                      key = { index }
                                      date = { val.date }
                                      imgsrc = { val.imgsrc }
                                      title = { val.title }
                                      description = { val.description }
                                      verify = { val.verify }
                                  />
                              );
                          })
                      }
                  </div>
          </div>
        )
    }
}

export default Certificate;