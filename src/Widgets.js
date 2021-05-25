import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widgets.css'
function Widgets() {
    const newArticle = (headeing, subtitle) => (
        <div className="widgets__article">
           <div className="widgets__articleLeft">
             <FiberManualRecordIcon />
           </div>
           <div className="widgets__articleRight">
              <h4>{headeing}</h4>
              <p>{subtitle}</p>
           </div>
        </div>
    )
    return (
        <div className="Widgets">
            <div className="Widgets__header">
               <h2>Linkedin News</h2>
               <InfoIcon />
            </div>
            {newArticle("github","baderdinebenibrahim1")}
            {newArticle("Facebook","bader din bader")}
            {newArticle("Instagram","@wheelchair_champion")}
        </div>
    )
}

export default Widgets
