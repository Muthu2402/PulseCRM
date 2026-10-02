function Logo(){
     return(
       <span className="logo">
          <svg viewBox="0 0 40 20" width="40" height="20" aria-hidden="true">
             <path className="logo-line" pathLength="1" 
             d="M0 10 H10 L14 2 L19 18 L23 6 L26 10 H40"/>
            
          </svg>
          <span className="logo-word">PulseCRM</span>
       </span>
    )
}
export default Logo;