import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ResetScroll from './components/ResetScroll.jsx'
import Nav from './components/page_components/Nav.jsx';
import Footer from './components/page_components/Footer.jsx';
import Home  from './pages/Home.jsx'
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'
import Page3 from './pages/Page3.jsx'
import Page4 from './pages/Page4.jsx'
import Page5 from './pages/Page5.jsx'

function App() {
    return (
        <Router>
            <ResetScroll/>
            {/* "Routes" are basically multiple routes. it wraps all the individual routes. */}
            <Nav/>
            <Routes>
                {/* "Route can be nested, it defines the path within the website by using the path prop." */}
                <Route path="/" element={<Home/>}/>
                <Route path="/hobbies" element={<Page1/>}/>
                <Route path="/about" element={<Page2/>}/>
                <Route path="/faq" element={<Page3/>}/>
                <Route path="/6D63737461636B73" element={<Page4/>}/>
                <Route path="/767362726F6E7A65" element={<Page5/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App