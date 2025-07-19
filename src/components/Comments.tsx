import React from 'react'
import SectionTitles from './SectionTitles'
import profile1Image from '../../public/image/profile/profile1.webp'
import profile2Image from '../../public/image/profile/profile2.webp'
import profile3Image from '../../public/image/profile/profile3.webp'
import CommentsCard, { commentsCardTypes } from './CommentsCard';

const commentsCards:commentsCardTypes[] = [
  {
    image: profile1Image,
    name: "Layla, Engineering Student",
    comment: "ThinkPal helped me understand my learning style and create a study plan that works for me.",
  },
  {
    image: profile2Image,
    name: "Omar, Business Student",
    comment: "The AI assistant is like having a personal tutor available 24/7",
  },
  {
    image: profile3Image,
    name: "Fatima, Arts Student",
    comment: "I feel more confident about my career path thanks to ThinkPal's guidance.",
  },
  
];

function Comments() {
  return (
    <section>
        <div className="container py-14">
            <SectionTitles
          headTitle="Student Success Stories"
          secondaryTitle=""
        />

        <div className="content mt-10 content-with-3">
          {commentsCards.map((ele,index)=>(
            <div key={index} className="card card-style bg-secondary">
              <CommentsCard image={ele.image} name={ele.name} comment={ele.comment} />
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default Comments