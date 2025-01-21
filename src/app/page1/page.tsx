/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../globals.css';

export default function page () {
  return (
    <div className="app-container">
      <h1>Hello welcome</h1>
      <img
        className="img-container"
        src="/manatee.primary.jpg"
        alt="Manatee"
      />
      <h2>66162110416-6</h2>
      <div className="button-container">
        <a href="\page2" className="button-class">
          Go to Page 2
        </a>
        <a href="\page3" className="button-class">
          Go to Page 3
        </a>
      </div>
    </div>
  );
};

