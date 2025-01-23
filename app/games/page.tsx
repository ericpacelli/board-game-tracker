import { Suspense } from 'react';

import { Breadcrumbs, Search, Pagination } from '@/app/components';
import { getGamesPages } from '@/app/lib/actions';

import { CreateButton, GameTable, GameTableSkeleton } from './components';

export default async function GamesPage(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getGamesPages(query);

    return (
        <>
            <div className='flex justify-between items-center'>
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Games', href: '/games', active: true },
                    ]}
                />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search games..." />
                <CreateButton />
            </div>
            <Suspense key={query + currentPage} fallback={<GameTableSkeleton />}>
                <GameTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    );
}