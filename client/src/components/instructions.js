import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Instructions = (props)  => {
  const [state, setState] = useState({ name: '', gender: '', age: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, gender, age } = steps;
    setState({ name, gender, age });
  }, [props])

    const { name, gender, age } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>How To Use The App</h3>
        <table>
          <tbody>
            <tr>
              <td>Step 1:</td>
              <td>Find the purpose</td>
            </tr>
            <tr>
              <td>Step 2:</td>
              <td>Request for a “custodian”
on the custodian platform</td>
            </tr>
            <tr>
              <td>Step 3:</td>
              <td>Filter according to your choice and location</td>
            </tr>
            <tr>
              <td>Step 4:</td>
              <td>An employee (custodian)
will visit and explain all the
details and fill out the paper work
</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Instructions;