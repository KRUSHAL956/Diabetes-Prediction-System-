import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone, FaQuora } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/tab-icon.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-start items-start px-4 md:px-15 lg:px-100 space-y-8 md:space-y-0">
        <div className="w-full md:w-2/4 space-x-4 flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-0">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="Diabetes Prediction Logo" className="w-16 h-16 md:w-48 md:h-24 mr-4" />
          </Link>
          <div>
            <Link to="/" className="text-2xl font-semibold mb-2 hover:text-gray-400 transition-colors duration-300">
              Diabetes Prediction
            </Link>
            <p className="text-gray-400 text-lg mb-4">This website provides a platform for users to predict their likelihood of developing diabetes based on various factors..</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <li><Link to="/" className="text-white hover:text-gray-400 transition-colors duration-300">Home</Link></li>
            <li><Link to="/FAQ" className="text-white hover:text-gray-400 transition-colors duration-300">FAQ</Link></li>
            <li><Link to="/prediction" className="text-white hover:text-gray-400 transition-colors duration-300">Prediction</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-400 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0 md:px-10 lg:px-50">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center text-gray-400 text-lg mb-4">
            <FaMapMarkerAlt className="mr-2 text-2xl" />
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Sector 19, road, opp. Khandoba Temple Road, Sector 3, Airoli, Navi Mumbai, Maharashtra 400708</a>
          </div>
          <div className="flex items-center text-gray-400 text-lg mb-4">
            <FaEnvelope className="mr-2 text-2xl" />
            <a href="mailto:abc@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">pratapr338@gmail.com</a>
          </div>
          <div className="flex items-center text-gray-400 text-lg">
            <FaPhone className="mr-2" />
            <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">+91 8955025154</a>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <div className="flex space-x-4 text-2lg">
            <a href="https://twitter.com/Krushal_956" 
            target="_blank"
                rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300">
          
              <img src='https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=ffffff' alt="X Logo" className="w-8 h-8" />
            </a>
            <a href="https://shorturl.at/AMoLK" 
            target="_blank"
                rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="http://www.linkedin.com/in/pratap-rajput-503a57286/" 
            target="_blank"
                rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/aqdas_.siddiqui_?igsh=cTg2bDdweWx6ZWZ6" 
            target="_blank"
                rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300">
              <FaQuora className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20">
        <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2025 DMCE Diabetes Prediction.</p>
        </div>
        <div>
          <p className="text-gray-400 hover:text-white transition-colors duration-300 text-center md:text-right">

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
