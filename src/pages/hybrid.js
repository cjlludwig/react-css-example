import React from 'react';
import Header from '../components/Header';
import background from '../../static/images/Astro.png';

const styles = {
  imgBase: {
    position: 'relative',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  img1: {
    backgroundImage: `url(${background})`,
    minHeight: '800px',
  },
  img2: {
    backgroundColor: '#b5179e',
    minHeight: '800px',
  },
  img3: {
    backgroundColor: '#7209b7',
    minHeight: '800px',
  },
  img4: {
    backgroundColor: '#480ca8',
    minHeight: '800px',
  },
  img5: {
    backgroundColor: '#3f37c9',
    minHeight: '800px',
  },
  img6: {
    backgroundColor: '#4cc9f0',
    minHeight: '100px',
  },
  main: {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  },
  subTitle: {
    color: '#b5179e',
  },
  navbar: {
    border: '15px solid #f72585',
    backgroundColor: '#f72585',
  },
  title: {
    color:'whitesmoke'
  },
  h2: {
    color:'whitesmoke',
  },
  code: {
    color: 'navy',
  },
  section1: {
    color: '#777',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '50px 80px', 
    fontSize: '1.5rem',
  },
  benefits: {
    fontFamily:'serif',
    marginBottom:'48',
    top: '30%',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize:'x-large',
    color: 'whitesmoke',
  },
  section2: {
    top: '30%',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize:'x-large',
    color: 'whitesmoke',
  }
};

export default function Hybrid() {
  return (
    <>
      <Header 
        fontColor='white'
        className='css-navbar navbar-not-home'
        style={styles.navbar}
      />
      <body> 
        <div style={styles.img1}>
          <h1>
            <span style={styles.title}>
              Welcome to the Hybrid CSS Page
            </span>
            <br />
          </h1>
        </div>
        <div style={styles.section1}>
          <h2>
            <span style={styles.subTitle} >This page uses a combination of a JSON CSS object inline</span>
          </h2>
        </div>
        <div style={styles.img2}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
              </ul>
            </div>
        </div>
        <div style={styles.img5}>
            <div style={styles.benefits}>
              <h2>Downsides:</h2>
              <ul>
                <li>No native CSS helpers in IDEs</li>
                <li>Some attributes do not work inline</li>
                <li>Makes files much larger</li>
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