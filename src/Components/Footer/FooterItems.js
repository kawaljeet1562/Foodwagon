import React from "react";
import Contact from "./Contact";
import CopyRight from "./CopyRight";
import "./FooterItems.css";
const FooterItems = () => {
  return (
    <div className="Footer-bg">
      <div className="footer-conatiner">
        <h2>Our top cities</h2>
        <div className="data">
          <div>
            <ol class="data-1">
              <li> Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
              <li></li>
            </ol>
          </div>
          <ol class="data-1">
            <li> Los Angeles</li>
            <li>Washington DC</li>
            <li>Seattle</li>
            <li>Portland</li>
            <li>Nashville</li>
            <li></li>
          </ol>

          <div>
            <ol class="data-1">
              <li>New York City </li>
              <li>Orange County</li>
              <li>Atlanta</li>
              <li>Charlotte</li>
              <li>Denver</li>
              <li></li>
            </ol>
          </div>
          <div>
            <ol class="data-1">
              <li>Chicago</li>
              <li>Phoenix</li>
              <li>Las Vegas</li>
              <li>Sacramento</li>
              <li>Oklahoma City</li>
              <li></li>
            </ol>
          </div>
          <div>
            <ol class="data-1">
              <li>Columbus</li>
              <li>New Mexico</li>
              <li>Albuquerque</li>
              <li>Sacramento</li>
              <li>New Orleans </li>
              <li></li>
            </ol>
          </div>
        </div>
        <hr></hr>
        {/* /*******secnd sec */}
        <div className="contact-sec">
          <div className="company-contact">
            <table className="customers">
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Legal</th>
              </tr>
              <tr>
                <td>About us</td>
                <td>Team</td>
                <td>Careers</td>
                <td>Blog</td>
              </tr>
              <tr>
                <td>Help & Support</td>
                <td>Partner with us </td>
                <td>Ride with us</td>
              </tr>
              <tr>
                <td>Terms & Conditions</td>
                <td>Refund & Cancellation</td>
                <td>Privacy Policy</td>
                <td>Cookie Policy</td>
              </tr>
            </table>
          </div>

          <div>
            <Contact />
          </div>
        </div>
        <hr></hr>
        <CopyRight />
      </div>
    </div>
  );
};

export default FooterItems;
