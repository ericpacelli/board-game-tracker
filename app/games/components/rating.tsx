import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconFilled } from '@heroicons/react/24/solid';

export function Rating({ rating }: { rating: number }) {
    return (
        <div className='flex gap-1'>
            {Array.from({ length: 5 }, (_, i) => (
                Math.floor(rating) > i ?
                    <StarIconFilled key={i} className='w-5 h-5 text-yellow-500' /> : 
                    <StarIcon key={i} className='w-5 h-5 text-yellow-500' />
            ))}
        </div>
    );
}