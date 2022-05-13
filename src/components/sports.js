import Footer from "./footer";
import Header from "./Header/header";
import NavigationBar from "./Header/navbar";
import Aports from "../Images/sports.png"
const Sports =()=>{
    return(
        <>
        <Header/>
        <NavigationBar/>
        <div>
            <img src="https://www.pngkey.com/png/full/440-4402160_welcome-to-xlr8-sports-sports-banner-design-png.png" width={'100%'} />
        </div>
            <div>
                <h3 className="sports_abcd">Sports Facilities</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="abcdaasd">A vast range of innovative and intellectual people hailing from various parts of India and world make ISBM, one of the most sought after universities in India.</p> 
                        <p className="abcdaasd">ISBM highlights not only providing world-class education but also prioritizing their physical activities and indulging in games and yoga for their overall development.</p>
                        <p className="abcdaasd">Best facilities give students a golden chance for their mental as well as physical growth and development.</p>
                    </div>
                    <div className="col-lg-6">
                    <img src="https://www.oaktreeschools.co.uk/oaktre-content/uploads/2021/06/cover_image.jpg" width={'100%'} />
                    </div>
                    <div className="col-lg-6 order-lg-2">
                        <p className="abcdaasd">Experienced coaches and instructors make sure that students are comfortable and enjoy their favorite game(s). These students represent their university by wearing colorful jerseys in participating sports meets and events. </p>
                        <p className="abcdaasd">ISBM has an excellent premise to accommodate indoor games like badminton, table tennis, pool/snooker, chess and carrom. Also, it has space for playing outdoor games such as cricket, basketball, football and volleyball. </p>
                        <p className="abcdaasd">Yoga Sessions are conducted for students to be healthier, better and channelize their energies in the right direction. </p>
                    </div>
                    <div className="col-lg-6">
                    <img src="https://international.berkeley.edu/sites/default/files/event-photos/Sports.png" width={'100%'} />
                    </div>
                    
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Sports