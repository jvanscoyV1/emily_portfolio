import React from "react";
import ele from '../assets/ele.png'
import arrow from '../assets/arrow.png'
import arrowback from '../assets/arrowleft.png'
import centipede from '../assets/cent.png'
import grid from '../assets/grid.png'
import { css } from 'glamor'
import imgStyles from './img.module.css'


class InstaImg extends React.Component {
  constructor() {
    super();
    this.imgs = [centipede, ele, centipede, ele, centipede, ele]
    
    this.state = { 
      curr: 0,
      imgclass: imgStyles.base,
      galleryclass: imgStyles.gallery_inactive,
      rightarrowclass: imgStyles.arrow, 
      leftarrowclass: imgStyles.arrowback, 
    }
  }


  createGrid = () => {
    let grid = [];
    let col = 1;
    let row = 2;
    for(let i = 0; i < this.imgs.length; i++){
      grid.push(
        <img
          className={imgStyles.galleryImg}
          src={this.imgs[i]}
          style={{
            gridColumn: col+"",
            gridRow: row+"",
          }}
          alt="Art!"
        />);
      col += 2;
      if(col > 5){
        col = 1;
        row += 2
      }
    }
    console.log(grid);
    return grid;
  }
  
    render() {
      return(
        <div>
          <div className={imgStyles.imgContainer}>

            <img className={this.state.leftarrowclass} 
              onClick={() => {
                if(this.state.imgclass == imgStyles.imgSlideRight){
                  this.setState(prevState => ({
                    curr: (Math.abs((prevState.curr + 1) % this.imgs.length)),
                    imgclass: imgStyles.imgSlideRight2
                  }));
                } else {
                  this.setState(prevState => ({
                    curr: (Math.abs((prevState.curr + 1) % this.imgs.length)),
                    imgclass: imgStyles.imgSlideRight
                  }));
                }
              }}
              src={arrowback}
            />
            
            <img className={this.state.imgclass}
              src={this.imgs[this.state.curr]}
              alt="Group of pandas eating bamboo"
            />

            <img className={this.state.rightarrowclass} 
              onClick={() => {
                if(this.state.imgclass == imgStyles.imgSlideLeft){
                  this.setState(prevState => ({
                    curr: (Math.abs((prevState.curr + 1) % this.imgs.length)),
                    imgclass: imgStyles.imgSlideLeft2
                  }));
                } else {
                  this.setState(prevState => ({
                    curr: (Math.abs((prevState.curr + 1) % this.imgs.length)),
                    imgclass: imgStyles.imgSlideLeft
                  }));
                }
              }} 
              src={arrow}
            />
            
          </div>
            <img 
              className={imgStyles.gridButton}
              onClick= {() => {
                if(this.state.galleryclass == imgStyles.gallery_inactive)
                  this.setState(prevState => ({
                    galleryclass: imgStyles.gallery_active,
                    imgclass: imgStyles.base + " " + imgStyles.hidden,
                    rightarrowclass: imgStyles.arrow + " " + imgStyles.hidden,
                    leftarrowclass: imgStyles.arrowback + " " + imgStyles.hidden,
                  }));
                else
                  this.setState(prevState => ({
                    galleryclass: imgStyles.gallery_inactive,
                    imgclass: imgStyles.base,
                    rightarrowclass: imgStyles.arrow,
                    leftarrowclass: imgStyles.arrowback,
                  }));
              }}
              src={ grid }
            />
          <div className={this.state.galleryclass}>
              {this.createGrid()}
          </div>

        </div>
      )
    }
  }

export default InstaImg
