import { Button } from "../button";
import {
    PlayPauseIcon
  } from '@heroicons/react/24/outline';
import clsx from "clsx";
import { useDraggable } from '@dnd-kit/core';


export type Sound = {
    name: string;
    sound_file: string;
}

export default function Sound({ ...props }) {
    const { btnName } = props;
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
        data: {
            type: 'STUDIO_EFFECT'
        }
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef}>
        <Button 
            key={btnName} 
            className={clsx('flex w-12 m-1 md:w-1/6 h-[48px]')}
            { ...attributes }
            { ...listeners }
        >
            <PlayPauseIcon />
        </Button>    
        </div>
    )
}