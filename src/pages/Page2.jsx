import { HelmetProvider, Helmet } from 'react-helmet-async'
import Nav from "../components/page_components/Nav.jsx"
import Resume from "../components/page_components/Resume.jsx"
import Footer from "../components/page_components/Footer.jsx"

// Profile
function Page2() {
    return(
        <>
            <Helmet>
                <link rel="icon" href="/about-tab.ico?v=3" />
                <link rel="shortcut icon" href="/about-tab.ico?v=3" />
                <title>Actual info like a resume</title>
            </Helmet>
            <Nav/>
            <Resume/>
            <Footer/>
        </>
    );
}
export default Page2;