import Spoiler from "../Spoiler.jsx";
import Menu from "../Menu.jsx";
import "../../css/Questions.css"

function Questions() {
    return(
        <section className="faq">
            <div className="container-sm fade-up">
                <h1 className="text-lg">Frequently Asked Questions</h1>
                <Spoiler title="What are the editing software programs you use?">
                    <ul className="children">
                        <li>
                            <p>
                                For Photo Editing, I use a website called Pixlr. Though, it has subscriptions but it's a lightweight alternative.
                            </p>
                        </li>
                        <li>
                            <p>
                                For Video Editing, I use Filmora. It has a clean and user-friendly UI.
                            </p>
                        </li>
                    </ul>
                </Spoiler>
                <Spoiler title="What programming languge do you mainly use?">
                    <p>
                        I mainly use C++ for my school projects.
                    </p>
                </Spoiler>
                <Spoiler title="What's your advice on staring out on programming?">
                    <p>
                        When starting out in programming, the best way to get into it is by building projects and discovering your own preferences — things that keep you motivated and help you learn continuously.
                    </p>
                </Spoiler>
                <Spoiler title="How do you create your website?">
                    <p>
                        I started from scratch but a few days later, I moved to ReactJS for easier development.
                    </p>
                </Spoiler>
                <Spoiler title="Why did you learn Web Development?">
                    <p>
                        I started learning web development because it's one of the requirements for my upcoming second year in college.
                    </p>
                </Spoiler>
                <Spoiler>
                    <p>
                        Placeholder children.
                    </p>
                </Spoiler>
                <Spoiler>
                    <p>
                        Placeholder children.
                    </p>
                </Spoiler>
                <Menu
                    showIcon={[true, false, true]}
                    link={["/", "/hobbies", "/about"]}
                    i={["fas fa-sticky-note", "", "fas fa-info"]}
                    label={["Go Back", "My Hobbies", "About Me"]}/>
            </div>
        </section>
    );
}
export default Questions