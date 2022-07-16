import './index.scss'
import rpaper from  '../../assets/downloads/Detection_of_Face_Morph_Attacks_on_Facial_ID_Verification_Systems-M.Cem_Gulumser.pdf'

const Research = () => {
    
    return (

        <div className="container research-page">
            <div className="text-zone">
                <h1>
                    Detection of Face Morph Attacks on Facial ID Verification Systems
                </h1>
                <h2>Abstract</h2>
                <p>Biometric identity verification is employed widely around the world by major companies and governments to ensure social security. 
                    With the help of modern face recognition technology, it is much more convenient to confirm the identity of people. In recent years, 
                    however, criminally minded individuals devised a technique to hide their identity without being detected by face recognition. 
                    This technique is called “face morphing”, where the facial image of two or more people are combined so that the resulting image looks similar 
                    to both subjects. This causes the exploitation of certain governmental resources by wrong individuals, illicit international migration and invasion 
                    of privacy. In this work, the vulnerability of face recognition systems are analyzed, and several face morphing algorithms are compared for their likelihood 
                    of detection. 
                </p>
                <a href={rpaper} download>
                    Download Full Paper From Here
                </a>
            </div>
        </div>

    );
}

export default Research
