'use client'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './ui/globals.css';
import Navbar from './ui/navbar';
import clsx from 'clsx';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  base,
  mainnet
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import dynamic from "next/dynamic";

import { DndContext } from '@dnd-kit/core';


const { chains, publicClient } = configureChains(
  [mainnet, base],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Stew',
  projectId: String(process.env.PROJECT_ID),
  chains
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient
})


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
        <html lang="en">
          <body className={clsx('bg-black-600', inter.className)}>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider 
              theme={midnightTheme({
                accentColor: '#7b3fe4', //set proper hex later
                accentColorForeground: 'white',
                borderRadius: 'medium',
              })}
              chains={chains}
            >
            <DndContext>
              {children}
            </DndContext>
            </RainbowKitProvider>
          </WagmiConfig>
          </body>
        </html>
     
  )
}
