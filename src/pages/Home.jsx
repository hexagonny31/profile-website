import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import Front from '../components/page_components/Front.jsx';

import Test from '../Test.jsx';

function Home() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <link rel="icon" href="./tab-icon.ico?v=1" />
                <link rel="shortcut icon" href="./tab-icon.ico?v=1" />
                <title>Behind of my page</title>
            </Helmet>
            <Front/>
        </>
    );
}
export default Home