// ---------------------------------------------
// ALL IMPORTS
// ---------------------------------------------
// packages
import React from 'react';

// context

// components

// assets

// constants

// utils / methods

// styles

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if "success" prop is false)
 */

export default (props) => {
  const { success } = props;

  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congrats! You guessed the word!</span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
