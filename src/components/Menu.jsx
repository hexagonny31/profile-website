import Button from './Button.jsx'
import '../css/Menu.css'

// a panel of buttons that directs you to a different path/external website.
function Menu({showIcon = [true, true, true], link, i, label}) {
    // "items" variable that defines a list of "Button" tags.
    const items = link.map((item, index) => (
        <li key={index}>
            <Button
                type="text"
                className={"tilt-hover"}
                showIcon={showIcon[index]}
                link={link[index]}
                i={i[index]}
                label={label[index]}
                ext={false}
            />
        </li>
    ));

    return(
        <div className="personal-menu fade-up">
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default Menu