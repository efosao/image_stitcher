import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  onDrop = (files) => {
    console.log('you dropped stuff on me', files)
  }
  render () {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet" />
        <h1>Welcome to next.js!</h1>
        <Dropzone onDrop={this.onDrop}><div className='drop'>ddd</div></Dropzone>
        <style jsx>{`
          .drop {
            background-color: red;
            height: 100px;
            width: 100px;
          }
        `}</style>
        <p>Welcome to next.js!</p>
        <style global jsx>{`
          body {
            font-family: "Tajawal", sans-serif;
          }
          drop {
            color: red;
            height: 100px;
            width: 100px;
          }
        `}</style>
      </div>
    )
  }
}

export default Uploader
