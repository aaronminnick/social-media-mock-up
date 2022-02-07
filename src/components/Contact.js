import React from "react";
import PropTypes from 'prop-types';

function Contact(props){
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4">
          <img className="contact-img" src={props.image} alt="contact"/>
        </div>
        <div className="col-8">
          <h5>{props.user} <button className="btn box-button">View Profile</button></h5>
          
        </div>
      </div>
      <hr/>
    </React.Fragment>
  )
}

Contact.propTypes = {
  user: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default Contact;