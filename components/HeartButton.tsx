"use client"
import { SafeUser } from '@/typings';
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useFavourite from './hooks/useFavourite';

type Props = {
    listingId: string;
    currentUser?: SafeUser | null | undefined
}

const HeartButton: React.FC<Props> = ({
    listingId, currentUser
}) => {

    const { hasFavourited, toggleFavourite } = useFavourite({
        listingId, currentUser
    })


    return (
        <aside onClick={toggleFavourite}
            className='relative hover:opacity-80 transition cursor-pointer'
        >
            <AiOutlineHeart size={28} className='fill-white absolute -top-[2px] -right-[2px]' />
            <AiFillHeart size={24} className={`${hasFavourited ? "fill-rose-500" : "fill-neutral-700/50"}`} />
        </aside>
    )
}

export default HeartButton