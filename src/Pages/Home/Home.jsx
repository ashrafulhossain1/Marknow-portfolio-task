import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {

    const siteProps = {
        name: 'Ashraful Hossain',
        title: 'Front-end Web Developer',
        email: 'ahmeadashraful@gmail.com',
        github: 'https://github.com/ashrafulhossain1',
        linkedIn: 'https://www.linkedin.com/in/ashrafulhossain1',
        twitter: 'https://x.com/ahmeadashraful',
        instagram: 'https://www.instagram.com/ashraful_ahmead',
        youtube: '',
        medium: '',
    }


    return (
        <div>
            <div className="bg-amber-300">
                <Banner
                    name={siteProps.name}
                    title={siteProps.title}
                ></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Portfolio></Portfolio>
            </div>
            <div>
                <Contact {...siteProps}></Contact>
            </div>
        </div>
    );
};

export default Home;