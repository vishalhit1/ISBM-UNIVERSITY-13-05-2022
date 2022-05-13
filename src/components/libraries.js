import { Container,Row,Col} from "react-bootstrap";
import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import {Link, BrowserRouter} from 'react-router-dom';
import library from '../Images/library.jpg';
const Libraries =()=>{
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <img src="https://www.isbmcoe.org/images/infrastructure/PIC%201.jpg" width={'100%'} />
            <Container>
                <div className="row">
                <h3 className="sports_abcd">Library</h3>
                        <div className="col-lg-6">
                        <p className="abcdaasd1">Libraries are the hub of academic life of the campus. Housed in spacious halls, 
                            the library is well stacked with text books, journals, periodicals and reference 
                            material.</p>
                        <p className="abcdaasd1">The University supports a huge state-of-the-art library with the contemporary books
                             and online system of accessibility to make research and learning a continuous and
                              speedy process. The library is stocked with large number of books and journals
                               in all applied areas of studies.</p>

                        <p className="abcdaasd1">It is equipped with the most popular journals both National and International, 
                            Newspapers, Current Magazines, books, research publications etc. The library is 
                            accessible to all students and faculty members. Reference Section contains 
                            Encyclopedias, books on General Knowledge and Competitive Exams, Dictionaries, 
                            previous volumes of journals/magazine etc. and remote access to thousands of 
                            libraries through modern software..</p>
                        </div>
                        <div className="col-lg-6">
                        <img src={library} style={{marginBottom:'20px'}}></img>
                        </div>
                        </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Libraries;