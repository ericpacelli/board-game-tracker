import Breadcrumbs from '../../components/breadcrumbs';
import CreateGameForm from './components/form';

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Games', href: '/games' },
                    { label: 'Create', href: '/games/create', active: true },
                ]}
            />
            <CreateGameForm />
        </main>
    )
}