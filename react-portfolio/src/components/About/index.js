import './index.scss'
import Bottom from '../../components/Bottom'
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
                <h2>
                    Education
                </h2>
                <h2>
                     Computer Skills
                </h2>
                <h2>
                    Languages
                </h2>
            </div>

            <div className="bottom-wrapper">
                <Bottom></Bottom>
            </div>
        </div>
    )
}

export default About