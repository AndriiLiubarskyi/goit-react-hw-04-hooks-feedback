import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, allFeedback}) => (
  <ul>
      {Object.keys(options).map(key => (
        <button className={styles.buttons} key={key} onClick={allFeedback}>
          {key}
        </button>
      )
      )}
  </ul>);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  allFeedback: PropTypes.func,
};

export default FeedbackOptions;