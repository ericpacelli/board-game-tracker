'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
    return (
        <aside className='w-64 h-screen bg-steel-blue-600 text-white'>
            <nav className='p-4'>
                <ul>
                    <SidebarLink href='/' text='Home' />
                    <SidebarLink href='/games' text='Games' />
                    <SidebarLink href='/plays' text='Plays' />
                </ul>
            </nav>
        </aside>
    );
}

export function SidebarLink({ href, text }: { href: string; text: string }) {
    const pathname = usePathname();

    const liClass = clsx(
        'mb-4 p-2 rounded-md hover:bg-steel-blue-700',
        {
            'bg-steel-blue-700': pathname === href
        }
    )

    return (
        <Link href={href} className="text-lg">
            <li className={liClass}>
                {text}
            </li>
        </Link>
    );
}