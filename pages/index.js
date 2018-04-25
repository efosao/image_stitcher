import React, { PureComponent } from 'react'
import Dropzone from 'react-dropzone'
import mergeImages from 'merge-images'
import cloneDeep from 'clone-deep'

class Uploader extends PureComponent {
  state = {
    images: {},
    currFileIdx: 0,
    maxFiles: 4,
    resultImgSrc: null
  }

  onImageDrop = (files) => {
    const { currFileIdx, images, maxFiles } = this.state
    // clone image collection
    const newImgObj = {}

    var nextFileIdx = currFileIdx

    for (let idx in files) {
      const file = files[idx]
      const reader  = new FileReader()
      const imagesElem = document.getElementById('images')
      reader.onload = (e) => {
        const data = e.target.result
        const img  = document.createElement('img')
        img.src = data
        imagesElem.appendChild(img)
        img.addEventListener('load', () => {
          // get image width
          // image is loaded into DOM so the `width` can be read
          // image is immediately removed afterwards
          imagesElem.removeChild(img)
          const { naturalWidth, width  } = img

          const key = `key_${idx}`
          newImgObj[key] = {
            data,
            name: file.name,
            width: naturalWidth || width
          }

          nextFileIdx = (nextFileIdx < (maxFiles - 1)) ? (nextFileIdx + 1) : 0
          console.log('%% nextFileIdx', nextFileIdx)
        })
      }
      reader.readAsDataURL(file)
    }

    this.updateImagesInState(newImgObj, nextFileIdx)

  }

  updateImagesInState = (images, nextFileIdx) => {
    this.setState({
      currFileIdx: nextFileIdx,
      images
    }, () => setTimeout(() => this.drawImages(), 500))
  }

  getImageMergeOptions = () => {
    const { images } = this.state
    // we are calculating the maximum width of the [canvas] needed to hold the image
    const width = Object.keys(images).reduce((acc, curr, idx) => (images[curr].width + acc), 0)
    return {
      width
    }
  }

  drawImages = () => {
    const { currFileIdx, images } = this.state
    let cummHorizontalWidth = 0

    // format image data for `merge-images` plugin
    const imgDataArr = Object
      .keys(images)
      .map((key, idx) => {
        const { data, width } = images[key]
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
    if (imgDataArr.length > 0) {
      mergeImages(imgDataArr, options)
        .then(b64 => this.setState({ resultImgSrc: b64 }))
    }
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

          <img style={{ display: this.state.resultImgSrc ? 'inherit' : 'hidden' }} src={this.state.resultImgSrc} />

          <div id='images'></div>

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
