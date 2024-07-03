import React from 'react';
import {Card, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";

const tours = [
        {
          title: 'Triund Trek',
          description: 'Experience the breathtaking views of the Dhauladhar range on this popular trek near McLeod Ganj.',
          image: '/images/img1.png', // Replace with actual image source
        },
        {
          title: 'Hampta Pass Trek',
          description: 'Explore the diverse landscapes from lush green valleys to the barren mountains of Lahaul.',
          image: '/images/img2.jpg', // Replace with actual image source
        },
        {
          title: 'Spiti Valley Tour',
          description: 'Discover the untouched beauty and unique culture of the cold desert mountain valley in Spiti.',
          image: '/images/img3.jpg', // Replace with actual image source
        },
        {
          title: 'Kasol and Kheerganga Trek',
          description: 'Immerse yourself in the scenic beauty of Parvati Valley and relax in the natural hot springs of Kheerganga.',
          image: '/images/img4.jpg', // Replace with actual image source
        },
        {
          title: 'Chandratal Lake Trek',
          description: 'Witness the stunning high-altitude lake, also known as the Moon Lake, surrounded by the mighty Himalayas.',
          image: '/images/img5.jpg', // Replace with actual image source
        },
        {
          title: 'Malana Village Trek',
          description: 'Explore the ancient village of Malana, known for its unique culture and hashish production.',
          image: '/images/img6.jpg', // Replace with actual image source
        }
      
];

const TourSection = () => {
  return (
    <div className="flex justify-center">
      {/* <h2 className="text-4xl font-bold text-center mb-12">Our Tours</h2> */}
      <div className="grid py-12  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-8 lg:px-16 lg:max-w-[1286px]">
        {tours.map((tour, index) =>{
            return <>
                   <Card
                   
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              alt={tour.description}
              className="object-cover"
              height={"100"}
              src={tour.image}
            />
         
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{tour.description}</p>
        <small className="text-default-500">{tour.title}</small>
        <h4 className="font-bold text-large">{tour.title}</h4>
      </CardHeader>
          </Card>
            </>
        })}
      </div>
    </div>
  );
};

export default TourSection;
