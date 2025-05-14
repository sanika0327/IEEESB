import "./App.css";
import Navbar from "./Navbar"
import { useState, useEffect, useRef, useCallback } from "react"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Home() {
  const [hoveredMember, setHoveredMember] = useState(null);

  // State for the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);

  // Sample event data
  const events = 
  [
    {
      id: 1,
      title: "EVENT 1",
      date: "June 15, 2024",
      location: "Grand Ballroom",
      time: "7:00 PM - 11:00 PM",
      description: "Join us for an elegant evening of fine dining, live music, and networking with industry professionals.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Gala"
    },
    {
      id: 2,
      title: "EVENT 2",
      date: "July 8-10, 2024",
      location: "Spa & Wellness Center",
      time: "9:00 AM - 5:00 PM",
      description: "A three-day retreat focused on mindfulness, yoga, and holistic health practices led by expert practitioners.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Wellness"
    },
    {
      id: 3,
      title: "EVENT 3",
      date: "August 22, 2024",
      location: "Executive Conference Hall",
      time: "10:00 AM - 4:00 PM",
      description: "Featuring keynote speakers from Fortune 500 companies discussing innovation and leadership strategies.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Conference"
    },
    {
      id: 4,
      title: "EVENT 4",
      date: "September 5, 2024",
      location: "Vineyard Terrace",
      time: "6:00 PM - 9:00 PM",
      description: "Sample premium wines from around the world paired with gourmet appetizers prepared by our executive chef.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Culinary"
    },
    {
      id: 5,
      title: "EVENT 5",
      date: "October 12, 2024",
      location: "Garden Pavilion",
      time: "11:00 AM - 3:00 PM",
      description: "Explore our wedding venues and meet with vendors to plan your perfect day at KingSukh.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Showcase"
    },
  ]

  // Carousel logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, events.length - visibleCards);

  const scrollToIndex = (index) => {
    if (isAnimating || !carouselRef.current) return;
    
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    
    const cardWidth = carouselRef.current.offsetWidth / visibleCards;
    carouselRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  const handleScrollEnd = useCallback(() => {
    if (!carouselRef.current) return;
    
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth / visibleCards;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, visibleCards]);

  useEffect(() => 
  {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scrollend', handleScrollEnd);
      return () => carousel.removeEventListener('scrollend', handleScrollEnd);
    }
  },
  [handleScrollEnd]
 );

  const achievements = 
  [
    {
      id: 1,
      name: "Dr.Mrs. K. R.Joshi",
      designation: "Principal",
      achievements: [
        "Chair, IEEE Signal Processing Society Chapter-Pune Section",
        "Felicitated on Occasion of World Telecommunication Day organized by IEEE WIE, IEEE Communication Society and Institution of Engineers (India), Pune Center in May 2012.",
        
      ],
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "	Dr.Mrs.  R. S.Kamathe",
      designation: "HOD,E&TC	",
      achievements: [
        "Chair, IEEE Signal Processing Society Chapter, Pune Section for the year 2017, 2018.",
        "Chair, IEEE-WIE (Women in Engineering) Affinity Group, Pune Section for the year 2013.",
        "Secretary, IEEE- SP (Signal Processing) Society Chapter, Pune Section for the years 2013-2016.",
        "IEEE Student Branch Counselor, PES’s Modern College of Engineering for 2008-2017.",
        "IEEE Student Branch Chair, PES’s Modern College of Engineering from 2008.",
        "IEEE Student Branch Mentor, PES’s Modern College of Engineering since 2003 to 2007.",
      ],
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Mr. Anish Walke",
      designation: "Chair of IEEE PES MCOE",
      achievements: [
        " Awardee of the IEEE Pune Section Student Member Volunteer Award.",
        " Co-Student Section Representative (Co-SSR) of IEEE Pune Section.",
      
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 4,
      name: "Ms. Sneha Shrikumar",
      designation: "Student Member",
      achievements: [
        "Section Student Representative (SSR) IEEE Pune Section in year 2017",
        "Student Chair for IEEE Student Branch, PES’s Modern College of Engineering from 2008.",
      
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 5,
      name: "	Mr. Shubhankar Niphadkar",
      designation: "Student Member",
      achievements: [
        "Section Student Representative (SSR) IEEE Pune Section in year 2019",
        "Student Chair for IEEE Student Branch, PES’s Modern College of Engineering in year 2019.",
  
      ],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 6,
      name: "Ms. Gauri Warkhade",
      designation: "Student Member",
      achievements: [
        "Xtreme Ambassador of IEEE Pune Section in year 2019",
        
      ],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 7,
      name: "Mr. Shreyas Joshi",
      designation: "Student Member",
      achievements: [
        "Student Chair for IEEE Student Branch, PES’s Modern College of Engineering in year 2020.",
        
      ],
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 8,
      name: "Mr. Bhavesh Kothari",
      designation: "Student Member",
      achievements: [
        "Student Chair for IEEE Student Branch, PES’s Modern College of Engineering in year 2021.",
        
      ],
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 9,
      name: "Mr. Vineet Patil",
      designation: "Student Member",
      achievements: [
        "Student Vice Chair for IEEE Student Branch, PES’s Modern College of Engineering in year 2023 -24 .",
        
      ],
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    
  ]

  const importantMembers = [
    {
      id: 1,
      name: "Dr.Mrs. R. S.Kamathe",
      position: "Vice Principal, Branch Counselor",
      photo:
        "https://i.imgur.com/VbTMxKr.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-k-r-joshi",
      email: "principal@moderncoe.edu.in",
    },
    {
      id: 2,
      name: "Mr. Anish Walke",
      position: "Chair of IEEE PESMCOE, Co-SSR",
      photo:
        "https://i.imgur.com/LgD7QkQ.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-r-s-kamathe",
      email: "hod.etc@moderncoe.edu.in",
    },
    {
      id: 3,
      name: "Mr. Rushabh Bhalgat",
      position: "Vice-Chair-Person",
      photo:
        "https://i.imgur.com/Ns8PIJF.jpeg",
      linkedin: "https://www.linkedin.com/in/sneha-shrikumar",
      email: "sneha.shrikumar@moderncoe.edu.in",
    },
    {
      id: 4,
      name: "Mrs. Aditi Bansude",
      position: "WiE Chair-Person",
      photo:
        "https://i.imgur.com/B1G33JA.jpeg",
      linkedin: "https://www.linkedin.com/in/shubhankar-niphadkar",
      email: "shubhankar.niphadkar@moderncoe.edu.in",
    },
  ]

  const additionalMembers = [
    { name: "Rushabh Bhalgat", position: "Vice-Chair-Person" },
    { name: "Aditi Bansude", position: "WiE Chair-Person " },
    { name: "Adish Gujrathi", position: "Secretary " },
    { name: "Shreyas Kumbhar", position: "Joint Secretary " },
    { name: "Devyani Chakre", position: "Treasurer " },
    { name: "Ranjeet Wadkar", position: " Management Team (Head)" },
    { name: " Soham Sarde ", position: "Management Team " },
    { name: "Sakshi Shinde ", position: "Management Team" },
    { name: "Shreyas Gourkar ", position: "Management Team " },
    { name: "Varad Burhade", position: "Publicity & Design Team (head)" },
    { name: "Sinjini Budhkar", position: "Publicity & Design Team (head)" },
    { name: "Gayatri Jaydeokar", position: "Publicity & Design Team " },
    { name: "Vipassana Shirsath", position: "Technical Team (Head)" },
    { name: " Aarya Dhaygude ", position: "Technical Team" },
    { name: "Asmi Patil ", position: "Technical Team" },
    { name: "Atharva Chitale ", position: "Technical Team" },
    { name: "Pallavi Sable ", position: "Membership Team (Head)" },
    { name: "Disha Walke", position: "Membership Team " },
    { name: "Arjun Panse", position: "Membership Team " },
    { name: "Krishnakant Rachutkar ", position: "Membership Team " },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="text-center">

        </div>
        <div className="flex items-center justify-center h-full text-center text-white bg-opacity-50">
    <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to IEEE Student Branch PES MCOE</h1>
  </div>
      </section>
    

      {/* Overview */}
      {/* Overview */}
<section
  id="overview"
  className="relative inset-0 w-full h-screen py-20"
>
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/team.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.2, // Adjust opacity as needed
    }}
  ></div>

  {/* Content Container */}
  <div className="relative max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8">Overview</h2>
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-4">
        <p className="text-black">
        Welcome to the official website of the IEEE Power & Energy Society (PES) Student Branch at Modern College of Engineering (MCOE), Pune! Since its establishment in 2003, our branch (STB62911) has been a vibrant hub for all aspiring innovators at MCOE. We believe in fostering a dynamic learning environment where students from all disciplines can actively participate in a diverse range of technical and social activities, including organizing engaging competitions, insightful seminars, and hands-on workshops.

        </p>
        <p className="text-black">
        Our core objectives revolve around:
        <ul>
        <li><b>Enhancing Member Engagement:</b> Building strong relationships and fostering a sense of community among our members.</li>
        <li><b>Operational Excellence:</b> Improving efficiency and effectiveness within our branch and in collaboration with the IEEE Member & Geographic Activities Board (MGA).</li>
        <li><b>Collaborative Growth:</b> Strengthening partnerships with other organizational units within IEEE and beyond.</li>
        </ul></p>

        <p>Furthermore, we are proud to host the IEEE Women in Engineering (WIE) Student Branch ( STA62911), dedicated to promoting women in engineering and inspiring future generations. Aligned with the global IEEE WIE mission, we strive to create a supportive community where women can thrive in technical disciplines.</p>

      </div>

      {/* Right-side div with same background image */}
      <div
        className="bg-gray-200 rounded-lg h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/team.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  </div>
</section>

      {/* Upcomming Events */}
      <section id="upcomingevents" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Upcoming Events</h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 transition-all ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button 
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 transition-all ${
                  currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Cards Container */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 pt-2 px-2 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className="snap-start flex-shrink-0"
                  style={{ width: 'calc(100% / ${visibleCards})' }}
                >
                  {/* Event Card */}
                  <div className="flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute top-4 left-4 bg-cyan-600/90 text-white text-xs font-semibold py-1 px-2 rounded-full z-10">
                        {event.category}
                      </div>
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-1">{event.title}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-5 line-clamp-2">{event.description}</p>
                      
                      <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === index ? 'w-6 bg-cyan-600' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={'Go to slide ${index + 1}'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section id="pastevents" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Past Events</h2>

     {/* Scrollable Frame */}
      <div className="border-4 border-gray-300 rounded-xl p-4 shadow-lg bg-white h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
       <div className="space-y-6 p-2">
        {[
          {
            title: "7 days ESP32 Workshop",
            description: "Space for Description",
            image: "img6.jpg",
          },
          {
            title: "Electro Saga",
            description: "Space for Description",
            image: "img10.jpg",
          },
          {
            title: "Power BI Workshop",
            description: "Space for Description",
            image: "img3.jpg",
          },
        ].map((event, index) => (
          <div key={index} className="flex bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300">
            <img src={event.image} alt={event.title} className="w-40 h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">Achievements</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center p-4 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                    <p className="text-gray-600">{person.designation}</p>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-md font-medium text-gray-700 mb-2">Notable Achievements:</h4>
                  <ul className="space-y-2">
                    {person.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* Gallery */}
<section id="gallery" className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">Gallery</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        { id: 1, src: "img1.jpg", alt: "Tech Event 1" },
        { id: 2, src: "img2.jpg", alt: "Workshop" },
        { id: 3, src: "img3.jpg", alt: "Robotics Competition" },
        { id: 4, src: "img4.jpg", alt: "Hackathon" },
        { id: 5, src: "img5.jpg", alt: "AI Showcase" },
        { id: 6, src: "img6.jpg", alt: "VR Experience" },
        { id: 7, src: "img7.jpg", alt: "Workshop" },
        { id: 8, src: "img8.jpg", alt: "Workshop" },
        { id: 9, src: "img9.jpg", alt: "Workshop" },
        { id: 10, src: "img10.jpg", alt: "Workshop" },
        
      ].map((item) => (
        <div key={item.id} className="relative group overflow-hidden shadow-lg">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48  object-cover border-3 border-transparent transition-all duration-300 hover:border-gray-700"
            />
          </div>
      ))}
    </div>
  </div>
</section>
      {/* Committee */}
      <section id="committee" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Committee</h2>

          {/* Important Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {importantMembers.map((member) => (
              <div
                key={member.id}
                className="relative group"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-end p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">{member.position}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a href={'mailto:${member.email}'} className="text-white hover:text-blue-400 transition-colors">
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {additionalMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <h3 className="text-lg font-semibold truncate">{member.name}</h3>
                <p className="text-sm text-gray-600 truncate">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">IEEE</h3>
              <p className="text-gray-400">Progressive Modern College Of Engineering</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  <a href="#upcomingevents">Upcoming Events</a>
                </li>
                <li>
                  <a href="#pastevents">Past Events</a>
                </li>
                <li>
                  <a href="#achievements">Achievements</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#committee">Committee</a>
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
                <a href="https://www.instagram.com/ieee_pesmcoe/" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/ieee-pes-mcoe-student-branch/" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 IEEE PESMCOE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}