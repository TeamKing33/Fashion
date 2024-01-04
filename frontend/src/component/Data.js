import img1  from "./image/1.png"
import img2 from "./image/2.png"
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import img5 from "./image/imageHome/2.png"
import img6 from "./image/imageHome/4.png"
import img7 from "./image/imageHome/5.png"
import img8 from "./image/imageHome/imagekids/1.png"
import img9 from "./image/imageHome/imagekids2/1.png"
import img10 from "./image/imageHome/imagekids3/1.png"
import img11 from "./image/imageHome/imagekids4/1.png"
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
            price:"EGP30",
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
            price:"EGP70",
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
            price:"EGP150",
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
            price:"EGP45",
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
            price:"EGP55",
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
            price:"EGP170",
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
            price:"EGP160",
            discount:130,
            description:`Green tweed dress with a chic belt, versatile and elegant.`,
            button:(
                <NavLink to="/WomenClothes3" className="NavLink"><div className="btncard"><Btn/></div></NavLink>
            ),
            number:1,
        },
        ,{
            id:8,
            img:img8,
            title:"Wave  Girls dress",
            price:"EGP70",
            discount:50,
            description:`A cute girls' dress with long sleeves, featuring unicorn and floral patterns.`,
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