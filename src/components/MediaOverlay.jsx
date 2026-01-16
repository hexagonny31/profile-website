import Button from './Button.jsx'
import '../css/MediaOverlay.css'

// an overlay that display images, gifs and videos.
function MediaOverlay({ visible, src, onClose }) {

    // if the componet is not visible or "src" is empty, return nothing.
    if (!visible || !src) return null;

    const isVideo = src.endsWith('.mp4') || src.endsWith('.mov');

    return (
        <div className="media-overlay fade-in">
            <div className="media-container">
                <div onClick={onClose}>
                    <Button type="ico" className="close" />
                </div>
                {isVideo ? (
                    <video
                        className="spinZoom"
                        controls>
                        <source src={src}/>
                    </video>
                ) : (
                    <img
                        draggable="false"
                        src={src}
                        alt="Random meme"
                        className="spinZoom"
                    />
                )}
            </div>
        </div>
    );
}

export default MediaOverlay;