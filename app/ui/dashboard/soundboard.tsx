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
        <div className="flex fixed justify-center bottom-0 rounded-lg border-2 border-red-900 w-full h-1/3">
            <h1 className="">Sounds</h1>
        </div>           
    );
}