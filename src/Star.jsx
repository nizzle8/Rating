import { FaRegStar, FaStar } from 'react-icons/fa'

const Star = ({ id, setHoveredStar, hoveredStar, handleStarClick, rating }) => {

   const handleMouseOver = () => {
      setHoveredStar(id + 1)
   }

   const handleMouseLeave = () => {
      setHoveredStar(-1)
   }

   return (
      <div>
         {hoveredStar > id  || rating > id ? 
         <FaStar
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={handleStarClick}
         className='star'
         /> : 
         <FaRegStar
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         onClick={handleStarClick}
         />}
      </div>
   )
}

export default Star