import { Container,Row,Col} from "react-bootstrap";
import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import resize2 from '../Images/resize2.jpeg';
const Laboratories =()=>{
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <img src="http://www.anklabs.com/wp-content/uploads/2017/10/banner002.png" width={'100%'} />
            <Container>
                <div className="row">
                <h3 className="sports_abcd">Laboratories</h3>
                        <div className="col-lg-6">
                        <p className="abcdaasd2">ISBM has an admirable set of laboratories infrastructure. We make sure that students can learn and hone their skills in a very relaxed, comfortable and a very professional environment.</p>
                        <p className="abcdaasd2">The University has state of the art labs that allow the students to experiment and bring to practice what they have learnt in theory.</p>

                        <p className="abcdaasd2">Laboratory at ISBM University facilitates progress of logical and decisive thinking skills of the students. The University has dedicated laboratories for physics, chemistry and biology programs. Each laboratory is well equipped with sufficient equipments, apparatus, specimens and computerized charts as per the requirements of different subjects. The laboratories are environmental friendly and all the necessary safety measures have been taken while designing the laboratory.</p>
                        </div>
                        <div className="col-lg-6">
                        <img src="https://www.ntu.ac.uk/__data/assets/image/0026/1348352/Brackenhurst-labs.jpg" width={'100%'} style={{marginBottom:'20px'}}></img>
                        </div>
                        </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Laboratories;