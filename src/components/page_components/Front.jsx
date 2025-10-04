import frontMeme from '../../assets/memes/suicide1.jpg'
import Menu from '../Menu.jsx'
import '../../css/Front.css'

function Front() {
    return(
        <section className="am">
            <div className="container-sm fade-up">
                <div className="am-content">
                    <h1 className="am-h text-lg">
                        Hello, Welcome to my profile!
                    </h1>
                    <img draggable="false" src={frontMeme} alt="Front meme here." width="40%"/>
                    <p className="text-md">
                        "This picture really encapsulates how I feel being an engineering student."
                    </p>
                    <Menu showIcon={[false, true, true]} link={["/hobbies", "/about", "/faq", "/6D63737461636B73"]}
                        i={[null, "fas fa-info", "fas fa-message", null]} label={["My Hobbies", "About Me", "FAQ", "test"]}/>
                </div>
            </div>
        </section>
    );
}
export default Front