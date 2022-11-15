import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav>
      Platform Starter
      <Link href="/login">Login</Link>
    </nav>
  );
}

export default Header;
