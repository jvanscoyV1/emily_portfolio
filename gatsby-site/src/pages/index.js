import React from 'react';
import ContentBlock from '../components/contentBlock'
import InstaImg from '../components/instaImg'
import Fog from '../components/fog'

const IndexPage = () => (
  <div style={{ margin: '3rem 1rem', maxWidth: '960px', overflow:'hidden'}}>
    <ContentBlock> 
     <InstaImg></InstaImg>
    </ContentBlock>
    <Fog></Fog>
  </div>
)

export default IndexPage
