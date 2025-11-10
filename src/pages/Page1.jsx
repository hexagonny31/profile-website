import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Hobbies from '../components/page_components/Hobbies.jsx';

function Page1() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <link rel="icon" href="./hobby-tab.ico?v=2" />
                <link rel="shortcut icon" href="./hobby-tab.ico?v=2" />
                <title>Let a man do his hobbies</title>
            </Helmet>
            <Hobbies/>
        </>
    );
}
export default Page1