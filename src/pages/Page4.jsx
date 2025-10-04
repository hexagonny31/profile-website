import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Nav from '../components/page_components/Nav.jsx';
import Calc from '../components/page_components/calculators/Mc-Stacks.jsx';
import Footer from '../components/page_components/Footer.jsx';

function Page4() {
    return (
        <>
            <Helmet prioritzeSeoTags>
                <link rel="icon" href="./tab-icon.ico?v=1"/>
                <link rel="shortcut icon" href="./tab-icon.ico?v=1"/>
                <title>Funny little test page</title>
            </Helmet>
            <Nav/>
            <Calc/>
            <Footer/>
        </>
    );
}
export default Page4