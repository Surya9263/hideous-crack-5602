import supty from "./Support.module.css";

export default function Support() {
  return (
    <div style={{width:"80%" ,margin:"auto"}}>
    <div style={{width:"100%" ,margin:"3px",textAlign:"left"}}>



    <div className={supty.suheading}> <p >We're here</p> </div> <br /> <br />
    <div className={supty.susubheading}>We typically respond in less than 24 hours on business days. Contact us via email, live chat or the form below.</div> <br />
    <div className={supty.sulastheading}><span ><a href=""> Read our help guides</a></span> or send us a message to get detailed help.</div>



    </div>
       <br /><br />
      <iframe
       className={supty.youtube}
        width="760"
        height="440"
        src="https://www.youtube.com/embed/PqXO5AbUWpA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>


      <div>
        <div className={supty.susubheading} >What do you need help with?</div>
        

      </div>
    </div>
  );
}
