import { game, code, video, art } from '../../js/gallery.js';
import Section from '../Section.jsx';
import Menu from '../Menu.jsx';
import randGalleryEffect from '../../js/randGalleryEffect.js';
import MediaOverlay from '../MediaOverlay.jsx';
import { useState } from 'react';
import '../../css/Hobbies.css'

function Hobbies(){
    const [previewImage, setPreviewImage] = useState(null);

    const handlePreview = (imgSrc) => {
        setPreviewImage(imgSrc);
    };

    const handleClose = () => {
        setPreviewImage(null);
    };

    const {randVideo, randImage} = randGalleryEffect();

    return(
        <section className="hby">
            <div className="container-lg fade-up">
                <h1 className="hby-h text-lg">Hobbies are important.</h1>
                <div className="hby-content">
                    <Section
                        header="I game. Any kind of free game I could possibly play on my 5yo laptop."
                        footer="I play both casual and hardcore games. From farming games like Stardew to PvE games like the Dark Souls series."
                        galleryProps={[
                            {img: game.game1, desc: "High-school bros messing around in Minecraft during class."},
                            {img: game.game2, desc: "Super fun discontinued game called HELLMET. Playing with a full lobby of randoms."},
                            {img: game.game3, desc: "An MMORPG game called Black Desert with unique character cutomizations."},
                            {img: game.game4, desc: "A funny screenshot of an enemy pyro from Team Fortress 2 (I main pyro)."}
                        ]}
                        onPreview={handlePreview}
                    />
                    <Section
                        header="I learn programming. I'm currently learning web development in hopes to land a job in the future."
                        footer="Still not very confident about my programming skills but I make sure to create something, even if its very simple."
                        galleryProps={[
                            {img: "https://media.tenor.com/Kz5Y-zNjUZQAAAAM/gibberish.gif", desc: "To be honest, programming can be a frustrating process. But, I find it rewarding."},
                            {img: code.code1, desc: <>I made this website completely from scratch with the help of
                                                <a target="_blank" href="https://www.w3schools.com/"> W3Schools</a>.</>},
                            {img: code.code2, desc: "Learning OOP with Java. One honest opinion about Java: it's confusing as heck."},
                            {img: code.code3, desc: "I created a utility project mainly focuses on console/terminal displays."}
                        ]}
                        onPreview={handlePreview}
                    />
                    <Section
                        header="I create YouTube videos. To keep my creativity on check."
                        footer={<>Mostly, I edit gaming videos that are short, right about 10 minutes maximum. This started when my classmate decided to edit gameplay recordings, and it was the funniest
                                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Eaun0gZLr6E"> video</a> I've ever watched.</>}
                        galleryProps={[
                            {link: randVideo.url, img: randVideo.thumbnail, desc: randVideo.desc},
                            {img: randImage.url, desc: "This is one of the perspectives of a video creator. They see it as parts or sections."},
                            {img: video.video1, desc: "A screenshot of manually adding subtitles to a long-form video."}
                        ]}
                        onPreview={handlePreview}
                    />
                    <Section
                        header="I watch anime whenever I get bored of gaming. If you're curious about my recommendations, here are my top five picks. While they may seem generous, the stories are truly praiseworthy."
                        galleryProps={[
                            {
                                className: "height-ignore", link: "https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto?q=apothecary&cat=anime",
                                img: "https://cdn.myanimelist.net/images/anime/1708/138033.jpg", desc: "The Apothecary Diaries"
                            },
                            {
                                className: "height-ignore", link: "https://myanimelist.net/anime/37430/Tensei_shitara_Slime_Datta_Ken",
                                img: "https://cdn.myanimelist.net/images/anime/1033/118296.jpg", desc: "Reincaranted as a slime"
                            },
                            {
                                className: "height-ignore", link: "https://myanimelist.net/anime/52347/Shangri-La_Frontier__Kusoge_Hunter_Kamige_ni_Idoman_to_su",
                                img: "https://cdn.myanimelist.net/images/anime/1500/139931.jpg", desc: "Shangri-La Frontier"
                            },
                            {
                                className: "height-ignore", link: "https://myanimelist.net/anime/32615/Youjo_Senki",
                                img: "https://cdn.myanimelist.net/images/anime/5/82890.jpg", desc: "Saga of Tanya the Evil"
                            },
                            {
                                className: "height-ignore", link: "https://myanimelist.net/anime/33352/Violet_Evergarden?q=violet&cat=anime",
                                img: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg", desc: "Violet Evergarden"
                            }
                        ]}
                        onPreview={handlePreview}
                    />
                    <Section
                        header="I sometimes do simple art of my original character (Mostly for PFP)."
                        galleryProps={[
                            {className: "height-ignore", img: art.art1, desc: "Kumiko ...san?"},
                            {className: "height-ignore", img: art.art2, desc: "Black background"},
                            {className: "height-ignore", img: art.art3, desc: "I sent this to my professor and it worked."},
                            {className: "height-ignore", img: art.art4, desc: "She can't find her glasses..."},
                            {className: "height-ignore", img: art.art5, desc: "I tried the manga artstyle. Damn, it's so difficult. (Not my OC)"}
                        ]}
                        onPreview={handlePreview}
                    />
                </div>
                <Menu
                    link={["/", "/about", "/faq"]}
                    i={["fas fa-sticky-note", "fas fa-info", "fas fa-message"]}
                    label={["Go Back", "About Me", "FAQ"]}/>
            </div>

            <MediaOverlay visible={!!previewImage} src={previewImage} onClose={handleClose} />
        </section>
    );
}
export default Hobbies