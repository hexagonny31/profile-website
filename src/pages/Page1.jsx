import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Nav from '../components/page_components/Nav.jsx';
import Hobbies from '../components/page_components/Hobbies.jsx';
import Footer from '../components/page_components/Footer.jsx';

function Page1() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <link rel="icon" href="/hobby-tab.ico?v=2" />
                <link rel="shortcut icon" href="/hobby-tab.ico?v=2" />
                <title>Let a man do his hobbies</title>
            </Helmet>
            <Nav/>
            <Hobbies/>
            <Footer/>
        </>
    );
}
export default Page1