'use server';

import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const prisma = new PrismaClient();

export async function getGames(query: string, currentPage: number) {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return prisma.game.findMany({
        where: {
            OR: [
                { title: { contains: query || '' } },
                { description: { contains: query || '' } },
                { publisher: { contains: query || '' } }
            ]
        },
        skip: (currentPage - 1) * 10,
        take: 10
    });
}

export async function getGameById(id: number) {
    return prisma.game.findFirst({ where: { id }});
}

export async function getGamesPages(query?: string) {
    const games = await prisma.game.findMany({
        where: {
            OR: [
                { title: { contains: query || '' } },
                { description: { contains: query || '' } },
                { publisher: { contains: query || '' } }
            ]
        }
    });

    return Math.ceil(games.length / 10);
}

const GameSchema = z.object({
    id: z.number(),
    title: z.string({
        required_error: 'Please enter a title'
    }),
    description: z.string(),
    publisher: z.string(),
    release_date: z.string(),
    rating: z.number()
})

const CreateGame = GameSchema.omit({ id: true });
const UpdateGame = GameSchema;

export type GameState = {
    errors?: {
        title?: string[];
        description?: string[];
        publisher?: string[];
        release_date?: string[];
        rating?: string[];
    },
    message?: string | null;
}

export async function createGame(prevState: GameState, formData: FormData) {
    const rating = formData.get('rating');
    
    const validatedFields = CreateGame.safeParse({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        publisher: formData.get('publisher') as string,
        release_date: formData.get('release_date') as string,
        rating: rating ? +rating : undefined
    });

    if (!validatedFields.success) {
        return { message: 'Invalid form data', errors: validatedFields.error.flatten().fieldErrors };
    }

    try {
        await prisma.game.create({
            data: validatedFields.data
        });
    } catch (err) {
        console.error(err);
        return { message: 'Database Error: Unable to create game' };
    }

    redirect('/games');
}

export async function updateGame(prevState: GameState, formData: FormData) {
    const rating = formData.get('rating');
    const id = formData.get('id');

    const validatedFields = UpdateGame.safeParse({
        id: id ? +id : undefined,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        publisher: formData.get('publisher') as string,
        release_date: formData.get('release_date') as string,
        rating: rating ? +rating : undefined
    });

    if (!validatedFields.success) {
        console.error('invalid form data', validatedFields.error.flatten().fieldErrors);
        return { message: 'Invalid form data', errors: validatedFields.error.flatten().fieldErrors };
    }

    try {
        await prisma.game.update({
            data: validatedFields.data,
            where: { id: validatedFields.data.id }
        });
    } catch (err) {
        console.error(err);
        return { message: 'Database Error: Unable to update game' };
    }

    redirect('/games');
}

export async function deleteGame(id: number) {
    try {
        await prisma.game.delete({ where: { id } });
    } catch (err) {
        console.error(err);
    }

    redirect('/games');
}