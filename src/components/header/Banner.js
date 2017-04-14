import React, { Component } from 'react';
import $ from 'jquery';
import './styles/banner-style.css';

export default class Banner extends Component {
  componentDidMount() {
    $('.intro').addClass('go');
    // $('.reload').click(function() {
    //   $('.intro').removeClass('go').delay(200).queue(function(next) {
    //     $('.intro').addClass('go');
    //     next();
    //   });
    // });
  }
  render() {
    return (
        <svg className="intro" viewBox="0 0 200 86">
          <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Christopher</text>
          <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">Sancho</text>
          <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">Creative Developer</text>
          <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Christopher</text>
          <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Sancho</text>
          <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">Creative Developer</text>
          <defs>
            <clipPath id="text1">
              <text textAnchor="start" x="10" y="30" className="text">Christopher</text>
            </clipPath>
            <clipPath id="text2">
              <text textAnchor="start" x="10" y="50" className="text">Sancho</text>
            </clipPath>
            <clipPath id="text3">
              <text textAnchor="start" x="10" y="70" className="text">Creative Developer</text>
            </clipPath>
          </defs>
        </svg>
    )
  }
}
