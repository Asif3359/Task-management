import About from "../About/About";
import Baner from "../Banner/Banner";
import ContactInfo from "../Contact/Contact";
import QuestionSection from "../QuestionSection/QuestionSection";
import UserTypesComponent from "../UserAre/UserAre";


const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <UserTypesComponent></UserTypesComponent>
            <About></About>
            <ContactInfo></ContactInfo>
            <QuestionSection></QuestionSection>
        </div>
    );
};

export default Home;