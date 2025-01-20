'use client';

import { createGame } from '@/app/lib/actions';
import Form from 'next/form';
import { useActionState } from 'react';

export default function CreateGameForm() {
    const initialState = { message: '', errors: {} };
    const [state, formAction] = useActionState(createGame, initialState);

    return (
        <Form action={formAction}>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" id="description" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">Publisher</label>
                <input type="text" name="publisher" id="publisher" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div> 
            <div className="mb-4">
                <label htmlFor="release_date" className="block text-sm font-medium text-gray-700">Release Date</label>
                <input type="text" name="release_date" id="release_date" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                <input type="number" name="rating" id="rating" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Create</button>
        </Form>
    );
}