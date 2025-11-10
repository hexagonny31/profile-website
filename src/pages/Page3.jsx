import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Questions from "../components/page_components/Questions.jsx"

function Page3() {
    return(
        <>
            <Helmet>
                <link rel="icon" href="./faq-tab.ico?v=4" />
                <link rel="shortcut icon" href="./faq-tab.ico?v=4" />
                <title>Huh? huhh? huuhh??</title>
            </Helmet>
            <Questions/>
        </>
    );
}
export default Page3;