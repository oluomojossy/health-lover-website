import "./Header.css"

function Header (){
    return(

        <>
         <div className="head1">
      <img src='./src/Image/facebook.png'/>
      <img src='/src/Image/twitter.png'/>
      <p>English</p>
      <p>My page</p>
      <p>Logout</p>
    </div>

        <div className="head2">
        <div className="logo">
            <img src="./src/Image/cdc-img.jpg"/>
        </div>
        <div className="logoText">
            <p>About</p>
            <p>Program</p>
            <p>Join</p>
            <p>sponsor</p>
            <p>News</p>
        </div>
        <button>ACD campaign</button> 

        </div>
        
        
        
        
        </>
    )
}





export default Header