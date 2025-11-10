import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Calc from '../components/page_components/calculators/Mc-Stacks.jsx';

function Page4() {
    return (
        <>
            <Helmet prioritzeSeoTags>
                <link rel="icon" href="./tab-icon.ico?v=1"/>
                <link rel="shortcut icon" href="./tab-icon.ico?v=1"/>
                <title>Funny little test page</title>
            </Helmet>
            <Calc/>
        </>
    );
}
export default Page4