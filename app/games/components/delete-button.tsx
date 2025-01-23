import { TrashIcon } from '@heroicons/react/24/outline';

import { deleteGame } from '@/app/lib/actions';

export function DeleteButton({ id }: { id: number }) {
    const deleteGameWithId = deleteGame.bind(null, id);

    return (
        <form action={deleteGameWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <TrashIcon className="w-5" />
            </button>
        </form>
    )
}