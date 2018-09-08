import React from 'react'
import Link from 'gatsby-link'
import contentStyles from './content.module.css'

const ContentBlock = ({children}) => (
    <div className={contentStyles.content}>
        {children}
    </div>
)
export default ContentBlock;