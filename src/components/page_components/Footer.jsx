import Button from '../Button.jsx'
import MediaOverlay from '../MediaOverlay.jsx'
import '../../css/Footer.css'
import { useState } from 'react'
import memes from '../../js/gallery.js'

function Footer() {
    // useState that toggles the "MediaOverlay".
    const [showMeme, setShowMeme] = useState(false);
    // useState that toggles and defines a random image.
    const [randMedia, setRandMedia] = useState(null);

    const toggle = () => {
        if (!showMeme) {
            const random = memes[Math.floor(Math.random() * memes.length)];
            setRandMedia(random);
        }
        setShowMeme(!showMeme);
    };

    return (
        <section>
            <div className="footer">
                <div className="folder">
                    <div onClick={toggle}>
                        <Button type="ico" className="btn-folder" />
                    </div>
                </div>
                <p className="text-xs">
                    <i className="fas fa-copyright"></i> 2025 Jascha Olea
                </p>
            </div>

            <MediaOverlay
                visible={showMeme}
                src={randMedia}
                onClose={toggle}
            />
        </section>
    );
}

export default Footer;