import img8 from "../image/imageHome/imagekids/1.png"
import img9 from "../image/imageHome/imagekids2/1.png"
import img10 from "../image/imageHome/imagekids3/1.png"
import img11 from "../image/imageHome/imagekids4/1.png"
import { NavLink} from "react-router-dom";
// import { Button} from "react-bootstrap";
import Btn from "../Btn";
import ".././css/Cards.css"
import DicountCard from "../design/DicountCard";
const data =[
    // cardData:[
        ,{
            id:8,
            img:img8,
            title:"Wave  Girls dress",
            price:"EGP70",
            discount:50,
            description:`A cute girls' dress with long sleeves,featuring unicorn and floral patterns.`,
            button:(
                <NavLink to="/KidsClothes" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        ,{
            id:9,
            img:img10,
            title:"Wave  Hoodie",
            price:"EGP50",
            discount:55,
            description:`A "Block-Color Hoodie" is a stylish casual hoodie featuring solid color blocks.`,
            button:(
                <NavLink to="/KidsClothes3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        
        ,{
            id:10,
            img:img9,
            title:"Wave  Girls",
            price:"EGP50",
            discount:40,
            description:`Infant girl outfit set for fall/winter with a cotton long-sleeve romper and pants.`,
            button:(
                <NavLink to="/KidsClothes2" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },

        ,{
            id:11,
            img:img11,
            title:"Wave  Hoodie",
            price:"EGP70",
            discount:65,
            description:`Dark blue dinosaur-themed hoodie Stylish, versatile, playful self-expression for casual comfort.`,
            button:(
                <NavLink to="/KidsClothes4" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        
        

    // ]

]
export default data;