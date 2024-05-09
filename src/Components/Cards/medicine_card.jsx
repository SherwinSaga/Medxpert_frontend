import { useLocation } from "react-router-dom";
import Footer from "../HeaderFooter/footer";
import Navigation from "../HeaderFooter/navigation";
function Medicine_Card(){

    const location = useLocation();
    const medicine = location.state.medicine;

    return(
        <div>
            <Navigation/>
            <div>
                <h2>{medicine.medicine_name}</h2>
                <p>{medicine.medicine_desc}</p>
                <p>{medicine.medicine_uses}</p>
                <p>{medicine.medicine_side_effects}</p>
                <p>{medicine.medicine_dosage}</p>
                <p>{medicine.medicine_imgUrl}</p>
                <img src="https://i.imgur.com/1O6t7Hh.jpeg" alt="image"/>
            </div>

            <Footer/>
        </div>
        
    );
}

export default Medicine_Card;