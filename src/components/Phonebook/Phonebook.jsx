import React from 'react';
import T from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import styles from './Phonebook.module.css';
import fade from '../../transition/items.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import '../../transition/alert.css';
import '../../transition/title.css';
import * as selector from '../../redux/selector';

const Phonebook = ({ contacts }) => (
  <div>
    <CSSTransition in timeout={500} classNames="title" appear>
      <div>
        <h2 className={styles.title}>Phonebook</h2>
      </div>
    </CSSTransition>
    <ContactForm />
    {contacts.length > 1 && (
      <CSSTransition timeout={250} classNames={fade}>
        <Filter />
      </CSSTransition>
    )}

    <ContactList />
  </div>
);
Phonebook.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      number: T.string.isRequired,
      id: T.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = store => ({
  contacts: selector.getContacts(store),
});
export default connect(mapStateToProps)(Phonebook);
