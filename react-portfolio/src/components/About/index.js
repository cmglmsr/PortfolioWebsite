import './index.scss'
import Bottom from '../../components/Bottom'
import Dropdown from '../../components/Dropdown'
import myImage from '../../assets/images/me.jpg'

const About = () =>  {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <h2>
                    My full name is Mustafa Cem Gülümser. I am a sophomore Computer Science Student
                    from Bilkent University, Turkey. I was born in Ankara and I currently live in Izmir.
                    I have a very curious nature and I am always open to learning. I really like watching 
                    and playing basketball. 
                    <br/><br/>
                    I wish to pursue a career in cybersecurity after university, but of course it is flexible.
                    Life is usually unexpected and I am willing to take every opportunity life may throw at me. 
                    Currently I spend most of my free time on project-based learning in cybersecurity, algorithms 
                    and frontend web development... And of course I watch the NBA finals.
                    <br/><br/>
                    See my virtual CV below.
                </h2>
            </div>

            <div className="image-zone">
                <img src={myImage} alt="Me and Luna!"/>
            </div>

            <div className="virtual-cv">
                <h1>
                    Virtual CV
                </h1>
                <div className="dropdownmenu">
                    <Dropdown title="Education" item1="American Collegiate Institute: 2016-2020" item2="Bilkent University: 2020 - Present"/>
                    <Dropdown title="Computer Skills" item1="Intermediate C++ and Java Coding" item2="Python for Cybersecurity / Ethical Hacking + Experience with Kali Linux and Network Libraries" 
                    item3="Frontend Development with React.js, HTML and SCSS" item4="Extensive Experience with Microsoft Word, Microsoft Excel and Google Docs"/>
                    <Dropdown title="Languages" item1="C1 English: IELTS 8.0" item2="A2 German: Goethe Zertifikat A2"/>
                    <Dropdown title="Projects & Research" item1="Health and Education Foundation Project Competition Winner - Rainwater Harvest Project: 2018" 
                    item2="Android Calendar Application - Calendy: Coded in Android Studio with Java and XML" item3="Research Paper - Detection of Face Morph Attacks on Facial ID Verification Systems: 2021"/>
                </div>
            </div>

            <div className="bottom-wrapper">
                <Bottom></Bottom>
            </div>
        </div>
    )
}

export default About