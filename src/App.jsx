import "./App.css";
import Navbar from "./Navbar"



export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Welcome to KingSukh</h1>
          <p className="text-xl text-gray-600">Luxury Stays & Memorable Experiences</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-600">
                Experience luxury and comfort at KingSukh. Our premium accommodations and exceptional service ensure an
                unforgettable stay for all our guests.
              </p>
              <p className="text-gray-600">
                Located in the heart of the city, we offer easy access to major attractions while providing a peaceful
                retreat from urban life.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-[400px]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-3 gap-8">
            {["Room Service", "Spa & Wellness", "Fine Dining"].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Rooms</h2>
          <div className="grid grid-cols-3 gap-8">
            {["Deluxe Room", "Executive Suite", "Presidential Suite"].map((room) => (
              <div key={room} className="space-y-4">
                <div className="bg-gray-200 rounded-lg h-[300px]" />
                <h3 className="text-xl font-semibold">{room}</h3>
                <p className="text-gray-600">Luxurious accommodation with modern amenities and stunning views.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Gallery</h2>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-[200px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">123 Hotel Street, City Name, Country</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 900 706 2180</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@kingsukh.com</p>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg" />
              <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">KingSukh</h3>
              <p className="text-gray-400">Luxury stays & memorable experiences</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#rooms">Rooms</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Hotel Street</li>
                <li>City Name, Country</li>
                <li>+91 900 706 2180</li>
                <li>info@kingsukh.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 KingSukh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}