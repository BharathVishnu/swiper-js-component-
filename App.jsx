import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import shuffleArray from 'shuffle-array';
import qrcodeog from './assets/qrcodeog.png';
import qrcode from './assets/qrcode.png'
import Timer from './Timer';


function App() {
  // Gradient background
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, #9FA3CE, #9FCEC0, #9FCBCE, #66B6FF)',
  };

  // QR code images
  const images = [
    qrcodeog,
	qrcode,
	qrcode,
	qrcode,
	qrcode,
	qrcode,
	qrcode,
	qrcode,
	qrcode,
  ];

  const [shuffledImages, setShuffledImages] = useState(images);

  useEffect(() => {
    // Shuffle the images array initially when the component mounts
    shuffleArray(images);
    setShuffledImages([...images]);

    // Set up a timer to shuffle the images every 5 seconds
    const shuffleTimer = setInterval(() => {
      shuffleArray(images);
      setShuffledImages([...images]);
    }, 11000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(shuffleTimer);
  }, []); // Empty dependency array to shuffle only once when the component mounts

  return (
    <div className='flex flex-col gap-5 font-lilita w-screen h-screen ' style={gradientStyle}>
      <div className='mt-10 text-2xl md:text-5xl flex mx-auto'>
        Welcome to NFT Treasure Hunt!
      </div>
	  <div className='mx-auto font-md md:font-xl text-white'>
			Help Text
	  </div>
      <div className='md:mt-0 mt-20 mx-auto'>
        <Swiper
          effect={'coverflow'}
          slidesPerView={3} 
          spaceBetween={10} 
          autoplay={{
            delay: 11000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 100,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper w-screen"
          freeMode={true}
          freeModeMomentumRatio={0.2}
		  allowTouchMove={false}
        >
          {shuffledImages.map((image, index) => (
            <SwiperSlide className='text-align center font-xl bg-white flex justify-center items-center' key={index}>
                <img className="block w-full h-full cover" src={image} alt={`Nature ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
	  <Timer/>
    </div>
  );
}

export default App;
