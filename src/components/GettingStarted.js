// src/components/Introduction.js
import React from 'react';
import './Content.css';
import attachment from '../assets/attachments/search-the-tool.png';

const GetteingStarted = () => {
  return (
    <div className="content" id='getting-started'>
      <h1>Getteing Started</h1>
      <p>To start using the XML to JSON Converter:</p>
      <ol>
        <li>Open Zapier and create a new Zap.</li>
        <li>
        Search for "XML to JSON Converter" in the Zap step selection.</li>
      </ol>
      <a href={attachment} target='blank'><img style={ {width:"70%"} } src={attachment} alt='attachement'/></a>


    </div>
  );
};

export default GetteingStarted;
