import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  state = {
    images: [],
    currFileIdx: 0,
    maxFiles: 4
  }
  onDrop = (files) => {
    const { currFileIdx, images } = this.state
    console.log('you dropped stuff on me', files)
    const { updateImage } = this
    for (let idx in files) {
      const file = files[idx]
      console.log('file', file)
      const reader  = new FileReader();
      reader.onload = function(e)  {
          const image = document.createElement("img");
          const data = e.target.result
          console.log('data', data)
          image.src = data
          document.body.appendChild(image)
          images[currFileIdx] = {
            data,
            name: file.name
          }
          updateImage(images)
        }
      reader.readAsDataURL(file);
      
    }
  }

  updateImage = (images) => {
    const { currFileIdx, maxFiles } = this.state
    const nextFileIdx = (currFileIdx < (maxFiles - 1)) ? (currFileIdx + 1) : 0
    console.log('nextFileIdx', nextFileIdx)
    this.setState({
      currFileIdx: nextFileIdx,
      images
    })
  }

  render () {
    console.log('this.state', this.state)
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet" />
        <h1>Image Stitcher</h1>
        <h2>By Efosa Oyegun</h2>
        
          <Dropzone onDrop={this.onDrop}>
            <div className='drop'>
                <p>Drop your images in the box below</p>
            </div>
          </Dropzone>
        <style jsx>{`
          .drop {
            background-color: lightgreen;
            height: 100%;
            width: 100%;
          }
          .drop p {
            margin: 0;
            padding: 10px;
          }
        `}</style>
        
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
