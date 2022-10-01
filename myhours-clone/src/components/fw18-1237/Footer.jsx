import fstyles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={fstyles.uparent}>
      <div className={fstyles.ugridcontainer}>
        <div>
          <img className={fstyles.ufooterlogo} src="footerlogo.png" alt="" />
          <p className={fstyles.ulogopara} > All rights reserved. </p>
          <p className={fstyles.ulogopara} >© 2022 My Hours.</p>
        </div>
        <div>
          <p className={fstyles.unheading}>Product</p>

          <ul className={fstyles.unul}>
            <li>
              <Link to="#">How it works</Link>
            </li>
            <li>
              <Link to="#">Features</Link>
            </li>
            <li>
              <Link to="#">Mobile app</Link>
            </li>
            <li>
              <Link to="#">Use case collection</Link>
            </li>
            <li>
              <Link to="#">Pricing</Link>
            </li>
            <li>
              <Link to="#">Guides</Link>
            </li>
            <li>
              <Link to="#">Customer Reviews</Link>
            </li>
            <li>
              <Link to="#">Start Free</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={fstyles.unheading}>Resources</p>
          <ul className={fstyles.unul}>
            <li>
              <Link to="#">Time Tracking Library</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Terms of Use</Link>
            </li>
            <li>
              <Link to="#">Sitemap</Link>
            </li>
            <li>
              <Link to="#">Free Timesheet templates</Link>
            </li>
            <li>
              <Link to="#">Time Management Apps</Link>
            </li>
            <li>
              <Link to="#">Best Time Tracking Apps of 2022</Link>
            </li>
            <li>
              <Link to="#">Free Time Card Calculator</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={fstyles.unheading}>Use Cases</p>
          <ul className={fstyles.unul}>
            <li>
              <Link to="#">Project billing</Link>
            </li>
            <li>
              <Link to="#">Time reports and Project analytics</Link>
            </li>
            <li>
              <Link to="#">Attendance and Absence tracking</Link>
            </li>
            <li>
              <Link to="#">Expense tracking</Link>
            </li>
            <li>
              <Link to="#">Calculating project profitability</Link>
            </li>
            <li>
              <Link to="#">Timesheet time tracking</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={fstyles.unheading}>Integrations</p>
          <ul className={fstyles.unul}>
            <li>
              <Link to="#">QuickBooks</Link>
            </li>
            <li>
              <Link to="#">Zapier</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={fstyles.unheading}>Social</p>
          <ul className={fstyles.unul}>
            <li>
              <a target="_blank" href="https://www.facebook.com/myHoursTeam/">
                Facebook
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/MyHoursTeam">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={fstyles.ubottomfooter}>
        
          Looking for employee attendance and absence tracking? Visit<span className={fstyles.ubottomfooterspan}><a target={"_blank"} href="https://allhours.com/?_ga=2.149193590.1544138198.1664255783-1214335725.1662180711">All Hours.</a> </span>
        
      </div>
    </div>
  );
}
//17.5
// 700
