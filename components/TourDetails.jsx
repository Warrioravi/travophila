// components/TourDetails.js
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image, Button, Tabs, Tab } from '@nextui-org/react';
// import './../node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import EnquiryForm from './EnquiryForm';
import TripInclusions from'@components/components/tour-details/TripInclusions'
import FAQ from'@components/components/tour-details/FAQs'
import ThingsToCarry from '@components/components/tour-details/ThingsToCarry'
import { Accordion, AccordionItem } from "@nextui-org/react";
import HighlightsComponent from '@components/components/tour-details/Highlights'
import SwipeableSection from './SwipeableSection';
const tripHighlights= [
    'Explore the charming village of Chitkul, known for its traditional Himachali architecture and stunning views of snow-capped peaks.',
    'Visit the beautiful town of Sangla, nestled in the Sangla Valley and famous for its apple orchards and the historic Kamru Fort.',
    'Discover the serene landscapes of Rakcham, a tranquil village surrounded by pine forests and offering peaceful riverside walks.',
    'Enjoy local cuisines and cultural experiences, including traditional Himachali dishes like Siddu and Thukpa, and interactions with friendly locals.',
    'Experience breathtaking views of Kinnaur Valley, with its lush green valleys, gushing rivers, and towering mountains at every turn.',
    'Embark on a 4-day, 3-night journey filled with immersive travel experiences that showcase the best of Chitkul, Sangla, and Rakcham.',
  ];
let itinerary = [
    {
        "day": "Day 1: Arrival in Sangla",
        "description": "Travel to Sangla, check into your hotel, explore Sangla village, visit Kamru Fort, enjoy a traditional Himachali dinner, and relax.",
        "images": [
            "https://example.com/sangla_arrival.jpg",
            "https://example.com/bering_nag_temple.jpg",
            "https://example.com/kamru_fort.jpg"
        ]
    },
    {
        "day": "Day 2: Sangla to Rakchham",
        "description": "Travel to Rakchham, check into your accommodation, explore the village, visit local farms, enjoy the tranquility, and stargaze in the evening.",
        "images": [
            "https://example.com/road_to_rakchham.jpg",
            "https://example.com/rakchham_village.jpg",
            "https://example.com/stargazing_rakchham.jpg"
        ]
    },
    {
        "day": "Day 3: Rakchham to Chitkul",
        "description": "Travel to Chitkul, check into your accommodation, visit Mathi Temple, walk along the Baspa River, enjoy the breathtaking views, and relax in the evening.",
        "images": [
            "https://example.com/road_to_chitkul.jpg",
            "https://example.com/mathi_temple.jpg",
            "https://example.com/baspa_river.jpg"
        ]
    },
    {
        "day": "Day 4: Chitkul to Sangla and Departure",
        "description": "Travel back to Sangla, visit the Buddhist Monastery, have lunch, and begin your journey back to your starting point or next destination.",
        "images": [
            "https://example.com/road_back_to_sangla.jpg",
            "https://example.com/buddhist_monastery.jpg",
            "https://example.com/departure.jpg"
        ]
    }
];

let tabs = [
    {
        id: "photos",
        label: "Photos",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: "music",
        label: "Music",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: "videos",
        label: "Videos",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

const cards = [
    { title: 'Card 1', description: 'This is the description for card 1' },
    { title: 'Card 2', description: 'This is the description for card 2' },
    { title: 'Card 3', description: 'This is the description for card 3' },
    { title: 'Card 4', description: 'This is the description for card 4' },
    { title: 'Card 5', description: 'This is the description for card 5' },
];





const TourDetails = ({ images, ratings, title, description, price }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="max-w-7xl mx-auto">

            <div className="imageSection">
                <div className="max-w-7xl mx-auto">
                    {/* Image Section */}
                    <div className="mb-6 max-h-[500px]">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={30}
                            centeredSlides={true}
                            effect={'fade'}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[EffectFade, Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <Image
                                        width={'100%'}

                                        src={src}
                                        alt={`Image ${index}`}
                                        radius='1px'
                                        objectFit="cover"
                                        fill
                                        className="w-full max-h-[500px] h-full top-0 left-0 object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div class="rajdhani-semibold grid grid-cols-3">
                
                {/* Details and Intro Section */}
                <div class="col-span-2  bg-white border border-gray-100 rounded-lg shadow-lg p-2">
                    <h4 class=" rajdhani-bold text-4xl ">
                        Kinnaur Valley Trip from Delhi | Sangla, Chitkul & Rakccham | 4D & 3N  
                    </h4>
                    <div class="flex rajdhani-semibold justify-between items-end py-5 ">
                        <div class="flex justify-around align-middle location"><span class="material-symbols-outlined">location_on</span>Kinnaur, Himachal Pradesh</div>
                        <div class="flex justify-around align-middle days"><span class="material-symbols-outlined">schedule</span>4 Days & 3 Nights</div>
                        <div class="flex justify-around align-middle ratings"> <span class="material-symbols-outlined">star</span>4.3/5 - 410 reviews</div>
                        <div class="flex justify-around align-middle startAndEnd"><span class="material-symbols-outlined">route</span>Delhi to Delhi</div>
                    </div>
                
                    <HighlightsComponent highlights={tripHighlights}/>

                    

                </div>

               


                {/* Bookings Section */}
                <div className="col-span-1 p-8  border border-gray-100 rounded-lg shadow-lg ">
                    <div className="price flex justify-center"> <span className='rajdhani-bold text-3xl'>INR 7,990</span> <span className="rajdhani-semibold pt-[12px] pl-1" > Per Person</span></div>
                    <Button radius="full" className="w-[100%] rajdhani-semibold my-2 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded p-6">
                        Send Enquiry
                    </Button>
                    <Image className='inline-block' src='/images/tvassured.png' width={'50%'} alt='travophila_assured_logo'/>
                </div>


                {/* Inclusion Section , add travophila assured  */}


                <div className="col-span-2 border border-gray-100 rounded-lg shadow-lg min-h-44">
                    <Tabs size='lg' color='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded' fullWidth aria-label="Dynamic tabs" items={tabs}>

                        <Tab key="1" title="Itinerary">
                            <h3 class=" rajdhani-bold text-2xl py-2 px-2 ">
                                Itinerary
                            </h3>
                            <Accordion variant="splitted">
                                {itinerary.map((day) => {
                                    return <AccordionItem key={day.day} aria-label="Accordion 1" title={day.day}>
                                        {day.description}
                                    </AccordionItem>
                                })}
                            </Accordion>
                        </Tab>
                        
                        <Tab key="2" title="Inclusions">
                          <TripInclusions/>
                        </Tab>


                        <Tab key="3" title="Things to carry">
                            <ThingsToCarry/>
                        </Tab>

                        <Tab key="4" title="FAQs">
                        <FAQ/>
                        </Tab>

                    </Tabs>
                </div>

                {/* enquiry Section , enquiry form / whatsapp/phone number  */}
                <div className="col-span-1 border border-gray-100 rounded-lg shadow-lg min-h-44"><EnquiryForm /></div>
                <div className='col-span-3 border border-gray-100 rounded-lg shadow-lg min-h-44'>
                 <SwipeableSection cards={cards}/> 
                </div>
               
        </div>
        </div>
       






    );
};

export default TourDetails;
