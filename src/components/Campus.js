import { Container,Row,Col} from "react-bootstrap";
import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import resize2 from '../Images/resize2.jpeg';
const Campus =()=>{
    return (
        <div>
            <Header/>
            <NavigationBar/>
            {/* <img src="http://www.anklabs.com/wp-content/uploads/2017/10/banner002.png" width={'100%'} /> */}
            <Container>
                <div className="row">
                <h3 className="sports_abcd">Campus</h3>
                        <div className="col-lg-6">
                        <p className="abcdaasd2">ISBM invites forthcoming students and their parents to visit the University and view the possibilties and opportunities which the university is offering. </p>
                        <p className="abcdaasd2">The counseling team holds the capacity to solve all kinds of solutions and show the various aspects of campuses. </p>
                        <p className="abcdaasd2">Please submit your details here <span>(info@isbmuniversity.edu.in).</span></p>
                        <p className="abcdaasd2">You can visit our campus anytime</p>
                        <p className="abcdaasd2">Call on the following numbers <span>(+91-9373199999)</span></p>
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

export default Campus;