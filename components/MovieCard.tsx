import useInforModal from '@/hooks/useInfoModal';
import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) => {
    const cardStyle = {
        backgroundColor: '#414654',
    };

    const { openModal } = useInforModal();

    //const handleClick = () => {
        // Simulate navigation to the new page with the movie details
        //console.log(`Navigating to movie details for ID: ${data.id}`);
    //};

    return (
        <div className='group'>
            <div className='bg-zinc-900 text-xl font-semibold col-span relative h-[12vw] rounded-lg p-4 hover:shadow-lg transition duration-200' style={cardStyle}>
                <p className='text-white'>{data.title}</p>
                <div className='absolute bottom-5 left-5 text-white' onClick={() => openModal (data?.id)}>
                    <CgDetailsMore size={30} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;