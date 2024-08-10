// src/components/Introduction.js
import React from 'react';
import './Content.css';
import options from '../assets/attachments/convert-options.png';
import jsonOut from '../assets/attachments/xml-json-obj-output.png';
import objExtract from '../assets/attachments/xml-json-object-extract.png';
import jsonStrOut from '../assets/attachments/xml-json-string-output.png';


const Usage = () => {
  return (
    <div className="content" id='usage'>
      <h1>Usage</h1>
      <p> The tool provides two options:</p>
      <a href={options} target='blank'><img style={ {width:"30%"} } src={options} alt='attachement'/></a>
      <h4>Convert: XML to JSON</h4>
      <ol>
        <li>Output: JSON object</li>
      <a href={jsonOut} target='blank'><img style={ {width:"30%"} } src={jsonOut} alt='attachement'/></a>
        
        <li>Example: Use this action to extract individual object values in the next step for specific assignments.</li>
      <a href={objExtract} target='blank'><img style={ {width:"30%"} } src={objExtract} alt='attachement'/></a>
        
      </ol>
      <h4>Convert: XML to JSON String</h4>
      <ol>
        <li>Output: JSON string</li>
      <a href={jsonStrOut} target='blank'><img style={ {width:"30%"} } src={jsonStrOut} alt='attachement'/></a>
        
        <li>Example: Use this action when you need a JSON string representation of your XML data.</li>
      </ol>
    </div>
  );
};

export default Usage;
