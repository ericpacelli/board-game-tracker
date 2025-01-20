import { getGames } from '../lib/actions';

import GameTable from './components/game-table';
import Breadcrumbs from '../components/breadcrumbs';

export default async function GamesPage() {
    const games = await getGames();

    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Games', href: '/games', active: true },
                ]}
            />
            <GameTable games={games} />
        </>
    );
}