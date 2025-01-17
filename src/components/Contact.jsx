import React from 'react';
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFontAwesome, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function WithHeaderExample() {
  return (<div className="M-div">
    <div className="Contact">
      <h2 className="Heading-1">Let's Talk</h2>
        <p className="para-1">Every project starts with a chat. Joven leads to our client conversations <br></br> and will be happy to discuss your project. He will also pull in the right <br></br> people from the team when needed.  </p>
          <button className="but-1"><h6>Tell us about your project</h6></button>
    </div>
    <div className='settle'>
      <div className='info'>
        <span className='info-head'>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
        </span>
        <span className='info-content'>
          <p>hello@buuk.com</p>
          <p>(+65)98735984</p>
          <p className="lineh">1 Paya Laber Link<br></br>#04-01, Paya Lebar Quarter<br></br>Singapore, 408533</p>
        </span>
      </div>
      <div className='images'>
    <FontAwesomeIcon icon={faTwitter}/>
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  </div>
  );
}

export default WithHeaderExample;