import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24">
      <Link href="/" className="text-white text-4xl">
        Rishabh Negi
      </Link>
      <ul className="flex gap-10 text-lg">
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
        <Link href="/gallery" className="text-white">
          Gallery
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
