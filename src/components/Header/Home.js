import React from "react";
import Header from "./header";
import NavigationBar from "./navbar";
import Experience from "./experience";
import Course from "../Courses/course";
import Events from "../Events/events";
import Campus from "../Campus/campus";
import Findisbm from "../About/findisbm";
import Partner from "../partners/partner";
import Footer from "../footer";
import Homebanner from "./homebanner";
import On_load_popup from "../on_load_popup";
import Placement from '../Placements/placements';

const Home=()=>{
    return(
        <React.Fragment>
            <Header/>
            {/* <On_load_popup/> */}
            <NavigationBar/>
            <Homebanner/>
            <Experience/>
            <Course/>
            <Events/>
            <Campus/>
            <Findisbm/>
            <Partner/>
            {/* <Placement/> */}
            <Footer/>
        </React.Fragment>
    )
}

export default Home