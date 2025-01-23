'use client';

import { Game } from '@prisma/client';
import { useActionState } from 'react';

import { createGame, GameState, updateGame } from '@/app/lib/actions';

export function GameForm({ game }: { game?: Game }) {
    const initialState: GameState = { message: null, errors: {} };
    const action = game ? updateGame : createGame;
    const [, formAction] = useActionState(action, initialState);

    return (
        <form action={formAction}>
            <input type="hidden" name="id" defaultValue={game?.id} />
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" defaultValue={game?.title} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" id="description" defaultValue={game?.description} className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">Publisher</label>
                <input type="text" name="publisher" id="publisher" defaultValue={game && game.publisher ? game.publisher : ''} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div> 
            <div className="mb-4">
                <label htmlFor="release_date" className="block text-sm font-medium text-gray-700">Release Date</label>
                <input type="text" name="release_date" defaultValue={game && game.release_date ? game.release_date : ''} id="release_date" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                <input type="number" name="rating" id="rating" defaultValue={game && game.rating ? game.rating : ''} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <button type="submit" className="bg-steel-blue-500 transition-colors hover:bg-steel-blue-600 text-white px-4 py-2 rounded-md">Save</button>
        </form>
    );
}