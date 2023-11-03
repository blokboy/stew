import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
    return (
        <div className="flex justify-between items-center bg-black p-2">
            <Link href="/" >
                <Image 
                    src='/purple-logo.png'
                    width={50}
                    height={50}
                />
            </Link>
            <ConnectButton />
        </div>
    )
}