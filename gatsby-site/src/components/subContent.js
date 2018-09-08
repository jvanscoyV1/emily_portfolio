import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import ele from '../assets/ele.png'


let artReveal = function(n, total) {
    return css.keyframes({
      '0%': { transform: 'rotate('+ (360/(n / total)) +')'},
      '50%': { transform: 'translate(400px)'},
      '100%': { transform: 'rotate('+ -(360/(n / total)) +')'},
    })
}

let translate = css.keyframes({
    '0%':{ transform: 'translate(0)' },
    '100%':{ transform: 'translate(100px)'},
})

let artBase = function(n, total){
    return css({
        transform: 'rotate('+ (360*(n / total)) +'deg)', // translate(400px) rotate('+ -(360*(n / total)) +'deg)',
        animation: '${translate} 1s',
        transform: 'rotate('+ -(360*(n / total)) +'deg)',
    })
  }


const SubContent = ({children, n, total}) => (
    <div {...artBase(n, total)} style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '100px',
        height: '100px',
        margin: '-50px',
        transform: 'rotate('+ (360*(n / total)) +'deg) translate(400px) rotate('+ -(360*(n / total)) +'deg)', 
    }}
    >
        {children}
    </div>
)
export default SubContent;