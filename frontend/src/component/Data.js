import img1  from "./image/1.png"
import img2 from "./image/2.png"
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import img5 from "./image/imageHome/2.png"
import img6 from "./image/imageHome/4.png"
import img7 from "./image/imageHome/5.png"
import { NavLink} from "react-router-dom";
// import { Button} from "react-bootstrap";
import Btn from "./Btn";
import "./css/Cards.css"
import "./css/Data.css"
import DicountCard from "./design/DicountCard";
const data =[
    // cardData:[
        {
            id:1,
            img:img1,
            title:" Crew Neck Short",
            price:"$30",
            discount:25,
            description:` Crew Neck Short Sleeve Striped Combed Cotton Men's T-shirt`,
            button:(
                <NavLink className="NavLink" to="/T-shirt"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:2,
            img:img2,
            discountCard:<DicountCard/>,
            title:"Classic Crew Neck Long",
            price:"$70",
            discount:50,
            description:`Classic Crew Neck Long Sleeve Men's Sweatshirt`,
            button:(
                <NavLink to="/T-shirt2" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:3,
            img:img5,
            // discountCard:<DicountCard/>,
            title:"Wave dress ",
            price:"$150",
            discount:100,
            description:`Navy checkered dress: classic pattern, modern appeal.`,
            button:(
                <NavLink to="/WomenClothes" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:4,
            img:img3,
            title:"Wave Classic Polo Neck",
            price:"$45",
            discount:30,
            description:`Crew Neck Short Sleeve Combed Cotton Men's T-shirt`,
            button:(
                <NavLink to="/T-shirt3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        }
        ,{
            id:5,
            img:img4,
            title:"Crew Neck Long ",
            price:"$55",
            discount:40,
            description:`Crew Neck Long Sleeve Men's Tricot Sweater with Color Block`,
            button:(
                <NavLink to="/T-shirt4" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        ,{
            id:6,
            img:img6,
            title:"Wave Stylish dress ",
            price:"$170",
            discount:145,
            description:`Stylish brown-red dress with a flared skirt and waist belt for a sleek look.`,
            button:(
                <NavLink to="/WomenClothes2" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        ,{
            id:7,
            img:img7,
            title:"Wave Stylish dress Green",
            price:"$160",
            discount:130,
            description:`Green tweed dress with a chic belt, versatile and elegant.`,
            button:(
                <NavLink to="/WomenClothes3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        

    // ]

]
export default data;