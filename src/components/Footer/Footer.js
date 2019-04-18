import React from 'react';
import './Footer.css';
import '../Main/Main.css';
import Group4 from './../../images/Group4.png';

const Footer = () => {
	return(
		<div className="footer">
			<div>
        <div className="loved-by-users-reco-copy-2">
          <p>Loved by users, recommended by experts</p>
        </div>
        <div className="lorem-ipsum-is-simpl">
          Lorem Ipsum is simply dummy text of the printing 
          and typesetting industry. 
          Lorem Ipsum has been the 
          industry's standard dummy text ever since the 
          1500s.
        </div>

        <button className="footer-button button-cta cta-text">Primary CTA</button>
      </div>
      
			<div>
				<img src={Group4} alt="bag" className="Group4" />
			</div>
		</div>
	);
}
export default Footer;
