import * as React from "react";
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </head>
      <Header 
        fontColor='white'
      />
      <body> 
        <div className='img-1'>
          <h1>
            <span className='title'>
              Welcome to the React CSS example homepage!
            </span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
            <br />
          </h1>
        </div>
        <div className='section-1'>
          <h2>
            <span className="sub-title" >This page uses HTML Link tags to pull CSS from web sources and a global CSS file set in <code>gatsby-browser.js</code></span>
          </h2>
        </div>
        <div className='img-2'>
          <div className='section-2'>
            <h2>Sources:</h2>
            <div className='text-content'>
              <code>
                &lt;link&gt; <br />
                &nbsp;&nbsp;rel="stylesheet" <br />
                &nbsp;&nbsp;href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" <br />
                &nbsp;&nbsp;integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" <br />
                &nbsp;&nbsp;crossOrigin="anonymous" <br />
                &lt;/link&gt; 
              </code>
              <br />
              <br />
              <code>static/global.css</code>
            </div>
          </div>
        </div> 
        <div className='img-3'>
          <p>
              <h2>Tips:</h2>
              <div className='text-content'>
                <b>
                  Class is a reserved name in React so make sure to use className as a prop to match with CSS clases which are defined after a period. Ex. .some-class <br /><br />
                  When attempting to identify a React element to apply styling inspect the element in your browser and you can find the classname associated.
                </b>
              </div>
          </p>
        </div> 
        <div className='img-4'>
            <div className="benefits">
              <h2>Benefits:</h2>
              <ul >
                <li>The ability to pull in web CSS sources with ease</li>
                <li>External sources always point to the latest CSS file</li>
                <li>Don't need to directly map all elements to a className</li>
                <li>Can apply styles once at the app level</li>
              </ul>
            </div>
        </div>
        <div className='img-5'>
            <div className="downsides">
              <h2>Downsides:</h2>
              <ul>
                <li>External CSS sources aren't editable unless you own the source</li>
                <li>It can be difficult to trace CSS from web or global files when reading code</li>
                <li>Difficult to tie class to React elements</li>
                <li>Some styles don't apply well to React elements</li>
              </ul>
            </div>
        </div>       
        <div className='img-6'>
            <div className='end'>
              <i>
                Edit <code>src/pages/index.js</code> to see this page
                update in real-time.{" "}
              </i>
              <span role="img" aria-label="Sunglasses smiley emoji">
                😎
              </span>
            </div>
        </div>
      </body>
    </>
  )
}

export default IndexPage
