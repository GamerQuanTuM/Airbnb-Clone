import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import User from "@/actions/getCurrentUser";


export async function POST(request: Request) {
    const user = await User();

    if (!user) {
        return NextResponse.error()
    }

    const body = await request.json()

    const {
        category,
        location,
        guestCount,
        bathroomCount,
        roomCount,
        imageSrc,
        price,
        title,
        description
    } = body

    const listing = await prisma.listing.create({
        data: {
            category,
            locationValue: location.value,
            guestCount,
            bathroomCount,
            roomCount,
            imageSrc,
            price: parseInt(price, 10),
            title,
            description,
            userId: user.id
        }
    })
    return NextResponse.json(listing, { status: 201 })
}