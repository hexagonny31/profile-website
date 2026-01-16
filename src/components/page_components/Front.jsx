import frontMeme from '../../assets/memes/meme26.webp'
import Menu from '../Menu.jsx'
import '../../css/Front.css'

function Front() {
    return(
        <section className="am subclass">
            <div className="container-sm fade-up">
                <div className="am-content">
                    <h1 className="am-h text-lg">
                        Hello, Welcome to my profile!
                    </h1>
                    <img draggable="false" src={frontMeme} alt="Front meme here." width="40%"/>
                    <p className="text-md">
                        "This picture really encapsulates how I feel being an engineering student."
                    </p>
                    <Menu showIcon={[false, true, true]} link={["/hobbies", "/about", "/faq"]}
                        i={[null, "fas fa-info", "fas fa-message"]} label={["My Hobbies", "About Me", "FAQ"]}/>
                </div>
            </div>
        </section>
    );
}
export default Front