import React from 'react';

import '../App.css';

export default ({ messages }) => (
  <div>
    {
      messages.map(
        ({ message, id }) => (
          <div key={id}>{message}</div>
        )
      )
    }
  </div>
);
