"use client";

type Props = {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void
}

import React, { useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Counter: React.FC<Props> = ({
    title, subtitle, onChange, value
}) => {

    const onAdd = useCallback(() => {
        onChange(value + 1)
    }, [onChange, value])


    const onReduce = useCallback(() => {
        if (value === 1) return

        onChange(value - 1)
    }, [onChange, value])

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className="flex flex-col">
                <div className="font-medium">  {title}
                </div>
                <div className="font-light text-gray-600">{subtitle}
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 border-neutral-400 hover:opacity-80 transition cursor-pointer" onClick={onReduce}>
                    <AiOutlineMinus size={18} />
                </div>
                <div className="font-light text-xl text-neutral-600">
                    {value}
                </div>
                <div className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 border-neutral-400 hover:opacity-80 transition cursor-pointer" onClick={onAdd}>
                    <AiOutlinePlus size={18} />
                </div>
            </div>
        </div>
    )
}

export default Counter