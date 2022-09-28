import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <div>
          <img src="footerlogo.png" alt="" />
        </div>
        <div>
          <p>Product</p>

          <ul>
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
          <p>Resources</p>
          <ul>
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
          <p>Use Cases</p>
          <ul>
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
          <p>Integrations</p>
          <ul>
            <li>
              <Link to="#">QuickBooks</Link>
            </li>
            <li>
              <Link to="#">Zapier</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Social</p>
          <ul>
            <li>
              <a  target="_blank" href="https://www.facebook.com/myHoursTeam/">Facebook</a>
            </li>
            <li>
               <a target="_blank" href="https://twitter.com/MyHoursTeam">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
