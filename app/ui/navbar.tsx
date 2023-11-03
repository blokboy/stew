import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-white p-2">
            <Link href="/" >
                <Image 
                    src='/purple-logo.png'
                    width={50}
                    height={50}
                />
            </Link>
        </div>
    )
}