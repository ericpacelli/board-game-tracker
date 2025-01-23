import { notFound } from 'next/navigation';

import { Breadcrumbs } from '@/app/components';
import { getGameById } from '@/app/lib/actions';

import { GameForm } from '../components';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = +params.id;
    const game = await getGameById(id);

    if (!game) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Games', href: '/games' },
                    { label: game.title, href: `/games/${game.id}`, active: true },
                ]}
            />
            <GameForm game={game} />
        </main>
    )
}