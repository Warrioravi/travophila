import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-300 .rajdhani-semibold text-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {/* Logo */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <div className="flex items-center justify-center">
              <Image src="/images/travophila.png" alt="Travophila Logo" width={300} height={100} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-2/4 lg:text-center mb-4 lg:mb-0">
            <nav className="flex flex-wrap justify-center space-x-4">
              <a href="/" className="text-lg hover:text-gray-400 transition duration-300">Home</a>
              <a href="/about" className="text-lg hover:text-gray-400 transition duration-300">About Us</a>
              <a href="/tours" className="text-lg hover:text-gray-400 transition duration-300">Tours</a>
              <a href="/contact" className="text-lg hover:text-gray-400 transition duration-300">Contact Us</a>
            </nav>
          </div>

          {/* Contact Information */}
          {/* <div className="w-full lg:w-1/4 lg:text-right">
            <div className="flex flex-col items-end">
              <p className="text-lg mb-2">Contact Us:</p>
              <p className="mb-2">Email: info@travophila.com</p>
              <p className="mb-2">Phone: +91 8448948133</p>
              <p>Address: Royal Nest, Forest View, Shiv Nagar, Dharamshala, Himachal Pradesh</p>
            </div>
          </div> */}
        </div>

        {/* Made with Love in India */}
        <div className="text-center mt-8">
          <p className="text-lg">Made with <span className="text-red-500">&hearts;</span> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
