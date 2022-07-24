import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mt-2 mr-auto mb-20 ml-auto py-3 px-0 flex justify-end items-end border-b-2 border-gray-50 border-solid">
      <div className="mr-auto">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">
        <a className="ml-3 text-slate-700">Home</a>
      </Link>
      <Link href="/about">
        <a className="ml-3 text-slate-700">About</a>
      </Link>
      <Link href="/ninjas/">
        <a className="ml-3 text-slate-700">Ninja Listing</a>
      </Link>
    </div>
  );
};

export default Navbar;
