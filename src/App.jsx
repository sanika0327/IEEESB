"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"
import Navbar from "./Navbar"
import "./App.css"

export default function App() {
  const [hoveredMember, setHoveredMember] = useState(null)

  // State for the carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef(null)
  const [visibleCards, setVisibleCards] = useState(3)

  // Sample event data
  const events = [
    {
      id: 1,
      title: "EVENT 1",
      date: "June 15, 2024",
      location: "Grand Ballroom",
      time: "7:00 PM - 11:00 PM",
      description:
        "Join us for an elegant evening of fine dining, live music, and networking with industry professionals.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Gala",
    },
    {
      id: 2,
      title: "EVENT 2",
      date: "July 8-10, 2024",
      location: "Spa & Wellness Center",
      time: "9:00 AM - 5:00 PM",
      description:
        "A three-day retreat focused on mindfulness, yoga, and holistic health practices led by expert practitioners.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Wellness",
    },
    {
      id: 3,
      title: "EVENT 3",
      date: "August 22, 2024",
      location: "Executive Conference Hall",
      time: "10:00 AM - 4:00 PM",
      description:
        "Featuring keynote speakers from Fortune 500 companies discussing innovation and leadership strategies.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Conference",
    },
    {
      id: 4,
      title: "EVENT 4",
      date: "September 5, 2024",
      location: "Vineyard Terrace",
      time: "6:00 PM - 9:00 PM",
      description:
        "Sample premium wines from around the world paired with gourmet appetizers prepared by our executive chef.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Culinary",
    },
    {
      id: 5,
      title: "EVENT 5",
      date: "October 12, 2024",
      location: "Garden Pavilion",
      time: "11:00 AM - 3:00 PM",
      description: "Explore our wedding venues and meet with vendors to plan your perfect day at KingSukh.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Showcase",
    },
  ]

  // Carousel logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, events.length - visibleCards)

  const scrollToIndex = (index) => {
    if (isAnimating || !carouselRef.current) return

    const newIndex = Math.max(0, Math.min(index, maxIndex))
    setIsAnimating(true)
    setCurrentIndex(newIndex)

    const cardWidth = carouselRef.current.offsetWidth / visibleCards
    carouselRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    })

    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrev = () => scrollToIndex(currentIndex - 1)
  const handleNext = () => scrollToIndex(currentIndex + 1)

  const handleScrollEnd = useCallback(() => {
    if (!carouselRef.current) return

    const scrollPosition = carouselRef.current.scrollLeft
    const cardWidth = carouselRef.current.offsetWidth / visibleCards
    const newIndex = Math.round(scrollPosition / cardWidth)

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }, [currentIndex, visibleCards])

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scrollend", handleScrollEnd)
      return () => carousel.removeEventListener("scrollend", handleScrollEnd)
    }
  }, [handleScrollEnd])

  const achievements = [
    {
      id: 1,
      name: "Dr.Mrs. K. R.Joshi",
      designation: "Principal",
      achievements: [
        "Chair, IEEE Signal Processing Society Chapter-Pune Section",
        "Felicitated on Occasion of World Telecommunication Day organized by IEEE WIE, IEEE Communication Society and Institution of Engineers (India), Pune Center in May 2012.",
      ],
      image:
        "https://webweb.ams3.cdn.digitaloceanspaces.com/data/modern-college-of-eng-pune.webweb.ai.in/1726209919_7e5d67ecd0c4b9527e4a.png",
    },
    {
      id: 2,
      name: "Dr.Mrs. R. S.Kamathe",
      designation: "HOD,E&TC",
      achievements: [
        "Chair, IEEE Signal Processing Society Chapter, Pune Section for the year 2017, 2018.",
        "Chair, IEEE-WIE (Women in Engineering) Affinity Group, Pune Section for the year 2013.",
        "Secretary, IEEE- SP (Signal Processing) Society Chapter, Pune Section for the years 2013-2016.",
        "IEEE Student Branch Counselor, PES's Modern College of Engineering for 2008-2017.",
        "IEEE Student Branch Chair, PES's Modern College of Engineering from 2008.",
        "IEEE Student Branch Mentor, PES's Modern College of Engineering since 2003 to 2007.",
      ],
      image: "https://i.imgur.com/VbTMxKr.jpeg",
    },
    {
      id: 3,
      name: "Mr. Anish Walke",
      designation: "Chair of IEEE PES MCOE",
      achievements: [
        "Awardee of the IEEE Pune Section Student Member Volunteer Award.",
        "Co-Student Section Representative (Co-SSR) of IEEE Pune Section.",
      ],
      image: "https://i.imgur.com/LgD7QkQ.jpeg",
    },
    {
      id: 4,
      name: "Mr. Vineet Patil",
      designation: "Student Member",
      achievements: [
        "Student Vice Chair for IEEE Student Branch, PES's Modern College of Engineering in year 2023 -24 .",
      ],
      image: "https://i.postimg.cc/5ybSK3fN/Vinnetimg.jpg",
    },
    {
      id: 5,
      name: "Ms. Vaishnavi Nair",
      designation: "Student Member",
      achievements: ["Former Co Section Student Representative, IEEE Pune Section for year 2020"],
      image: "https://i.postimg.cc/Qt4n7wQZ/Vaishnavi.jpg",
    },
    {
      id: 6,
      name: "Mr. Shubhankar Niphadkar",
      designation: "Student Member",
      achievements: [
        "Section Student Representative (SSR) IEEE Pune Section in year 2019",
        "Student Chair for IEEE Student Branch, PES's Modern College of Engineering in year 2019.",
      ],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 7,
      name: "Mr. Shreyas Joshi",
      designation: "Student Member",
      achievements: ["Student Chair for IEEE Student Branch, PES's Modern College of Engineering in year 2020."],
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 8,
      name: "Mr. Bhavesh Kothari",
      designation: "Student Member",
      achievements: ["Student Chair for IEEE Student Branch, PES's Modern College of Engineering in year 2021."],
      image:
        "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 9,
      name: "Ms. Sneha Shrikumar",
      designation: "Student Member",
      achievements: [
        "Section Student Representative (SSR) IEEE Pune Section in year 2017",
        "Student Chair for IEEE Student Branch, PES's Modern College of Engineering from 2008.",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
  ]

  const importantMembers = [
    {
      id: 1,
      name: "Dr.Mrs. R. S.Kamathe",
      position: "Vice Principal, Branch Counselor",
      photo: "https://i.imgur.com/VbTMxKr.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-k-r-joshi",
      email: "principal@moderncoe.edu.in",
    },
    {
      id: 2,
      name: "Mr. Anish Walke",
      position: "Chair of IEEE PESMCOE, Co-SSR",
      photo: "https://i.imgur.com/LgD7QkQ.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-r-s-kamathe",
      email: "hod.etc@moderncoe.edu.in",
    },
    {
      id: 3,
      name: "Mr. Rushabh Bhalgat",
      position: "Vice-Chair-Person",
      photo: "https://i.imgur.com/Ns8PIJF.jpeg",
      linkedin: "https://www.linkedin.com/in/sneha-shrikumar",
      email: "sneha.shrikumar@moderncoe.edu.in",
    },
    {
      id: 4,
      name: "Mrs. Aditi Bansude",
      position: "WiE Chair-Person",
      photo: "https://i.imgur.com/B1G33JA.jpeg",
      linkedin: "https://www.linkedin.com/in/shubhankar-niphadkar",
      email: "shubhankar.niphadkar@moderncoe.edu.in",
    },
  ]

  const additionalMembers = [
    { name: "Aditi Bansude", position: "WiE Chair-Person" },
    { name: "Adish Gujrathi", position: "Secretary" },
    { name: "Shreyas Kumbhar", position: "Joint Secretary" },
    { name: "Devyani Chakre", position: "Treasurer" },
    { name: "Ranjeet Wadkar", position: "Management Team (Head)" },
    { name: "Soham Sarde", position: "Management Team" },
    { name: "Sakshi Shinde", position: "Management Team" },
    { name: "Shreyas Gourkar", position: "Management Team" },
    { name: "Varad Burhade", position: "Publicity & Design Team (head)" },
    { name: "Sinjini Budhkar", position: "Publicity & Design Team (head)" },
    { name: "Gayatri Jaydeokar", position: "Publicity & Design Team" },
    { name: "Vipassana Shirsath", position: "Technical Team (Head)" },
    { name: "Aarya Dhaygude", position: "Technical Team" },
    { name: "Asmi Patil", position: "Technical Team" },
    { name: "Atharva Chitale", position: "Technical Team" },
    { name: "Pallavi Sable", position: "Membership Team (Head)" },
    { name: "Disha Walke", position: "Membership Team" },
    { name: "Arjun Panse", position: "Membership Team" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="text-center"></div>
        <div className="flex items-center justify-center h-full text-center text-white bg-opacity-50">
          <h1 className="hero-title">Welcome to IEEE Student Branch PES MCOE</h1>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="overview-section">
        {/* Background Image with Overlay */}
        <div className="overview-bg"></div>

        {/* Content Container */}
        <div className="overview-content">
          <h2 className="section-title">Overview</h2>
          <div className="overview-grid">
            <div className="overview-text">
              <p className="overview-paragraph">
                Welcome to the official website of the IEEE Power & Energy Society (PES) Student Branch at Modern
                College of Engineering (MCOE), Pune! Since its establishment in 2003, our branch (STB62911) has been a
                vibrant hub for all aspiring innovators at MCOE. We believe in fostering a dynamic learning environment
                where students from all disciplines can actively participate in a diverse range of technical and social
                activities, including organizing engaging competitions, insightful seminars, and hands-on workshops.
              </p>
              <div className="objectives-section">
                <p className="objectives-intro">Our core objectives revolve around:</p>
                <ul className="objectives-list">
                  <li>
                    <b>Enhancing Member Engagement:</b> Building strong relationships and fostering a sense of community
                    among our members.
                  </li>
                  <li>
                    <b>Operational Excellence:</b> Improving efficiency and effectiveness within our branch and in
                    collaboration with the IEEE Member & Geographic Activities Board (MGA).
                  </li>
                  <li>
                    <b>Collaborative Growth:</b> Strengthening partnerships with other organizational units within IEEE
                    and beyond.
                  </li>
                </ul>
              </div>

              <p className="overview-paragraph">
                Furthermore, we are proud to host the IEEE Women in Engineering (WIE) Student Branch ( STA62911),
                dedicated to promoting women in engineering and inspiring future generations. Aligned with the global
                IEEE WIE mission, we strive to create a supportive community where women can thrive in technical
                disciplines.
              </p>
            </div>

            {/* Right-side div with same background image */}
            <div className="overview-image"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcomingevents" className="events-section">
        <div className="events-container">
          <h2 className="section-title text-center ">Upcoming Events</h2>
          <div className="stay-tuned">Stay Tuned for Updates!</div>
        </div>
      </section>

      {/* Past Events */}
      <section id="pastevents" className="events-section">
        <div className="events-container">
          <h2 className="section-title">Past Events</h2>

          {/* Scrollable Frame */}
          <div className="past-events-frame">
            <div className="past-events-content">
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
                <div key={index} className="past-event-card">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="past-event-image" />
                  <div className="past-event-content">
                    <h3 className="past-event-title">{event.title}</h3>
                    <p className="past-event-description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="achievements-section">
        <div className="achievements-container">
          <h2 className="section-title">Achievements</h2>

          <div className="achievements-grid">
            {achievements.map((person) => (
              <div key={person.id} className="achievement-card">
                <div className="achievement-header">
                  <div className="achievement-avatar">
                    <img src={person.image || "/placeholder.svg"} alt={person.name} className="achievement-image" />
                  </div>
                  <div className="achievement-info">
                    <h3 className="achievement-name">{person.name}</h3>
                    <p className="achievement-designation">{person.designation}</p>
                  </div>
                </div>

                <div className="achievement-content">
                  <h4 className="achievement-subtitle">Notable Achievements:</h4>
                  <ul className="achievement-list">
                    {person.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        <span className="achievement-bullet"></span>
                        <span className="achievement-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <h2 className="section-title">Gallery</h2>

          <div className="gallery-grid">
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
              <div key={item.id} className="gallery-item">
                <img src={item.src || "/placeholder.svg"} alt={item.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section id="committee" className="committee-section">
        <div className="committee-container">
          <h2 className="section-title">Committee</h2>

          {/* Important Members */}
          <div className="important-members-grid">
            {importantMembers.map((member) => (
              <div
                key={member.id}
                className="member-card"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img src={member.photo || "/placeholder.svg"} alt={member.name} className="member-image" />
                <div className="member-overlay">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <div className="member-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={`mailto:${member.email}`} className="member-link">
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Members */}
          <div className="additional-members-grid">
            {additionalMembers.map((member, index) => (
              <div key={index} className="additional-member-card">
                <h3 className="additional-member-name">{member.name}</h3>
                <p className="additional-member-position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">IEEE</h3>
              <p className="footer-text">Progressive Modern College Of Engineering</p>
            </div>
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#overview" className="footer-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#upcomingevents" className="footer-link">
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a href="#pastevents" className="footer-link">
                    Past Events
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="footer-link">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="footer-link">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#committee" className="footer-link">
                    Committee
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-contact">
                <li className="contact-name">Anish Walke (Chair)</li>
                <li className="contact-number">Contact Number: 8767469071</li>
                <li className="contact-name">Rushabh Bhalgat (Vice-Chair)</li>
                <li className="contact-number">Contact Number: 7420061651</li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Follow Us</h3>
              <div className="footer-social">
                <a href="https://www.instagram.com/ieee_pesmcoe/" className="footer-link">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/ieee-pes-mcoe-student-branch/" className="footer-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 IEEE PESMCOE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
