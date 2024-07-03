'use client'
// pages/tour/[id].js
import TourDetails from '@components/components/TourDetails';

export default function TourPage() {
  const tourData = {
    images: [
      '/images/img2.jpg',
      '/images/img3.jpg',
      '/images/img4.jpg',
      '/images/img5.jpg',
      '/images/img6.jpg',
      '/images/img7.jpg',
      // Add more images as needed
    ],
    ratings: 4.5,
    title: 'Amazing Tour',
    description: 'This is a wonderful tour that takes you to amazing places.',
    price: 299.99,
  };

  return (
    <div>
      <main className="">
        <TourDetails
          images={tourData.images}
          ratings={tourData.ratings}
          title={tourData.title}
          description={tourData.description}
          price={tourData.price}
        />
      </main>
    </div>
  );
}

