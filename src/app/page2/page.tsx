/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../globals.css';

export default function page () {
  return (
    <div className="app-container">
      <img
        className="img-container"
        src="/manatee.jpg"
        alt="Manatee"
      />
    <h1>Iam Manatee or people say SeaCow</h1>
      <div className="button-container">
        <a href="\page1" className="button-class">
          Go to Page 1
        </a>
        <a href="\page3" className="button-class">
          Go to Page 3
        </a>
      </div>
    </div>
  );
};

