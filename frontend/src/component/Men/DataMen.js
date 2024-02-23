import img1  from "../image/1.png"
import img2 from "../image/2.png"
import img3 from "../image/3.png"
import img4 from "../image/4.png"
import { NavLink} from "react-router-dom";
// import { Button} from "react-bootstrap";
import Btn from "../Btn";
import "../css/Cards.css"
import DicountCard from "../design/DicountCard";
const data =(t)=>{
    return[
        {
            id:1,
            img:img1,
            title:t("Crew Neck Short"),
            price:30,
            discount:25,
            description:t("Crew Neck Short Sleeve Striped Combed Cotton Men's T-shirt"),
            button:(
                <NavLink className="NavLink" to="/T-shirt"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:2,
            img:img2,
            discountCard:<DicountCard/>,
            title:t("Classic Crew Neck Long"),
            price:70,
            discount:50,
            description:t(`Classic Crew Neck Long Sleeve Men's Sweatshirt`),
            button:(
                <NavLink to="/T-shirt2" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:3,
            img:img3,
            title:t("Wave Classic Polo Neck"),
            price:45,
            discount:30,
            description:t(`Crew Neck Short Sleeve Combed Cotton Men's T-shirt`),
            button:(
                <NavLink to="/T-shirt3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        }
        ,{
            id:5,
            img:img4,
            title:t("Crew Neck Long"),
            price:55,
            discount:40,
            description:t(`Crew Neck Long Sleeve Men's Tricot Sweater with Color Block`),
            button:(
                <NavLink to="/T-shirt4" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        
        

    ]

}
export default data;