import React from "react";
// import Home from './Home'

function About() {
  return (
    <div className="container about">
      <section>
        <h2 className="text-center">About</h2>
        <br />
        <h3>React Router</h3>
        <br />
        <p>
          React Router is a library for routing in React applications. It allows
          you to manage the navigation and URLs of your application, and to
          render different components based on the URL path.
        </p>
        <br />
        <br />
        <h3>React Router v6</h3>
        <br />
        <p>
          React Router v6 is the latest major version of React Router, which was
          released in October 2021. It includes a number of improvements and
          changes over previous versions of React Router.
        </p>
        <p>
          One of the biggest changes in React Router v6 is that it has a
          simplified API. The BrowserRouter, Switch, and Route components have
          been replaced with the Router, Routes, and Route components,
          respectively. The Link component remains the same.
        </p>
      </section>
      {/* < Home/> */}
    </div>
  );
}

export default About;
