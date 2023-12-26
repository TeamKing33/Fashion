import img1  from "./image/1.png"
import img2 from "./image/2.png"
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import { NavLink} from "react-router-dom";
// import { Button} from "react-bootstrap";
import Btn from "./Btn";
import "./css/Cards.css"
import DicountCard from "./design/DicountCard";
const data =[
    // cardData:[
        {
            id:1,
            img:img1,
            title:"T-shirt",
            price:"$30",
            discount:25,
            description:`Crew Neck Short Sleeve Combed Cotton Men's T-shirt`,
            button:(
                <NavLink className="NavLink" to="/T-shirt"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:2,
            img:img2,
            discountCard:<DicountCard/>,
            title:"T-shirt",
            price:"$70",
            discount:50,
            description:`Crew Neck Short Sleeve Combed Cotton Men's T-shirt`,
            button:(
                <NavLink to="/T-shirt2" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        {
            id:3,
            img:img3,
            title:"Wave Classic Polo Neck",
            price:"$45",
            discount:30,
            description:`Short Sleeve Pike Men's T-shirt`,
            button:(
                <NavLink to="/T-shirt3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        }
        ,{
            id:4,
            img:img4,
            title:"Wave Classic",
            price:"$55",
            discount:40,
            description:`Crew Neck Short Sleeve Combed Cotton Men's T-shirt`,
            // addtocart:(
               
            // ),
            button:(
                <NavLink to="/T-shirt4" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        
        

    // ]

]
export default data;