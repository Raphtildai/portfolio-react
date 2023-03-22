import "./PricingCardStyle.css";

import { Link } from "react-router-dom";

const PricingCard = () =>{
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic. -</h3>
                    <span className="bar"></span>
                    <p className="btc">Ksh. 10,000</p>
                    <p>- 3 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
                <div className="card">
                    <h3>- Premium. -</h3>
                    <span className="bar"></span>
                    <p className="btc">Ksh. 20,000</p>
                    <p>- 2 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">Ksh. 30,000</p>
                    <p>- 3 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="btn">Purchase Now</Link>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;