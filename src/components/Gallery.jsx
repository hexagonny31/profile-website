import '../css/Gallery.css'

// Gallery is an individual component that contains strings and other data.
function Gallery({className, link, img = "https://placehold.co/600x400", alt, desc = "Placeholder description.", onPreview}){
    const combinedClass = `gallery ${className || ""}`.trim();

    const handleClick = (e) => {
        e.preventDefault();
        if (onPreview) onPreview(img);
    };

    return(
        <li className={combinedClass}>
            <a draggable="false" target="_blank" rel="noopener noreferrer" href={link}>
                <div onClick={handleClick}>
                    <img draggable="false" src={img} alt={alt} width="600" height="400"/>
                </div>
                <div className="desc">{desc}</div>
            </a>
        </li>
    );
}

export default Gallery