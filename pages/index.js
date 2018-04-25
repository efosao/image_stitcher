import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import mergeImages from 'merge-images'

class Uploader extends Component {
  state = {
    images: [],
    currFileIdx: 0,
    maxFiles: 4
  }

  componentDidUpdate () {
    this.drawImages()
  }

  onImageDrop = (files) => {
    const { currFileIdx, images } = this.state
    const { updateImagesInState } = this
    for (let idx in files) {
      const file = files[idx]
      const reader  = new FileReader();
      reader.onload = function(e)  {
        const data = e.target.result
        const img  = document.createElement('img')
        img.src = data
        img.addEventListener('load', () => {
          // get image width
          // image is loaded into DOM so the `width` can be read
          // image is immediately removed afterwards
          document.body.removeChild(img)
          const { naturalWidth, width  } = img

          // clone image collection
          const newImgArray = images.map(o => ({ ...o }))
          newImgArray[currFileIdx] = {
            data,
            name: file.name,
            width: naturalWidth || width
          }

          updateImagesInState(newImgArray)
        })
        document.body.appendChild(img)
      }

      reader.readAsDataURL(file);
    }
  }

  updateImagesInState = (images) => {
    const { currFileIdx, maxFiles } = this.state
    const nextFileIdx = (currFileIdx < (maxFiles - 1)) ? (currFileIdx + 1) : 0
    this.setState({
      currFileIdx: nextFileIdx,
      images
    })
  }

  getImageMergeOptions = () => {
    const { images } = this.state
    // we are calculating the maximum width of the [canvas] needed to hold the image
    const width = images.reduce((acc, curr, idx) => (curr.width + acc), 0)
    return {
      width
    }
  }

  drawImages = () => {
    const { currFileIdx, images } = this.state
    let cummHorizontalWidth = 0

    // format image data for `merge-images` plugin
    const imgDataArr = images.map(({ data, width }, idx) => {
      const result = {
        src: data,
        x: cummHorizontalWidth,
        y: 0
      }
      cummHorizontalWidth += width
      return result
    })

    const options = this.getImageMergeOptions()

    // draw the images into empty image tag in view
    mergeImages(imgDataArr, options)
      .then(b64 => document.querySelector('img').src = b64)
  }

  render () {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Tajawal" rel="stylesheet" />
        <h1>Image Stitcher</h1>
        <h2>By Efosa Oyegun</h2>
        
          <Dropzone onDrop={this.onImageDrop}>
            <div className='drop'>
                <p>Click or Drop your images in this box</p>
            </div>
          </Dropzone>

          <img />

        <style global jsx>{`
          body {
            font-family: "Tajawal", sans-serif;
          }
          .drop {
            background-color: lightgreen;
            font-size: 24px;
            font-weight: bold;
            height: 100%;
            width: 100%;
          }
          .drop p {
            margin: 0;
            padding: 10px;
          }
          img {
            border: 4px solid pink;
            margin-top: 20px;
            max-width: 80%;
          }
        `}</style>
      </div>
    )
  }
}

export default Uploader
