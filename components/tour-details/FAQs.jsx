import { Accordion, AccordionItem } from "@nextui-org/react";

const faqData = [
  {
    question: "What is the best time to visit Sangla, Chitkul, and Rakchham?",
    answer: "The best time to visit Sangla, Chitkul, and Rakchham is from May to October when the weather is pleasant and the roads are accessible."
  },
  {
    question: "What permits are required for visiting these areas?",
    answer: "Indian tourists do not need permits to visit Sangla, Chitkul, and Rakchham. However, foreign nationals need an Inner Line Permit to travel to certain areas."
  },
  {
    question: "Is it safe to travel to Sangla, Chitkul, and Rakchham?",
    answer: "Yes, it is generally safe to travel to Sangla, Chitkul, and Rakchham. However, it is important to be prepared for the remote location and high-altitude conditions."
  },
  {
    question: "What kind of food is available in Sangla, Chitkul, and Rakchham?",
    answer: "You will find a mix of Indian and Tibetan cuisine, including momos, thukpa, and local Himachali dishes. Vegetarian options are widely available."
  },
  {
    question: "Do I need to carry cash, or are there ATMs available?",
    answer: "It is recommended to carry sufficient cash as ATMs are sparse and may not always be functional in remote areas like Sangla, Chitkul, and Rakchham."
  },
  {
    question: "What should I pack for a trip to Sangla, Chitkul, and Rakchham?",
    answer: "Pack warm clothing, trekking shoes, personal hygiene items, a first aid kit, and essential documents. A detailed packing list is available in our 'Things to Carry' section."
  },
  {
    question: "How can I stay connected with family and friends while in Sangla, Chitkul, and Rakchham?",
    answer: "Connectivity can be limited. It is advisable to inform family and friends in advance about potential communication gaps. Carry a fully charged power bank."
  },
  {
    question: "Are there medical facilities available in Sangla, Chitkul, and Rakchham?",
    answer: "Basic medical facilities are available in Sangla and Chitkul. For any serious medical conditions, it is recommended to travel to the nearest major town."
  },
  {
    question: "What activities can I do in Sangla, Chitkul, and Rakchham?",
    answer: "You can indulge in trekking, sightseeing, nature walks, and photography. The scenic beauty and cultural heritage of the area offer ample opportunities for exploration."
  },
  {
    question: "How is the road condition to Sangla, Chitkul, and Rakchham?",
    answer: "The roads to Sangla, Chitkul, and Rakchham are generally good but can be challenging at times due to the terrain. It is advisable to travel with an experienced driver."
  }
];

const FAQ = () => {
  return (

     
      <Accordion>
        {faqData.map((item, index) => (
          <AccordionItem key={index} title={item.question}>
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>

  );
};

export default FAQ;
