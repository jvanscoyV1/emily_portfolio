import React from "react";
import ele from '../assets/ele.png'
import arrow from '../assets/arrow.png'
import arrowback from '../assets/arrowleft.png'
import centipede from '../assets/cent.png'
import cow from '../assets/cow.jpg'
import grid from '../assets/grid.png'
import arrowDown from "../assets/arrowdown.png"
import { css } from 'glamor'
import imgStyles from './img.module.css'
import { array } from "prop-types";


class InstaImg extends React.Component {
  constructor() {
    super();
    this.imgs = [centipede, ele, cow, centipede, ele, cow]
    
    this.state = { 
      curr: 0,
      imgclass: imgStyles.base,
      galleryclass: imgStyles.gallery_inactive,
      rightarrowclass: imgStyles.arrow, 
      leftarrowclass: imgStyles.arrowback, 
      gridButton: grid,
      gridButtonClass: imgStyles.gridButton,
    }
  }


  createGrid = () => {
    let grid = [];
    let col = 1;
    let row = 2;
    for(let i = 0; i < this.imgs.length; i++){
      grid.push(
        <img
          key={i}
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
              className={this.state.gridButtonClass}
              onClick= {() => {
                if(this.state.galleryclass == imgStyles.gallery_inactive 
                  || this.state.galleryclass == imgStyles.gallery_inactive_animate )
                  this.setState(prevState => ({
                    galleryclass: imgStyles.gallery_active,
                    imgclass: imgStyles.base + " " + imgStyles.hidden,
                    rightarrowclass: imgStyles.arrow + " " + imgStyles.hidden,
                    leftarrowclass: imgStyles.arrowback + " " + imgStyles.hidden,
                    gridButton: arrowDown,
                    gridButtonClass: imgStyles.changeButton,
                  }));
                else
                  this.setState(prevState => ({
                    galleryclass: imgStyles.gallery_inactive_animate,
                    imgclass: imgStyles.base + " " + imgStyles.unhide,
                    rightarrowclass: imgStyles.arrow + " " + imgStyles.unhide,
                    leftarrowclass: imgStyles.arrowback + " " + imgStyles.unhide,
                    gridButton: grid,
                    gridButtonClass: imgStyles.gridButton,

                  }));
              }}
              src={ this.state.gridButton }
            />
          <div className={this.state.galleryclass}>
              {this.createGrid()}
          </div>

        </div>
      )
    }
  }

export default InstaImg
