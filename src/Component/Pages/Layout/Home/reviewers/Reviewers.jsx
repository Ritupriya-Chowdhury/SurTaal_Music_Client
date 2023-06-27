import { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

const Reviewers = () => {
    const [reviewer, setReviewer] = useState([]);
    useEffect(() => {
        fetch('https://surtal-music-server.vercel.app/reviewers')
            .then(res => res.json())
            .then(data => setReviewer(data))
    })
    return (
        <div className="mx-auto mb-[650px]">

            <p className="text-center  text-4xl uppercase border-b-4  w-4/12 mx-auto pb-4  pt-8">Some Reviews</p>

            <div className=" mx-8 ">
                <StackedCarousel
                    autoRotate={false}
                    containerClassName={"container"}
                    cardClassName="card"
                    leftButton={<button className="text-3xl  text-blue-900 "><HiChevronDoubleLeft /></button>}
                    rightButton={<button className="text-3xl text-blue-900 "><HiChevronDoubleRight></HiChevronDoubleRight></button>}
                >
                    {
                        reviewer.map(review =>
                            <div className="mx-auto " key={`child.${review._id}`}>
                                <div className="card w-64 md:w-[350px] h-[580px] bg-base-100 shadow-xl border border-blue-700 my-8">
                                    
                                        <img className=" px-4 pt-4 rounded-xl " src={review.reviewerImage} alt=""  />
                                   
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{review.reviewerName}</h2>
                                        <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                        <p>{review.feedback}</p>

                                    </div>
                                </div>

                            </div>

                        )
                    }
                </StackedCarousel>
            </div>


        </div>
    );
};

export default Reviewers;