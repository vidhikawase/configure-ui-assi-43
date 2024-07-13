import "./Home.css"
import { Bakeinfo } from "./../../data"
import BakeCards from "../../components/BakeCards/BakeCards"

function Home() {
  return (
    <>
    <div className="bake-title">Bakery</div>

    <div className="Bakecards-container">
        {
            Bakeinfo.map((bakeObject , i)=> {
                const {
                    id,
                    title,
                    image,
                    phone,
                    website,
                    price ,
                    heading,
                    description
                } = bakeObject

                return (
                    <BakeCards
                    key = {i}
                    id = {id}
                    title = {title}
                    image = {image}
                    phone = {phone}
                    website = {website}
                    price = {price}
                    heading = {heading}
                    description = {description}
                    />
                )
            })
        }
        </div>
    </>
  )
}

export default Home