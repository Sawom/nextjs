import Link from "next/link";

const Navbar = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
