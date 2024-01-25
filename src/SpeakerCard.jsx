import './SpeakerCard.css'

function SpeakerCard (props){
    return(
        <>
        <div className="maindiv">

            <div className="imgIndex">
                <img className='checkbox' src='./src/Image/checkbox.jpg'/>
                <img className='photo' src={props.Image}/>
            </div>
            <div className="textIndex">
                <p className='textP'>Dr. Amadou-Sall</p>
                <p className='textP2'>Dr Amadou A Sall is the CEO of Institut Pasteur de Dakar in Senegal.</p>
                <hr/>
                <p className='textP3'>Director of the WHO Collaborating Center for Arboviruses and Viral Hemorrhagic Fever. He has been chairman of the Global Outbreak Alert and Response Network and a member of the Coalition for Epidemic Preparedness and Innovation (CEPI) Scientific Advisory Board.</p>
            </div>

        </div>
        
        
        </>



    )
}



export default SpeakerCard