import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Nav from "../components/page_components/Nav";
import Questions from "../components/page_components/Questions.jsx"
import Footer from "../components/page_components/Footer";

function Page3() {
    return(
        <>
            <Helmet>
                <link rel="icon" href="./faq-tab.ico?v=4" />
                <link rel="shortcut icon" href="./faq-tab.ico?v=4" />
                <title>Huh? huhh? huuhh??</title>
            </Helmet>
            <Nav/>
            <Questions/>
            <Footer/>
        </>
    );
}
export default Page3;