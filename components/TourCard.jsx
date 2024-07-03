// components/Card.js
import React from 'react';
import { Card , CardHeader } from '@nextui-org/react';
import Image from 'next/image';

const TourCard = ({ title, description }) => {
    return (
        <Card
                   
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          alt={description}
          className="object-cover"
          height={300}
          width={300}
          src={'/images/background-2.jpg'}
        />
     
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    <p className="text-tiny uppercase font-bold">{description}</p>
    <small className="text-default-500">{title}</small>
    <h4 className="font-bold text-large">{title}</h4>
  </CardHeader>
      </Card>
    );
};

export default TourCard;
