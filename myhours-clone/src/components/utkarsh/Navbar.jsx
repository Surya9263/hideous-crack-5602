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
          <img className={styles.img1} src="myhourslogo.png" alt="#" />
        </div>

        <ul className={styles.ul1}>
          <li className={styles.uli} >
            <Link>How it works</Link>
          </li>
          <li className={styles.uli}>
            <Link>Use cases</Link>
          </li>
          <li className={styles.uli}>
            <Link>Pricing</Link>
          </li>
          <li className={styles.uli}>
            <Link>Support</Link>
          </li>
          <li className={styles.uli}>
            <Link>Sign in</Link>
          </li>
          <li className={styles.uli}>
            <Link>
              {" "}
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
          <Link to="#">How it works</Link>
        </p>

        <p className={styles.para}>
          <Link>Use cases</Link>
        </p>

        <p className={styles.para}>
          <Link>Pricing</Link>
        </p>

        <p className={styles.para} >
          <Link>Support</Link>
        </p>

        <p className={styles.para}>
          <Link>Sign in</Link>
        </p>

        <p className={styles.buttonpara}>
          <Link>
            <button className={styles.btndropdown}>Get My Hours Free</button>
          </Link>
        </p>
      </div>

    }
    
      
      
    </>
  );
}
