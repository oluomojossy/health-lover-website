import './Program.css'
import Card from './Card'

function Program(){

    return(

        <>
        <div className="ProDiv">

        <div className="ProHr"> 
            <p>Main Program</p>
            <hr/>
        </div>

       <div className="CardDiv">
       <Card Img="./src/Image/Health-image.jpg" P="Lecture" P2= "The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."/>
       <Card Img="./src/Image/good-health-vector.jpg" P="Health Exhibition" P2="The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."/>
       <Card Img="./src/Image/Health-Wealth.jpg" P="Forum" P2="The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."/>
       <Card Img="./src/Image/Know-your-health-status.jpg" P="Workshop" P2="The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."/>
       <Card Img="./src/Image/Listen-to-your-heart.jpg" P="Health Ignite" P2="The inaugural Conference on Public Health in Africa (CPHIA 2021) will put a spotlight on emergency health response in Africa."/>
       </div>

       <p className='PT'>SEE THE WHOLE PROGRAM</p>
        </div>
        
        
        </>
    )
}





export default Program