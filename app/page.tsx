import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
      </div>

      <div className="flex flex-col items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="https://freight.cargo.site/w/540/q/94/i/cda658e04a1b7738e90ce1c53f5b7174739c6f263db8392d0f3a373d7bc96c3c/MineCube-render-540x540.gif"
          alt="Next.js Logo"
          width={300}
          height={300}
          priority
        />
        <ConnectButton />
      </div>
    </main>
  )
}
