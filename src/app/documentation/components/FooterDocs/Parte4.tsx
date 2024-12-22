import React from "react";
import Link from "next/link";

function Parte4() {
  return (
    <div>
      <h3>More</h3>
      <ul>
        <li>
          <Link href="/documentation/about-us" passHref>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/documentation/assistance/help-center" passHref>
            Help Center
          </Link>
        </li>
        <li>
          <Link href="/documentation/assistance/terms-and-conditions" passHref>
            Terms and Conditions
          </Link>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Parte4;
