'use client'
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="">
      <Link href="/">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
          src="/logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </Link>
    </div>
  );
}

export default Logo;
