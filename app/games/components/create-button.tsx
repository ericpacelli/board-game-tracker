import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateButton() {
    return (
        <Link
            href="/games/create"
            className="flex h-10 items-center rounded-lg bg-steel-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-steel-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Add Game </span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}