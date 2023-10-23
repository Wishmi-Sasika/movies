import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
// import '../styles/MovieCard.css';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardStyle = {
    backgroundColor: '#414654',
    height: isExpanded ? 'auto' : '12vw',
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group">
      <div
        className="bg-zinc-900 text-xl font-semibold col-span relative rounded-lg p-4 hover:shadow-lg transition duration-200"
        style={cardStyle}
      >
        <p className="text-white">{data.title}</p>
        {isExpanded && (
          <div className="details">

            <p>{data.overview}</p>
            {/* Add additional movie details here */}
          </div>
        )}
        <div className="expand-icon" onClick={toggleExpand}>
          <CgDetailsMore size={30} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;