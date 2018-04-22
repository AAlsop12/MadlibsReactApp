import React, { Component } from 'react';
import ChristmasForm from './christmas_form';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="christmas-heading">
            <h1>Christmas Letter to Santa</h1>
            <div className="christmas-subheading">
              Fill out the fields below and click the generate button<br/>to create your letter!
            </div>
          </div>
          <ChristmasForm />
         </div>
      </div>
    );
  }
}
