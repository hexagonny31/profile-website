import Gallery from "./Gallery"

// to contain multiple "Gallery" tags by using a loop.
function Section({header, footer, galleryProps = [], onPreview}) {
    return(
        <>
            <div>
                {header && <p>{header}</p>}
                <ul>
                    { galleryProps.map((item, index) => (
                    <Gallery key={index} {...item} onPreview={onPreview} />)) }
                </ul>
                {footer && <p>{footer}</p>}
            </div>
            <hr className="solid"/>
        </>
    );
}
export default Section