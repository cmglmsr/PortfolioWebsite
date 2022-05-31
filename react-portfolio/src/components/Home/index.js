import './index.scss';
import LogoTitle from '../../assets/images/logo-s.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br /> I am
                
                <img src={LogoTitle} alt="developer" />

                Cem Gulumser
                </h1>

                <h2>
                    Imma real G / Proffessinoal Street N
                </h2>

                <Link to="/contact" className='flat-button'> CONTACT ME</Link>

            </div>

        </div>
    );
}

export default Home;