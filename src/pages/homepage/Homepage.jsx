import React from "react";
import Directory from "../../directory/directory.component";
import "./Homepage.styles.scss";
// flex use --> https://css-tricks.com/snippets/css/a-guide-to-flexbox/
export default function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="button">
          <button className="trending-button">Trending</button>
          <button className="archieve-button">Archieve</button>
          <button className="contactpage-button">Contact Page</button>
        </div>
      </nav>
      

      <Directory />
    </div>
  );
}
