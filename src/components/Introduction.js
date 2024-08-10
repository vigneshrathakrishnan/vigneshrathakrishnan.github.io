// src/components/Introduction.js
import React from 'react';
import './Content.css';

const Introduction = () => {
  return (
    <div className="content" id='introduction'>
      <h1>Introduction</h1>
      <p>XML to JSON Converter is a custom-built, free Zapier tool, developed using Node.js libraries. It converts XML input into JSON output seamlessly. While the tool itself is free, you might need to purchase a Zapier plan to process large XML Input.</p>
    </div>
  );
};

export default Introduction;
