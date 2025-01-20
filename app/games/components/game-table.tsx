import { Game } from '@prisma/client';

export default function GameTable ({ games }: { games: Game[] }) {
  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
          <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {games.map((game) => (
          <tr key={game.id}>
            <td className='px-6 py-4 whitespace-nowrap'>{game.title}</td>
            <td className='px-6 py-4 whitespace-nowrap'>{game.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}