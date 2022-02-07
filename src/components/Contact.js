import React from "react";
import PropTypes from 'prop-types';

function Contact(props){
  return (
    <React.Fragment>
      <img src={props.image} alt="contact"/>
      <h3>{props.user}</h3>
      <button className="btn">View Profile</button>
      <hr/>
    </React.Fragment>
  )
}

Contact.propTypes = {
  user: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default Contact;