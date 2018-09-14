import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2rem`}}>
    <Link style={{color: "hsl(359, 100%, 68%)", fontSize: '1.15em', textShadow: '1px 1px 20px #737496', lineHeight: '60px'}} to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (  
  <div
    style={{
      background: '',
      opacity: 0.8,
      marginBottom: '1.45rem',
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: "center",
        top: 0,
        height: '10vh',
        left: '50%',
        margin: 'auto',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/"
          style={{
            fontSize: '1.25em',
            color: 'hsl(359, 100%, 68%)',
            textDecoration: 'none',
            textShadow: '1px 1px 1px #737496'
          }} 
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
    <ul style={{ listStyle: `none`, textAlign: "center"}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  </div>
)

export default Header
