import './index.scss'
import {useState} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    const [item1] = useState(props.item1 != null);
    const [item2] = useState(props.item2 != null);
    const [item3] = useState(props.item3 != null);
    return (
        <div className="ddMenu">
                    <div className="ddButton" onClick={ (e) => setIsActive(!isActive)}>
                    <FontAwesomeIcon icon={faCaretDown}/>
                    <div className='title-zone'>{props.title}</div>
                    </div>
                    {isActive && (
                        <div className="ddMenu">
                            <div className='ddContent'>
                                {item1 && (
                                <div className="ddItem">
                                    {props.item1}
                                </div>)}
                                {item2 && (
                                <div className="ddItem">
                                    {props.item2}
                                </div>)}
                                {item3 && (
                                <div className="ddItem">
                                    {props.item3}
                                </div>)}
                            </div>
                        </div>   
                    )}
                </div>
    )
}

export default Dropdown;