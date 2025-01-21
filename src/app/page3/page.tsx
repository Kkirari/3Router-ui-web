/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../globals.css';

export default function page () {
  return (
    <div className="app-container">
      <img
        className="img-container"
        src="/manatee-oof.gif"
        alt="Manatee"
      />
    <h1>Look at me im so cute!</h1>
      <div className="button-container">
        <a href="\page1" className="button-class">
          Go to Page 1
        </a>
        <a href="\page2" className="button-class">
          Go to Page 2
        </a>
      </div>
    </div>
  );
};

