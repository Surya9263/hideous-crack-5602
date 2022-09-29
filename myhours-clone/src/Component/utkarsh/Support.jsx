import supty from "./Support.module.css";

export default function Support() {
  return (
    <>
    <div>



    <div className={supty.suheading}>We're here</div>
    <div className={supty.susubheading}>We typically respond in less than 24 hours on business days. Contact us via email, live chat or the form below.</div>
    <div className={supty.sulastheading}><span ><a href=""> Read our help guides</a></span> or send us a message to get detailed help.</div>



    </div>
     
      <iframe
       className={supty.youtube}
        width="860"
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
    </>
  );
}
