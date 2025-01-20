'use server';

import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const prisma = new PrismaClient();

export async function getGames() {
    return prisma.game.findMany();
}

const GameSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    publisher: z.string(),
    release_date: z.string(),
    rating: z.number()
})

const CreateGame = GameSchema.omit({ id: true });

export async function createGame(prevState: any, formData: FormData) {
    console.log('creating game')

    const rating = formData.get('rating');
    
    const validatedFields = CreateGame.safeParse({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        publisher: formData.get('publisher') as string,
        release_date: formData.get('release_date') as string,
        rating: rating ? +rating : undefined
    });

    if (!validatedFields.success) {
        console.error('Invalid form data', validatedFields.error.flatten().fieldErrors);
        return { message: 'Invalid form data', errors: validatedFields.error.flatten().fieldErrors };
    }

    console.log('validated', validatedFields);

    // try {
        await prisma.game.create({
            data: validatedFields.data
        });
    // } catch (err) {
    //     console.error('error', err);
    //     return { message: 'Database Error: Unable to create game' };
    // }

    console.log('done, redirecting')

    redirect('/games');
}