const ThingsToCarry = () => {
    const items = [
      "Warm Clothing (Thermals, Jackets, Sweaters)",
      "Trekking Shoes",
      "Woolen Caps, Gloves, and Socks",
      "Sunscreen Lotion and Lip Balm",
      "Sunglasses",
      "First Aid Kit",
      "Water Bottle",
      "Snacks and Energy Bars",
      "Torch/Headlamp",
      "Personal Hygiene Items (Wet Wipes, Sanitizer)",
      "Backpack and Rain Cover",
      "Camera and Extra Batteries",
      "Power Bank",
      "Important Documents (ID Proof, Permits)",
      "Medicines (If Any)",
      "Sleeping Bag (For Treks)",
      "Tent (For Treks)",
      "Trekking Poles (For Treks)",
      "Extra Layer of Clothes",
      "Hand and Foot Warmers"
    ];
  
    return (
      <div className="w-full p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold  text-center">Things to Carry</h2>
        <ul className="list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-white">{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ThingsToCarry;
  