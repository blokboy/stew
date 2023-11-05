'use client';

import { useDroppable } from '@dnd-kit/core';
import {
    PlayPauseIcon
} from '@heroicons/react/24/outline';
export default function Mixer({ ...props }) {
    const { setNodeRef } = useDroppable({
        id: 'STUDIO_EFFECTS',
        data: {
            accepts: ['STUDIO_EFFECT']
        }
    });

    return (
        <div ref={setNodeRef} className="flex flex-col w-full h-96 mt-24 justify-center items-center rounded-lg border-2 border-purple-900">
            <div className="w-12 h-12">
                <PlayPauseIcon />
            </div>
        </div>
    )
}