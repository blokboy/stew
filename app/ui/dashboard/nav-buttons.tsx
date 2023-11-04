'use client';

import {
  PlayPauseIcon,
  MusicalNoteIcon,
  AdjustmentsVerticalIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Button } from '../button';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const buttons = [
  { 
    name: 'Country', 
    icon: MusicalNoteIcon 
  },
  {
    name: 'Hip Hop',
    icon: AdjustmentsVerticalIcon,
  },
  { 
    name: 'Pop',  
    icon: PlayPauseIcon 
  },
  { 
    name: 'Country', 
    icon: MusicalNoteIcon 
  },
  {
    name: 'Hip Hop',
    href: '',
    icon: AdjustmentsVerticalIcon,
  },
  { 
    name: 'Pop', 
    icon: PlayPauseIcon 
  }
];

export default function NavButtons() {
  return (
    <div className="flex flex-row justify-evenly w-full">
      {buttons.map((button) => {
        return (
          <Button
            key={button.name}
            className='flex w-12 m-1 md:w-1/6 h-[48px]' 
          >
            <PlayPauseIcon />
            <p className="hidden md:block">{button.name}</p>
          </Button>
        );
      })}
    </div>
  );
}