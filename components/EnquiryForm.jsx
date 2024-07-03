import { useState } from 'react';


const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="w-full max-w-lg mt-2 p-2 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2 text-center">Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-2 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-2 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Preferred Dates</label>
          <input
            type="text"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-2 py-2 mt-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full px-2 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Submit
        </button>
        {/* <Button radius="full" className="w-[100%] rajdhani-semibold h-16 bg-gradient-to-r from-sky-500 from-10% to-emerald-500 to-90% text-white rounded p-2">
                        Request Callback
                    </Button> */}
      </form>
    </div>
  );
};

export default EnquiryForm;
