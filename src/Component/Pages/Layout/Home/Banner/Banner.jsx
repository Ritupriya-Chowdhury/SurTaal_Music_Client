import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from '../../../../../assets/Home/Banner/images1.jpg'
import Img2 from '../../../../../assets/Home/Banner/image2.psd.png'
import Img3 from '../../../../../assets/Home/Banner/image3.jpg'
import Img4 from '../../../../../assets/Home/Banner/image4.jpg'
import Img5 from '../../../../../assets/Home/Banner/image5.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <div className="my-4">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero  min-h-screen   bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Img1} className="w-10/12 rounded-lg shadow-2xl mt-20 md:mt-0" />
              <div className="w-11/12 ml-8">
                <h1 className="text-5xl font-bold"> Indian Classical Musics!</h1>
                <p className="py-6">Join with us and learn with enjoy.</p>
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero  min-h-screen   bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Img2} className="w-10/12 rounded-lg shadow-2xl" />
              <div className="w-11/12  ml-8 ">
                <h1 className="text-5xl font-bold"> Guitar Playing!</h1>
                <p className="py-6">Join with us and learn with enjoy.</p>
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero  min-h-screen   bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Img3} className="w-10/12 rounded-lg shadow-2xl" />
              <div className="w-9/12 ml-8">
                <h1 className="text-5xl font-bold"> Playing Violin!</h1>
                <p className="py-6">Join with us and learn with enjoy.</p>
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero  min-h-screen   bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Img4} className="w-10/12 rounded-lg shadow-2xl" />
              <div className="w-9/12 ml-8">
                <h1 className="text-5xl font-bold"> Playing Piano!</h1>
                <p className="py-6">Join with us and learn with enjoy.</p>
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero  min-h-screen   bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Img5} className="w-10/12 mt-20 md:mt-0 rounded-lg shadow-2xl" />
              <div className="w-9/12 ml-8">
                <h1 className="text-5xl font-bold">Playing Drums!</h1>
                <p className="py-6">Join with us and learn with enjoy.</p>
                <button className="btn btn-primary">Join Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;