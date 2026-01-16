import pfpFallback from '../../assets/pfp.png'
import { useEffect, useState } from 'react';
import { showMessage } from '../../js/popUpMessage.js';
import Button from '../Button.jsx'
import '../../css/Nav.css'

function Nav(){
    const userId = "954412910350860390";
    const [avatarUrl, setAvatarUrl] = useState(pfpFallback);

    useEffect(() => {
        async function loadAvatar() {
            const res = await fetch(`https://discord-avatar-api.onrender.com/api/avatar/${userId}`);
            const data = await res.json();
            setAvatarUrl(data.avatar_url);
        }
        loadAvatar()
    }, []);

    return(
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <div className="popup" onClick={showMessage}>
                        <img className="pfp" draggable="false" src={avatarUrl} alt="Current Profile Picture" 
                        width="50" height="50"/>
                        <span className="popuptext" id="message">"placeholder message." - html 2025</span>
                    </div>
                    <a className="username" target="_blank" href="https://discordapp.com/users/954412910350860390">hexagonny.</a>
                </div>
                
                {/* please do not turn this into a modular menu component, i have probably did this before. JUST DON'T */}
                <div className="exref">
                    <ul>
                        <li><Button type="ico" className="home" link="/"/></li>
                        <li><Button type="text" toTarget={true} link="https://myanimelist.net/profile/-hex" i="fas fa-newspaper" label="MyAnimeList"/></li>
                        <li><Button type="text" toTarget={true} link="https://www.youtube.com/@hexagonny" i="fas fa-desktop" label="YouTube"/></li>
                        <li><Button type="text" toTarget={true} link="https://github.com/hexagonny31" i="fas fa-keyboard" label="GitHub"/></li>
                    </ul>
                </div>
            </div>
            <div className="decor"></div>
        </nav>
    );
}
export default Nav