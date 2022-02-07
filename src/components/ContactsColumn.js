import React from 'react';
import ContactColumnHeader from './ContactsColumnHeader.js';
import Contact from './Contact.js';
import {Barney, PJ, BabyBop} from '../img/img.js';

const ContactList = [
  {
    user: 'Barney',
    image: Barney
  },
  {
    user: 'PJ',
    image: PJ
  },
  {
    user: 'Baby Bop',
    image: BabyBop
  }
]

function ContactsColumn(props){
  return (
    <React.Fragment> 
      <ContactColumnHeader/>
      {ContactList.map((contact, index) =>
      <Contact image={contact.image}
        user={contact.user}
        key="index"
      />
      )}
    </React.Fragment> 
  );
}

export default ContactsColumn;