import { getGames } from '@/app/lib/actions';

import { DeleteButton } from './delete-button';
import { EditButton } from './edit-button';
import { Rating } from './rating';

export async function GameTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const games = await getGames(query, currentPage);

    return (
        <div className="mt-6">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="min-w-full text-gray-900">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-3 py-5 font-medium">Title</th>
                                <th scope="col" className="px-3 py-5 font-medium">Description</th>
                                <th scope="col" className="px-3 py-5 font-medium">Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {games.map((game) => (
                                <tr key={game.id}>
                                    <td className='px-3 py-3 whitespace-nowrap'>{game.title}</td>
                                    <td className='px-3 py-3 whitespace-nowrap'>{game.description}</td>
                                    <td className='px-3 py-3 whitespace-nowrap'><Rating rating={game.rating || 0} /></td>
                                    <td className="px-3 py-3 whitespace-nowrap">
                                        <div className="flex justify-end gap-3">
                                            <EditButton id={game.id} />
                                            <DeleteButton id={game.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}