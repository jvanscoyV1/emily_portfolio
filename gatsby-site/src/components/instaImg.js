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
      this.imgs = [centipede, ele]
      
      this.state = { 
        curr: 0,
        imgclass: imgStyles.base,
      }
    }
  
    render() {
      return(
        <div>

          <img className={imgStyles.arrowback} 
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

          <img className={imgStyles.arrow} 
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
          <a href="/gallery/">
            <img className={imgStyles.grid}
              src={ grid }
            />
          </a>
        </div>
      )
    }
  }

export default InstaImg