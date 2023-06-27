import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructor from "../Instructor/Instructor";
import Reviewers from "../reviewers/Reviewers";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>SurTaal Music | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <Instructor></Instructor>
            <Reviewers></Reviewers>
        </div>
    );
};

export default Home;