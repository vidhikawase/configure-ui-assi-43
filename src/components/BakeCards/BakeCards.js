import "./BakeCards.css"
import {  Bakeinfo ,theme , ConfigureSite} from "../../data"

function BakeCards({id , title, image , phone, website ,price ,heading ,description}) {
  return (
   <>
   <div className="cards-body">

   <div className="Site heading">{heading}</div>
   <div className="site-discription">{description}</div>

   <div className="card-title" style={{backgroundColor: theme.primary}}>{title}</div>

   <img src= {image} className="bake-image" />

   <p className="phone-no">Contact :-{phone}</p> 

   <p className="email">Email :-{website}</p>

   <h3 className="price">Price :-{price}</h3>

   </div>
   
   </>
  )
}

export default BakeCards