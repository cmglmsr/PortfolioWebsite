import './index.scss'
import Bottom from '../../components/Bottom'
import Dropdown from '../../components/Dropdown'
import myImage from '../../assets/images/me.jpg'
import az700 from '../../assets/images/az.png'
import aci from '../../assets/images/aci.png'
import bilk from '../../assets/images/bilk.png'



const About = () =>  {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <h2>
                    My full name is Mustafa Cem Gülümser. I am a junior Computer Science Student
                    from Bilkent University, Turkey. I was born in Ankara and I currently live in Izmir.
                    I have a very curious nature and I am always open to learning. I really like watching 
                    and playing basketball. 
                    <br/><br/>
                    I wish to pursue a career in cybersecurity after university, but of course it is flexible.
                    Life is usually unexpected and I am willing to take every opportunity life may throw at me. 
                    Currently I spend most of my free time on project-based learning in cybersecurity, algorithms 
                    and frontend web development.
                    <br/><br/>
                    See some of my achievements and virtual CV below.
                </h2>
            </div>

            <div className="image-zone">
                <img src={myImage} alt="Me and Luna!"/>
            </div>

            <div className="display-zone">
                <div className="display-zone-text">
                    <div className='display-item'>
                        <h1>Bilkent University High Honor Student</h1>
                        <p> High Honor Student award is given to distinct students who perform much above the expected standards.
                            I was given this award for three semesters since I entered the university, and was awarded Honor Student 
                            one semester. In the university webpage, it is defined as "Students achieving distinction by obtaining 
                            a semester GPA of 3.00 to 3.49 while carrying at least a minimum course load and having a CGPA of 2.00 
                            or higher are designated "Honor" students on the transcript for that semester. Those achieving a GPA of 
                            3.50 or above, under the same conditions, are designated "High Honor" students." Click this link for full
                            details on achieving a High Honor Student status in Bilkent University. <br/><br/>
                            <a href="https://catalog.bilkent.edu.tr/general/standing.html"> Go to webpage {'>'}{'>'} </a>
                        </p>
                        <img src={bilk} alt=''></img>
                    </div>
                    <div className='display-item-mid'>
                        <h1>Microsoft Certified Azure Network Engineer Associate</h1>
                        <p> While doing my internship at SunExpress as a network and cybersecurity engineer, I also found chance to
                            learn about the fundamentals of cloud computing, networking and security. One of the objectives we were
                            working towards was to migrate the on-premises resources to cloud. Working on this task allowed me to learn
                            many things about Microsoft Azure. I wanted to further my knowledge on this topic by working on it myself and
                            apply for the certification exam of Microsoft. With the help of my experienced supervisors, I succesfully passed
                            the exam and earned the Azure Network Engineer Associate certification. I am open to working as a cloud network 
                            engineer or cloud solutions architect!<br/><br/>
                            <a href="https://www.credly.com/badges/cadd7d0b-8c5b-428a-8b06-de05677f0980/public_url"> See my certification {'>'}{'>'} </a>
                        </p>
                        <img src={az700} alt=''></img>
                    </div>
                    <div className='display-item'>
                        <h1>American Collegiate Institute IBDP & 4th in Academic Standing</h1>
                        <p> I graduated from American Collegiate Institute with an International Baccalaureate (IB) Math-Science diploma as well as a Turkish High
                            School diploma. I was ranked the 4th among all students in my school, the 3rd among all IB students and the 2nd among the IB Math-Science
                            students. In the course of my high school education, I was awarded merit scholarships two times for being in top three in academic standing.
                            If you wish to read more about the IB Diploma Programme offered by American Collegiate Institute, click the link below. 
                            <br/><br/>
                            <a href="https://www.aci.k12.tr/en/Icerik/ib-diploma-programi/410/"> Go to webpage {'>'}{'>'} </a>
                        </p>
                        <img src={aci} alt=''></img>
                    </div>
                </div>
            </div>

            <div className="virtual-cv">
                <h1>
                    Virtual CV
                </h1>
                <div className="dropdownmenu">
                    <Dropdown title="Education" item1="American Collegiate Institute: 2016-2020" item2="Bilkent University: 2020 - Present"/>
                    <Dropdown title="Work Experience" item1="SunExpress - Networking & Cybersecurity Intern: 2022" item2="Kocaeli Derince State Hospital - Biochemistry Lab Intern: 2018"/>
                    <Dropdown title="Computer Skills" item1="Intermediate C++ and Java Coding" item2="Python for Networking / Automation / Cybersecurity / Ethical Hacking + Experience with Kali Linux and Network Libraries" 
                    item3="Frontend Development with React.js, HTML and SCSS" item4="Extensive Experience with Microsoft Azure, Microsoft Word, Microsoft Excel and Google Docs"/>
                    <Dropdown title="Languages" item1="C1 English: IELTS 8.0" item2="A2 German: Goethe Zertifikat A2"/>
                    <Dropdown title="Projects & Research" item1="Health and Education Foundation Project Competition Winner - Rainwater Harvest Project: 2018" 
                    item2="Android Calendar Application - Calendy: Coded in Android Studio with Java and XML" item3="Research Paper - Detection of Face Morph Attacks on Facial ID Verification Systems: 2021"/>
                    <Dropdown title="Community Involvement & Leadership" item1="Red Cross Member: 2017-2019" item2="Animal Shelter Club Member: 2017-2020" item3="MUN Club Executive Member: 2018-2020"
                    item4="Tubitak Project Club Co-President: 2019-2020"/>
                </div>
            </div>

            <div className="bottom-wrapper">
                <Bottom></Bottom>
            </div>
        </div>
    )
}

export default About