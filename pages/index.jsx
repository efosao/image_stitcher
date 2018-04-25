import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  state = {
    images: [],
    currFileIdx: 0,
    maxFiles: 4
  }
  onDrop = (files) => {
    const { images, currFileIdx, maxFiles } = this.state
    console.log('you dropped stuff on me', files)
    for (let idx in files) {
      const file = files[idx]
      console.log('file', file)
      const nextFileIdx = (currFileIdx < (maxFiles - 1))
        ? (currFileIdx + 1) : 0
      console.log('nextFileIdx', nextFileIdx)
      images[currFileIdx] = { name: file.name }
      this.setState({
        currFileIdx: nextFileIdx,
        images
      })
    }
  }
  render () {
    console.log('this.state', this.state)
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
