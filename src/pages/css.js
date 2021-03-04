import React from 'react';
import Header from '../components/Header';
import '../../static/pages/css.css';

export default function Css() {
  return (
    <>
      <Header />
      <main>
        <title>Home Page</title>
        <h1 >
          Welcome to the CSS example homepage!
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
          <br />
          <span className="sub-title" >— This page directly imports css as a generic style for our entire page from <code>static/pages/css.css</code></span>
        </h1>
        <br />
        <p>
          <b>Benefits:</b>
          <ul>
            <li>Easy implementation</li>
            <li>Don't need to directly map all elements to a className</li>
          </ul>
          <br />
          <b>Downsides:</b>
          <ul>
            <li>It can be difficult to trace link CSS when reading code</li>
            <li>Difficult to tie class to React elements</li>
          </ul>

          <br />
          <br />
          Edit <code>src/pages/index.js</code> to see this page
          update in real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </main>
    </>
  )
}