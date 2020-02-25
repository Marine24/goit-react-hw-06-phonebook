import React, { Component } from 'react';
import generateID from 'uuid/v4';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import T from 'prop-types';
import * as contactAction from '../../redux/phoneActions';
import style from './ContactForm.module.css';
import * as selector from '../../redux/selector';
import '../../transition/alert.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    showError: false,
    message: '',
  };

  static propTypes = {
    onAddContact: T.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;
    const isInContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isInContact) {
      this.setState(() => ({
        message: `${name} is already in your contacts`,
        showError: true,
      }));
      setTimeout(() => {
        this.setState({ showError: false });
      }, 2500);
      return;
    }
    if (name && number) {
      onAddContact({
        name,
        number,
        id: generateID(),
      });
    } else {
      this.setState(() => ({
        message: `One of the fields is empty!`,
        showError: true,
      }));
      setTimeout(() => {
        this.setState({ showError: false });
      }, 2500);
    }
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, showError, message } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={style.contactForm}>
          <label htmlFor={generateID()}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={generateID()}>
            Number
            <input
              type="number"
              placeholder="Enter phone number"
              value={number}
              name="number"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={style.formBtn}>
            Add contact
          </button>
        </form>

        <CSSTransition
          in={showError}
          unmountOnExit
          timeout={300}
          classNames="alert"
        >
          <div className={style.error_message}>
            <p>{message}</p>
          </div>
        </CSSTransition>
      </>
    );
  }
}
const mapStateToProps = store => ({
  contacts: selector.getContacts(store),
});
const mapDispatchToProps = dispatch => ({
  onAddContact: value => dispatch(contactAction.addContactAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
