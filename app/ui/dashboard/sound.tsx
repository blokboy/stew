import { Button } from "../button";
import {
    PlayPauseIcon
  } from '@heroicons/react/24/outline';
import clsx from "clsx";


export type Sound = {
    name: string;
    sound_file: string;
}

export default function Sound({ ...props }) {
    const { btnName } = props
    return (
        <Button key={btnName} className={clsx('flex w-12 m-1 md:w-1/6 h-[48px]')}>
            <PlayPauseIcon />
        </Button>    
    )
}