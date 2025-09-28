import "../../css/Resume.css";
import Menu from '../Menu.jsx';
import List from "../List.jsx";
import pfp from "../../assets/portrait-of-me.webp";

function Resume() {
    return(
        <section className="resume">
            <div className="container-xs fade-up">
                <ul className="resume-header">
                    <li>
                        <img className="pfp" draggable="false" src={pfp} alt="My Current PFP."
                        width="120" height="120"/>
                    </li>
                    <li>
                        <p className="username rh">Jascha Olea</p>
                        <p>A Computer Engineering Student.</p>
                        <p>Formerly worked at CHRMO in Iriga City Hall.</p>
                    </li>
                </ul>
                <hr className="solid"/>
                <p className="greet">Hello! I'm hexagonny, an engineering student. I...</p>
                <List
                    items={[
                        {label: "learn basic networking,"},
                        {label: "create goofy gameplay videos,"},
                        {label: "learn frontend development, and"},
                        {label: "create small c++ projects!"}
                    ]} />
                <List
                    title="Education"
                    items={[
                        {label: "Camarines Sur Polytechnic Colleges (CSPC)", description: "2024 - Current"},
                        {label: "AMA Computer Learning Center (ACLC)", description: "2022 - 2024"},
                        {label: "University of Saint Anthony (USANT)", description: "2018 - 2022"}
                    ]} />
                <List
                    title="Certificates & Trainings"
                    items={[
                        {label: "National Certificate 2", description: "13/10/2023 to 12/10/2028 - Computer System Servicing"},
                        {label: "Virtual Career Setting for Grade 10 Students", description: "1/6/2022 - University of Saint Anthony"}
                    ]} />
                <List
                    title="Other Interests"
                    items={[
                        {label: "Romcom anime"},
                        {label: "Word processing"},
                        {label: "Rock music"},
                        {label: "Data analysis"}
                    ]}/>
                <hr className="solid"/>
                <Menu
                    showIcon={[true, false, true]}
                    link={["/", "/hobbies", "/faq"]}
                    i={["fas fa-sticky-note", "", "fas fa-message"]}
                    label={["Go Back", "My Hobbies", "FAQ"]}/>
            </div>
        </section>
    );
}

export default Resume