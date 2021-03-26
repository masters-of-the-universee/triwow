import React from 'react';
import './question.scss';

const question = ({question}) => {
  return (
    <div className="question-card">
      <h3>Header</h3>
      <p>Body</p>
      <div className="question-card-answers">
        <ul>
          <li>Answer1</li>
          <li>Answer1</li>
          <li>Answer1</li>
        </ul>
      </div>
    </div>
  );
};

export default question;
