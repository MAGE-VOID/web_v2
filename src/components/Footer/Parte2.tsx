import React from "react";
import Link from "next/link";

function Parte2() {
  return (
    <div>
      <h3>
        <Link href="/documentation/contents" passHref>
          How To Start
        </Link>
      </h3>
      <ul>
        <li>
          <Link href="/documentation/contents/what-is-forex" passHref>
            What is Forex
          </Link>
        </li>
        <li>
          <Link href="/documentation/contents/algo-trading" passHref>
            Algorithmic Trading
          </Link>
        </li>
        <li>
          <Link href="/documentation/brokers" passHref>
            Best Brokers
          </Link>
        </li>
        <li>
          <Link href="/documentation/infrastructure/vps" passHref>
            Virtual Private Server
          </Link>
        </li>
        <li>
          <Link href="/documentation/infrastructure/security" passHref>
            Cybersecurity and Scams
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Parte2;
