'use client';

import { Button } from "../button";

import {
    PlayPauseIcon,
  } from '@heroicons/react/24/outline';
import Sound from "./sound";



export default function Soundboard() {
    const SOUNDS = [
        {
            "name": "Test Sound",
            "sound_file": "sound_file.mp3"
        },
    ]
    return (
        <div className="flex flex-col fixed items-center bottom-0 rounded-2xl border-2 border-purple-500 w-full h-1/3">
            <h1 className="mb-4 mt-2">Sounds</h1>
            <div className="flex flew-row flex-wrap justify-between p-2">
            {
                SOUNDS.map((button) => {
                    return (
                        <Sound key={button.sound_file} btnName={button.sound_file} />
                    )
                })   
            }
            </div>
        </div>           
    );
}