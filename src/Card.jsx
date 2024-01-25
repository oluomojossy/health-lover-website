import './Card.css'

function Card (props){
    return(
        <>
        <div className="cardBox">
            <img src={props.Img}/>
            <p className='CardP'>{props.P}</p> 
            <p className='CardP2'>{props.P2}</p>
        </div>

        </>
    )
}




export default Card