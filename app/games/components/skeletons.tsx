export function GameTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="min-w-full text-gray-900">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Description
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Rating
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export function TableRowSkeleton() {
    return (
        <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            {/* Title */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Description */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-32 rounded bg-gray-100"></div>
            </td>
            {/* Rating */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Actions */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                </div>
            </td>
        </tr>
    );
}