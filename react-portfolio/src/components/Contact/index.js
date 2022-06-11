import './index.scss'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_pn7fzcm", "contact_form", refForm.current, 
        'KOpZ4vfgEkzWZSp4r').then(
            () => {
                alert('Message Sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message')
            }
        )
    }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <h2>
                    Fill in the form below to send an E-mail to my personal mail address.
                    I will reply to you as soon as possible.
                </h2>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="user_name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="user_email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea type="text" name="message" placeholder='Message' required/>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Contact