'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';

const AboutUs = () => {
  const cultureRef = useRef(null);
  const joinUsRef = useRef(null);
  const ourStoryRef = useRef(null);
  const becomePartnerRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='rajdhani-semibold'>
      <Head>
        <title>About Us - Travophila</title>
      </Head>

      {/* Main section with background image */}
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/background-4.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className=" rajdhani-medium max-w-4xl mx-auto px-4 text-white text-center">
            <h1 className="text-4xl lg:text-7xl rajdhani-bold font-bold mb-4">About Travophila</h1>
            <p className="text-lg lg:text-xl mb-8">
              Travophila is your gateway to extraordinary adventures in the majestic Himalayas. We specialize in curated tours, exhilarating treks, immersive camping experiences, and thrilling adventure activities, all set against the stunning backdrop of the Himalayan range.
            </p>
            <p className="text-lg lg:text-xl mb-8">
              Our mission is to redefine travel by offering Travophila Assured Trips—guaranteeing a seamless journey with a money-back assurance. We prioritize safety, sustainability, and unparalleled customer satisfaction, ensuring each traveler embarks on a transformative journey with us.
            </p>
            <p className="text-lg lg:text-xl mb-8">
              Join us and immerse yourself in the rich culture and natural beauty of the Himalayas. Whether you are seeking adrenaline-pumping adventures or serene moments of reflection, Travophila crafts experiences that leave a lasting impression.
            </p>

            {/* Navigation Cards */}
            <div className="text-white py-8 absolute bottom-0 left-0 w-full">
              <div className="max-w-4xl mx-auto px-4 flex justify-center space-x-6">
                {/* Culture */}
                <div className="flex items-center cursor-pointer" onClick={() => scrollToRef(cultureRef)}>
                  <Image src="/images/icon/icon4.png" alt="Culture Icon" width={40} height={40} className="mr-2" />
                  <span className="text-lg lg:text-xl font-semibold">Culture</span>
                </div>
                {/* Join Us */}
                <div className="flex items-center cursor-pointer" onClick={() => scrollToRef(joinUsRef)}>
                  <Image src="/images/icon/icon2.png" alt="Join Us Icon" width={40} height={40} className="mr-2" />
                  <span className="text-lg lg:text-xl font-semibold">Join Us</span>
                </div>
                {/* Our Story */}
                <div className="flex items-center cursor-pointer" onClick={() => scrollToRef(ourStoryRef)}>
                  <Image src="/images/icon/icon3.png" alt="Our Story Icon" width={40} height={40} className="mr-2" />
                  <span className="text-lg lg:text-xl font-semibold">Our Story</span>
                </div>
                {/* Become a Partner */}
                <div className="flex items-center cursor-pointer" onClick={() => scrollToRef(becomePartnerRef)}>
                  <Image src="/images/icon/icon1.png" alt="Become a Partner Icon" width={40} height={40} className="mr-2" />
                  <span className="text-lg lg:text-xl font-semibold">Become a Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div ref={cultureRef} className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Culture</h2>
          {/* <div className="flex justify-center mb-8">
            <Image src="/images/img1.jpg" alt="Culture" width={400} height={250} />
          </div> */}
          <p className="text-lg">
            At Travophila, we celebrate diversity and embrace local traditions. Each journey with us is an opportunity to engage deeply with Himalayan culture, from vibrant festivals to ancient rituals that have shaped this mystical region.
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <div ref={joinUsRef} className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Us</h2>
          {/* <div className="flex justify-center mb-8">
            <Image src="/images/img1.jpg" alt="Join Us" width={400} height={250} />
          </div> */}
          <p className="text-lg">
            Are you ready to embark on unforgettable adventures? Join the Travophila community and explore the Himalayas with like-minded travelers who share your passion for exploration and discovery.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div ref={ourStoryRef} className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
          {/* <div className="flex justify-center mb-8">
            <Image src="/images/img1.jpg" alt="Our Story" width={400} height={250} />
          </div> */}
          <p className="text-lg">
            Founded with a passion for exploration, Travophila started as a dream to share the Himalayan wonders with the world. Our story is a journey of growth, innovation, and unwavering commitment to delivering exceptional travel experiences.
          </p>
        </div>
      </div>

      {/* Become a Partner Section */}
      <div ref={becomePartnerRef} className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Become a Partner</h2>
          {/* <div className="flex justify-center mb-8">
            <Image src="/images/img1.jpg" alt="Become a Partner" width={400} height={250} />
          </div> */}
          <p className="text-lg">
            Partner with Travophila and unlock new opportunities in the travel industry. Together, we can create memorable experiences for travelers while promoting sustainable tourism practices that preserve the Himalayan environment and empower local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
