import React from 'react'
import Link from 'gatsby-link'
import fogStyles from './fog.module.css'

const Fog = () => (
    <section className={fogStyles.fog}>
        <div className={fogStyles.fog_container}>
            <div className={ fogStyles.fog_img1 }></div>
            <div className={ fogStyles.fog_img2 }></div>
            <div className={ fogStyles.fog_img3 }></div>
        </div>
    </section>
)
export default Fog;