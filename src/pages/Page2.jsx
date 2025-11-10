import { HelmetProvider, Helmet } from 'react-helmet-async'
import Resume from "../components/page_components/Resume.jsx"

// Profile
function Page2() {
    return(
        <>
            <Helmet>
                <link rel="icon" href="./about-tab.ico?v=3" />
                <link rel="shortcut icon" href="./about-tab.ico?v=3" />
                <title>Actual info like a resume</title>
            </Helmet>
            <Nav/>
            <Resume/>
            <Footer/>
        </>
    );
}
export default Page2;