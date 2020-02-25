import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import * as selector from '../../redux/selector';
import * as contactAction from '../../redux/phoneActions';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.filter_form}>
    <p className={styles.title}>Find contacts by name...</p>
    <input
      className={styles.filterInput}
      type="text"
      placeholder="Type to filter..."
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};
const mapStateToProps = store => ({
  filter: selector.getFilter(store),
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(contactAction.filterContactAction(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
