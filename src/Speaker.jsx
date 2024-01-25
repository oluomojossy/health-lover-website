import './Speaker.css'
import SpeakerCard from './SpeakerCard'

function Speaker () {
    return(
        <>
        <div className="MainBody">
            <div className="FH">
                <p>Featured speakers</p> 
                <hr/>
            </div>
        <div className="mainSpeakerD">
            <div className="firstD">
            <SpeakerCard Image="./src/Image/1.jpg"/>
            <SpeakerCard Image="./src/Image/2.jpg"/>
            </div>
            <div className="firstD">
            <SpeakerCard Image="./src/Image/3.jpg"/>
            <SpeakerCard Image="./src/Image/4.jpg"/>
            </div>
            <div className="firstD">
            <SpeakerCard Image="./src/Image/5.jpg"/>
            <SpeakerCard Image="./src/Image/6.jpg"/>
            </div>

        </div>
            
        </div>
        
        
        </>
    )
}






export default Speaker