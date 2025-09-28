import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ResetScroll from './components/ResetScroll.jsx'
import Home from './pages/Home.jsx'
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'
import Page3 from './pages/Page3.jsx'

function App() {
    return (
        <Router>
            <ResetScroll/>
            {/* "Routes" are basically multiple routes. it wraps all the individual routes. */}
            <Routes>
                {/* "Route can be nested, it defines the path within the website by using the path prop." */}
                <Route path="/" element={<Home/>}/>
                <Route path="/hobbies" element={<Page1/>}/>
                <Route path="/about" element={<Page2/>}/>
                <Route path="/faq" element={<Page3/>}/>
            </Routes>
        </Router>
    );
}
export default App