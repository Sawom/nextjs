// conditional rendering
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // checking path dashboard ache kina
  // console.log(pathname, pathname.includes("dashboard"));

  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between w-1/2">
            <Link href="/">
              <li>home</li>
            </Link>
            <Link href="/services">
              <li>service</li>
            </Link>
            <Link href="/about">
              <li>about</li>
            </Link>
            <Link href="/posts">
              <li>posts</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
