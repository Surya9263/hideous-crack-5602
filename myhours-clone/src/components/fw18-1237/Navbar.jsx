import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {

  const [active, setActive] = useState(false)
  const [size, setsize] = useState(window.innerWidth)
  const [screen, setscreen] = useState(window.innerHeight)
  console.log(screen)

  const checksize = () => {
   setsize(window.innerWidth)
   if(size >970 )
   {
    setActive(false)
   }
  //  if(size<970 )
  //  {
  //   setActive(true)
  //  }
  }

  useEffect(()=>{
    window.addEventListener("resize",checksize);

    return () => {
        window.removeEventListener("resize",checksize)
    }
  },[size])

  return (
    <>
      <nav className={styles.nav1}>
        <div>
          <Link to="/"> <img className={styles.img1} src="myhourslogo.png" alt="#" /></Link>
        </div>

        <ul className={styles.ul1}>
          <li className={styles.uli} >
            <Link to="how-it-works">How it works</Link>
          </li>
          <li className={styles.uli}>
            <Link to="use-cases">Use cases</Link>
          </li>
          <li className={styles.uli}>
            <Link to="pricing">Pricing</Link>
          </li>
          <li className={styles.uli}>
            <Link to="support">Support</Link>
          </li>
          <li className={styles.uli}>
            <Link to="login">Sign in</Link>
          </li>
          <li className={styles.uli}>
            <Link to="signup">
             
              <button className={styles.btn}>Get My Hours Free</button>
            </Link>
          </li>
        </ul>

        <div onClick={()=>setActive(!active)} className={styles.burger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
     <div  className={styles.dummy}>

     </div>
  
  
    {
      (size > 1200) == false &&  <div 
      style={{transform:active? "translateY(0%)":"translateY(-100%)"}}
      className={styles.dropdown}>
        <p className={styles.para}>
          <Link onClick={()=>setActive(!active)} to="how-it-works">How it works</Link>
        </p>

        <p className={styles.para}>
          <Link onClick={()=>setActive(!active)} to="use-cases">Use cases</Link>
        </p>

        <p className={styles.para}>
          <Link onClick={()=>setActive(!active)} to="pricing" >Pricing</Link>
        </p>

        <p className={styles.para} >
          <Link onClick={()=>setActive(!active)} to="support">Support</Link>
        </p>

        <p className={styles.para}>
          <Link onClick={()=>setActive(!active)} to="login">Sign in</Link>
        </p>

        <p className={styles.buttonpara}>
          <Link onClick={()=>setActive(!active)} to="signup">
            <button className={styles.btndropdown}>Get My Hours Free</button>
          </Link>
        </p>
      </div>

    }
    
      
      
    </>
  );
}
