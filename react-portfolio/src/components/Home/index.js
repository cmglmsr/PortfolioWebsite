import './index.scss';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photo1 from '../../assets/images/ph1.png' 
import photo2 from '../../assets/images/ph2.jpg' 
import photo3 from '../../assets/images/pg.jpg' 
import Bottom from '../Bottom'


const Home = () => {

    const SliderData = [
        {image: photo1},
        {image: photo2},
        {image: photo3}
    ]
    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent( current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1)
    };
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1 className='header1'>
                    31, <br /> I am
                    Cem Gülümser
                </h1>

                <h2>
                    Welcome to my website where I talk a bit about myself, 
                    share my contact information, present my research and other
                    interesting stuff. See the sidebar to navigate through the 
                    site, or use the buttons below.
                </h2>

                <Link to="/contact" className='flat-button'> Contact Me</Link>
                <Link to="/about" className='flat-button2'> About Me</Link>
                <Link to="/research" className='flat-button3'> Researches</Link>

            </div>

            <div className="slide-zone">
                <FontAwesomeIcon icon={faArrowCircleLeft} className="left-arrow" onClick={prevSlide}/>
                <FontAwesomeIcon icon={faArrowCircleRight} className="right-arrow" onClick={nextSlide}/>
                { SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt="slide" className="image"/>)}
                        </div>
                    )
                })}
            </div>

            <div className="text-zone2">
                <h1>
                    What I have been up to recently...
                </h1>
                <h2 className="header2">
                    Recently I have been working on the design of this website as well as learning JavaScript and SCSS.
                    In addition to those, I am taking a course on Python programming and cybersecurity. Aside from these,
                    I spend time with my family, friends, and my precious dog Luna. I always find time to have fun as well! 
                </h2>
                <br /> <br /> <br /> <br /> <br /> <br />
            </div>

            <div className='bottom-wrapper'>
                <Bottom/>
            </div>
        </div>
    );
}

export default Home;