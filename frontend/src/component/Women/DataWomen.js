import img5 from "../image/imageHome/2.png"
import img6 from "../image/imageHome/4.png"
import img7 from "../image/imageHome/5.png"
import { NavLink} from "react-router-dom";
// import { Button} from "react-bootstrap";
import Btn from "../Btn";
import "../css/Cards.css"
const data =(t)=>{
    return[
        {
            id:3,
            img:img5,
            // discountCard:<DicountCard/>,
            title:t("Wave dress"),
            price:150,
            discount:100,
            description:t(`Navy checkered dress: classic pattern, modern appeal.`),
            button:(
                <NavLink to="/WomenClothes" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        ,{
            id:6,
            img:img6,
            title:t("Wave Stylish dress"),
            price:170,
            discount:145,
            description:t(`Stylish brown-red dress with a flared skirt and waist belt for a sleek look.`),
            button:(
                <NavLink to="/WomenClothes2" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        ,{
            id:7,
            img:img7,
            title:t("Wave Stylish dress Green"),
            price:160,
            discount:130,
            description:t(`Green tweed dress with a chic belt, versatile and elegant.`),
            button:(
                <NavLink to="/WomenClothes3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
    ]

}
export default data;