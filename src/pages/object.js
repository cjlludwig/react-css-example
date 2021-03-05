import React from 'react';
import Header from '../components/Header';
import styles from '../../static/pages/object.json';
import background from '../../static/images/cheetah.jpg';

export default function Object() {
  const topImg = { 
    minHeight: "800px", 
    backgroundImage: `url(${background})`
  };
  return (
    <>
      <Header 
        fontColor='white'
        className='css-navbar navbar-not-home'
        style={styles.navbar}
      />
      <body> 
        <div style={topImg}>
          <h1>
            <span style={styles.title}>
              Welcome to the Hybrid CSS Page
            </span>
            <br />
          </h1>
        </div>
        <div className='section-1'>
          <h2>
            <span style={styles.subTitle} >This page uses a combination of a JSON CSS object inline</span>
          </h2>
        </div>
        <div style={styles.img2}>
          <div style={styles.section2}>
            <h2 style={styles.h2}>Sources:</h2>
            <div className='text-content'>
              <code style={styles.code}>import background from '../../static/images/Astro.png';</code>
              <br />
              <br />
              <code style={styles.code}>const styles = ... </code>
            </div>
          </div>
        </div> 
        <div style={styles.img3}>
          <div>
            <h2>Tips:</h2>
            <div className='text-content'>
              <b>
                Classnames defined globally can be overridden if a class is declared in a stylesheet imported elsewhere in your project.<br />
              </b>
            </div>
          </div>
        </div> 
        <div style={styles.img4}>
            <div style={styles.benefits}>
              <h2>Benefits:</h2>
              <ul >
                <li>Consolidated in one file</li>
                <li>Easy to reference and determine where styles originate</li>
                <li>Well seperated files</li>
              </ul>
            </div>
        </div>
        <div style={styles.img5}>
            <div style={styles.benefits}>
              <h2>Downsides:</h2>
              <ul>
                <li>No native CSS helpers in IDEs for JSON by default</li>
                <li>Some attributes do not work inline</li>
                <li>Must reference each styling in-line</li>
              </ul>
            </div>
        </div>       
        <div style={styles.img6}>
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