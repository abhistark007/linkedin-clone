import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading,subtitle)=>(
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Reactjs new version out","Top news - 99980 readers")}
        {newsArticle("Thyssenkrupp sets up new tech centre in India","Top news - 45340 readers")}
        {newsArticle("Recruitment tech company Coffeee.io extends to cross border remote hiring","Top news - 22340 readers")}
        {newsArticle("Japan seals deal for defense equipment, technology transfers with UAE","Top news - 21220 readers")}
        {newsArticle("ChatGPT app arrives in India, now available for iOS users","Top news - 14320 readers")}
    </div>
  )
}

export default Widgets