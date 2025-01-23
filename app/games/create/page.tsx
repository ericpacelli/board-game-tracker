import { Breadcrumbs } from '@/app/components';

import { GameForm } from '../components';

export default function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Games', href: '/games' },
                    { label: 'Create', href: '/games/create', active: true },
                ]}
            />
            <GameForm />
        </main>
    )
}