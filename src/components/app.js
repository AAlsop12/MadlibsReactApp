import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading">
            <h1>Bottega Mad Libs</h1>
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib Story.
            </div>
          </div>
         </div>
      </div>
    );
  }
}
