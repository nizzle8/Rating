import { useState } from 'react'
import Star from './Star'
import { FaStar } from 'react-icons/fa'
import Kaiju from './assets/Kaiju.png'
import { initialReviews } from './reviews'



const App = () => {
   const [hoveredStar, setHoveredStar] = useState(-1)
   const [rating, setRating] = useState(0)
   const [showReviewBox, setShowReviewBox] = useState(false)
   const [reviews, setReviews] = useState(initialReviews)
   const [newReview, setNewReview] = useState('')

   const handleStarClick = () => {
      setShowReviewBox(true)
      setRating(hoveredStar)
   }

   const handleSubmitReview = (event) => {
      event.preventDefault()
      const newReviewObject = {
         review: newReview,
         date: new Date().toLocaleString(),
         stars: rating
      }

      setReviews([newReviewObject, ...reviews])
      setShowReviewBox(false)
      setNewReview('')
   }

   const handleChangeReview = (event) => {
      setNewReview(event.target.value)
   }

   const starList = [...Array(5)].map((_, i) => (
      <Star
         key={i}
         id={i}
         hoveredStar={hoveredStar}
         setHoveredStar={setHoveredStar}
         setReviewBox={setShowReviewBox}
         handleStarClick={handleStarClick}
         rating={rating}
      />
   ))

   return (
      <div>
         <div className='mb-2'>
            <h2 className='font-bold text-2xl mb-2 text-center max-w-[250px]'>Nizzle</h2>
            <img src={Kaiju} alt="pfp" className='max-w-[250px] mb-2 rounded-full' />

            <div className='flex max-w-[250px] justify-center mb-2'>
               {starList}
            </div>

            <p className='max-w-[250px] tracking-wide'>I'm still learning but I'm motivated. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fuga beatae sequi accusamus suscipit omnis.</p>
         </div>

         {showReviewBox && (
            <form onSubmit={handleSubmitReview}>
               <div>
                  <textarea
                     placeholder='Leave a review'
                     className='w-[250px] p-2 rounded-lg'
                     value={newReview}
                     onChange={handleChangeReview}
                  />
               </div>
               <div>
                  <button className='border rounded px-2 py-1 mb-2'>Submit</button>
               </div>
            </form>
         )}

         <div>
            <p className='text-sm mb-2 underline'>Reviews</p>
            {reviews.map((review, i) => (
               <div key={i} className='review'>
                  <p className='mb-2'>{review.review}</p>
                  <p className='text-xs text-end'>{review.date}</p>
                  <div className='flex text-xs text-[goldenrod] justify-end'>
                     {[...Array(review.stars)].map((_, i) => (
                     <p>
                        <FaStar key={i}/>
                     </p>))}
                  </div>
               </div>
            ))}
         </div>

      </div>
   )
}

export default App