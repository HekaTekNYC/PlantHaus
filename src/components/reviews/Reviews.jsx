import React from 'react'
import './reviews.styles.scss'

const Reviews = () => {
  return (
    <>
      <div className="reviews-container">
        <h2 className="reviews-header">Reviews</h2>
        <div className="reviews">
          <div className="reviews-text">
            <b> Review from South Portland, Maine:</b> <br />
            Rating:
            <i> 5/5 stars</i> <br />
            "Living in South Portland, where winters can be long and harsh, I
            appreciate The Plant Haus for offering a variety of hardy plants
            that can thrive in our climate. The pet-friendly selection is
            fantastic too! The delivery was prompt, and the plants arrived in
            excellent condition. I'm now a loyal customer!"
          </div>
          <div className="reviews-text">
            <b>Review from Austin, Texas:</b> <br />
            <i> 4.5/5 stars</i> <br />
            "The Plant Haus' online support team is incredible. They helped me
            navigate the unique care requirements for each plant. I deducted 1/2
            a star because I'd love to see even more options for those of us in
            warmer regions. Overall I would highly reccommend!"
          </div>
          <div className="reviews-text">
            <b>"Review from Salt Lake City, Utah:</b> <br />
            <i> 4.5/5 stars</i> <br />
            "Absolutely thrilled with my recent plant purchase from The Plant
            Haus! Living in Salt Lake City, finding the right plants can be a
            challenge, but The Plant Haus delivered plants that work in my
            environment perfectly. The packaging was excellent and their
            commitment to quality truly sets them apart."
          </div>
          <div className="reviews-text">
            <b>"Review from Brooklyn, New York:</b> <br />
            <i> 4/5 stars</i> <br />
            "As a Brooklyn plant parent, I'm always on the lookout for unique
            additions for my collection. The Plant Haus didn't disappoint! The
            selection is diverse, and the online support rocks. I knocked off
            one star because I wish the delivery could be a bit quicker, but the
            wait was well worth it."
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
