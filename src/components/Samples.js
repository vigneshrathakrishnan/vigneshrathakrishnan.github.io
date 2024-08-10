import React from 'react';
import './Samples.css';

const Samples = () => {

  const copyCode = (elementId) => {
    const codeBlock = document.getElementById(elementId+"-code");
    const textToCopy = codeBlock.textContent.trim();
    const btn = document.getElementById(elementId+"-copy-btn")
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      btn.textContent = "Copied";

      setTimeout(() => {
        btn.textContent = "Copy";
      }, 1000);
      
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="content" id="samples">
      <h1>Samples</h1>
      
      <h4>For the below XML input:</h4>
      <div className="code-container">
        <button id='xml-copy-btn' className="copy-btn" onClick={() => copyCode('xml')}>Copy</button>
        <pre><code id="xml-code">
 {`<shop>
  <category name="Chocolates" type="Sweet">
    <item>
      <name>Milk Chocolate</name>
      <price currency="INR">10</price>
      <flavor>Milk</flavor>
      <quantity>10</quantity>
    </item>
    <item>
      <name>Dark Chocolate</name>
      <price currency="INR">20</price>
      <flavor>Dark</flavor>
      <quantity>8</quantity>
    </item>
  </category>
  <category name="Candies" type="Sweet">
    <item>
      <name>Lollipop</name>
      <price currency="INR">5</price>
      <flavor>Cherry</flavor>
      <quantity>20</quantity>
    </item>
  </category>
</shop>
            `
          }

        </code></pre>
      </div>
      
      <h4>The output will be:</h4>
      <div className="code-container">
        <button id='json-copy-btn' className="copy-btn" onClick={() => copyCode('json')}>Copy</button>
        <pre><code id="json-code">
{`{
  "shop": {
    "category": [
      {
        "$": {
          "name": "Chocolates",
          "type": "Sweet"
        },
        "item": [
          {
            "name": "Milk Chocolate",
            "price": {
              "_": "10",
              "$": {
                "currency": "INR"
              }
            },
            "flavor": "Milk",
            "quantity": "10"
          },
          {
            "name": "Dark Chocolate",
            "price": {
              "_": "20",
              "$": {
                "currency": "INR"
              }
            },
            "flavor": "Dark",
            "quantity": "8"
          }
        ]
      },
      {
        "$": {
          "name": "Candies",
          "type": "Sweet"
        },
        "item": {
          "name": "Lollipop",
          "price": {
            "_": "5",
            "$": {
              "currency": "INR"
            }
          },
          "flavor": "Cherry",
          "quantity": "20"
        }
      }
    ]
  }
}`}
        </code></pre>
      </div>

    </div>
  );
};

export default Samples;
