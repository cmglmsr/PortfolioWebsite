import './index.scss'
import {useState} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faAngleRight} from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const [item1] = useState(props.item1 != null);
    const [item2] = useState(props.item2 != null);
    const [item3] = useState(props.item3 != null);
    const [item4] = useState(props.item4 != null);
    return (
        <div className="ddMenu">
                    <div className="ddButton" onClick={ (e) => setIsActive(!isActive)}>
                    {!isActive && (<FontAwesomeIcon icon={faAngleDown}/>)}
                    {isActive && (<FontAwesomeIcon icon={faAngleUp}/>)}

                    <div className='title-zone'>{props.title}</div>
                    </div>
                    {isActive && (
                        <div className="ddMenu">
                            <div className='ddContent'>
                                {item1 && ( 
                                <div className="ddItem">
                                    {item1 && (<FontAwesomeIcon icon={faAngleRight}/>)}
                                    {" " + props.item1}
                                </div>)}
                                {item2 && (
                                <div className="ddItem">
                                    {item2 && (<FontAwesomeIcon icon={faAngleRight}/>)}
                                    {" " + props.item2}
                                </div>)}
                                {item3 && (
                                <div className="ddItem">
                                    {item3 && (<FontAwesomeIcon icon={faAngleRight}/>)}
                                    {" " + props.item3}
                                </div>)}
                                {item4 && (<div className="ddItem">
                                    {item4 && (<FontAwesomeIcon icon={faAngleRight}/>)}
                                    {" " + props.item4}
                                </div>)}
                            </div>
                        </div>   
                    )}
                </div>
    )
}

export default Dropdown;