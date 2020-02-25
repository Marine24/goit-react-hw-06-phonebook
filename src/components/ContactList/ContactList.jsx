import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import T from 'prop-types';
import { connect } from 'react-redux';
import * as selector from '../../redux/selector';
import * as contactAction from '../../redux/phoneActions';

import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';
import transition from '../../transition/items.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <TransitionGroup component="ul" className={style.contactList}>
      {contacts.map(el => (
        <CSSTransition key={el.id} timeout={250} classNames={transition}>
          <li className={style.contactItem}>
            <ContactItem
              name={el.name}
              number={el.number}
              onDeleteContact={() => onDeleteContact(el.id)}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      name: T.string,
      number: T.string,
    }).isRequired,
  ).isRequired,
  onDeleteContact: T.func.isRequired,
};
const mapStateToProps = store => ({
  contacts: selector.getFiltredContacts(store),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactAction.deleteContactAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
