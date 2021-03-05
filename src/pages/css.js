import React from 'react';
import Header from '../components/Header';
import '../../static/pages/css.css';

export default function Css() {
  const prefix = 'css';
  return (
    <>
      <Header 
        fontColor='white'
        className='css-navbar navbar-not-home'
      />
      <body> 
        <div className={`${prefix}-img-1`}>
          <h1>
            <span className={`${prefix}-title`}>
              Welcome to the Dedicated CSS Page
            </span>
            <br />
          </h1>
        </div>
        <div className={`${prefix}-section-1`}>
          <h2>
            <span className={`${prefix}-sub-title`} >This page uses a dedicated CSS file with classnames to override any global styles</span>
          </h2>
        </div>
        <div className={`${prefix}-img-2`}>
          <div className='section-2'>
            <h2 className={`${prefix}-h2`}>Sources:</h2>
            <div className={`${prefix}-text-content`}>
              <code className='css-code'>import '../../static/pages/css.css';</code>
              <br />
              <br />
              <code className='css-code'>static/pages/css.css</code>
            </div>
          </div>
        </div> 
        <div className={`${prefix}-img-3`}>
          <p>
              <h2>Tips:</h2>
              <div className='text-content'>
                <b>
                  Classnames defined globally can be overridden if a class is declared in a stylesheet imported elsewhere in your project.<br />
                </b>
              </div>
          </p>
        </div> 
        <div className={`${prefix}-img-4`}>
            <div className={`${prefix}-benefits`}>
              <h2>Benefits:</h2>
              <ul >
                <li>Clearly seperated CSS</li>
                <li>Utilizes CSS so consistent styling patterns</li>
                <li>Easier to trace than global styles</li>
                <li>No references are needed to the imported CSS file</li>
              </ul>
            </div>
        </div>
        <div className={`${prefix}-img-5`}>
            <div className={`${prefix}-downsides`}>
              <h2>Downsides:</h2>
              <ul>
                <li>Must use classNames to override global styles</li>
                <li>Can be difficult to distinguish between globally applied CSS</li>
                <li>Not able to trace style in class</li>
              </ul>
            </div>
        </div>       
        <div className={`${prefix}-img-6`}>
            <div className='end'>
              <i>
                Edit <code className='css-code'>src/pages/index.js</code> to see this page
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