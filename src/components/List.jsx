// make a simple list of items. (paragraphs or links.)
function List({ items, title }) {
    return(
        <div className="simple-list">
            {title && <h3>{title}</h3>}
            <ul>
                { items.map((item, index) => (
                    <li key={index}>
                        <p>{item.label}</p>
                        {item.description && <p>({item.description})</p>}
                    </li>)) }
            </ul>
        </div>
    );
}

export default List