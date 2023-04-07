"use client"
import Container from '@/components/Container'
import ListingHead from '@/components/listings/ListingHead'
import ListingInfo from '@/components/listings/ListingInfo'
import { categories } from '@/constants/Categories'
import { SafeListings, SafeUser } from '@/typings'
import { Reservation } from '@prisma/client'
import React, { useMemo } from 'react'

type Props = {
    reservation?: Reservation[],
    listing: SafeListings & {
        user: SafeUser
    },
    currentUser?: SafeUser | null
}

const ListingClient: React.FC<Props> = ({ listing, currentUser }: Props) => {

    const category = useMemo(() => {
        return categories.find((item) => item.label = listing.category)
    }, [listing.category])
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead title={listing.title} imageSrc={listing.imageSrc} locationValue={listing.locationValue} id={listing.id} currentUser={currentUser} />
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <ListingInfo
                            user={listing.user}
                            category={category}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            bathroomCount={listing.bathroomCount}
                            guestCount={listing.guestCount}
                            locationValue={listing.locationValue}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ListingClient