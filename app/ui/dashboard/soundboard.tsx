import { Button } from "../button";

import {
    PlayPauseIcon,
  } from '@heroicons/react/24/outline';

export default function Soundboard() {
    const SOUNDS = [
        {
            "name": "Test Sound",
            "sound_file": "sound_file.mp3"
        },
        {
            "name": "Test Sound",
            "sound_file": "sound_file.mp3"
        },
        {
            "name": "Test Sound",
            "sound_file": "sound_file.mp3"
        },
        {
            "name": "Test Sound",
            "sound_file": "sound_file.mp3"
        },
    ]
    return (
        <div className="flex flex-col fixed items-center bottom-0 rounded-lg border-2 border-red-900 w-full h-1/3">
            <h1 className="">Sounds</h1>
            <div className="flex flew-row">
            {
                SOUNDS && SOUNDS.map((button) => {
                    return (
                        <Button
                             key={button.name}
                             className='flex w-12 m-1 md:w-1/6 h-[48px]' 
                        >
                            <PlayPauseIcon />
                            <p className="hidden md:block">{button.name}</p>
                        </Button>
                    )
                })   
            }
            </div>
        </div>           
    );
}