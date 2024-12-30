import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TopVolunteers = () => {
  const [active, setActive] = useState(3);
  const items = [
    {
      img: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      stars: "★★★★★",
      text: "Volunteering with River Keepers Initiative has been incredibly rewarding. Contributing to river clean-ups and seeing the positive impact on the environment has been an unforgettable experience. Proud to be part of this effort!",
      name: "- Arjun Sharma",
      jobTitle: "Environmental Volunteer",
      location: "Location: Bengaluru, India"
    },
    {
      img: "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?ga=GA1.1.713761379.1679213202&semt=ais_hybrid",
      stars: "★★★★",
      text: "Joining DEIRV NGO as a volunteer has opened up so many learning opportunities. Working with children and helping provide educational resources has been heartwarming. Grateful to contribute to this cause!",
      name: "- Priya Desai",
      jobTitle: "Community Outreach Volunteer",
      location: "Location: Mumbai, India"
    },
    {
      img: "https://img.freepik.com/free-vector/gradient-professional-sarah-smith-linkedin-personal-profile-picture_742173-13011.jpg?ga=GA1.1.713761379.1679213202&semt=ais_hybrid",
      stars: "★★★★★",
      text: "Volunteering with Wildlife Warriors has been life-changing. Protecting local habitats and raising awareness about endangered species has been truly fulfilling. I'm thrilled to be part of this amazing team!",
      name: "- Rohan Patel",
      jobTitle: "Wildlife Conservation Volunteer",
      location: "Location: Ahmedabad, India"
    },
    {
      img: "https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?ga=GA1.1.713761379.1679213202&semt=ais_hybrid",
      stars: "★★★★",
      text: "My experience with the Coastal Cleanup Project has been incredible. Working alongside dedicated volunteers to preserve our beaches has expanded my environmental awareness. Excited to keep making a difference!",
      name: "- Neha Iyer",
      jobTitle: "Beach Cleanup Volunteer",
      location: "Location: Chennai, India"
    },
    {
      img: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
      stars: "★★★★★",
      text: "Habitat for Humanity has provided an amazing platform to give back. Helping build homes for families in need is deeply rewarding and has enriched my perspective on community support.",
      name: "- Rahul Singh",
      jobTitle: "Construction Volunteer",
      location: "Location: Hyderabad, India"
    },
    {
      img: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      stars: "★★★★★",
      text: "Volunteering with Meals on Wheels has been a wonderful experience. Delivering meals to seniors and connecting with people in my community has been heartwarming. Excited to continue this journey!",
      name: "- Kavita Nair",
      jobTitle: "Food Delivery Volunteer",
      location: "Location: Pune, India"
    },    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % items.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    loadShow();
  }, [active]);

  const loadShow = () => {
    const itemsElement = document.querySelectorAll('.slider .item');
    itemsElement[active].style.transform = `none`;
    itemsElement[active].style.zIndex = 1;
    itemsElement[active].style.filter = 'none';
    itemsElement[active].style.opacity = 1;
    // Show after
    let stt = 0;
    for (let i = active + 1; i < itemsElement.length; i++) {
      stt++;
      itemsElement[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      itemsElement[i].style.zIndex = 0;
      itemsElement[i].style.filter = 'blur(5px)';
      itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = (active - 1); i >= 0; i--) {
      stt++;
      itemsElement[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      itemsElement[i].style.zIndex = 0;
      itemsElement[i].style.filter = 'blur(5px)';
      itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  return (
    <div className="mb-20 dark:bg-black dark:text-white">
      <div className="flex items-center justify-center p-20 mb-10">
        <h1 className="md:text-6xl text-4xl pl-3 pr-3 text-center font-bold text-blue-700 dark:text-white">
          Top Volunteers
        </h1>
      </div>



      <div className="slider dark:bg-black dark:text-white" style={{ position: 'relative', marginTop: '100px', width: '100%', height: '550px', overflow: 'hidden' }}>
        {items.map((item, index) => (
          <div className="item max-sm:!w-[300px] max-sm:!h-[430px]" key={index} style={{
            position: 'absolute',
            width: '350px',
            height: '500px',
            textAlign: 'justify',
            background: '#1E40AF', // Dark green to light yellow gradient
            borderRadius: '12px',
            padding: '20px',
            transition: '0.5s',
            left: 'calc(50% - 150px)',
            top: '0',
            marginBottom: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
            overflow: 'hidden', // Ensures the image does not overflow
            color: 'white',
          }}>
            <img
              src={item.img}
              alt="User Avatar"
              className='w-[150px] h-[150px] rounded-lg object-cover mb-[20px] cursor-pointer max-sm:h-[120px] mb-0'
              style={{
                transition: 'transform 0.3s ease, filter 0.3s ease',
                border: '3px solid #d0e7b0' // Green border for the image
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.filter = 'brightness(1.1)'; // Brightness effect on hover
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
              }}
            />
            <div className="stars text-[#ffd700] text-2xl mt-auto max-sm:mt-2">{item.stars}</div>
            <p className='text-center mb-[20px] max-sm:text-xs max-sm:mb-0'>{item.text}</p>
            <h2 className='mb-[10px] text-xl font-semibold max-sm:mb-1 max-sm:text-lg'>{item.name}</h2>
            <div className="job-title text-[#007BFF] font-bold mb-[5px]">{item.jobTitle}</div>
            <div className="location text-[#e4e4e4] mb-[15px] max-sm:mb-1">{item.location}</div>
          </div>


        ))}

        {// Changed Buttons to motion.button provided by framer
        // whileHover is a framer specific attribute
        // It displaces buttons by 10px on hover for that nice slide animation
        }
        <motion.button
          id="next"
          className=" absolute top-[40%] text-blue-900 bg-none border-none text-6xl font-mono font-bold opacity-80 transition-opacity z-10 right-[50px] max-sm:text-white max-sm:text-2xl max-sm:right-2"
          onClick={() =>
            setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev))
          }
          whileHover={{ x: 10, color: '#00B2CA', opacity: 1 }}
        >
          {'>>'}
        </motion.button>
        <motion.button
          id="prev"
          className=" absolute top-[40%] text-blue-900 bg-none border-none text-6xl font-mono font-bold opacity-80 transition-opacity z-10 left-[50px] max-sm:text-white max-sm:text-2xl max-sm:left-2"
          onClick={() => setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev))}
          whileHover={{ x: -10, color: '#00B2CA', opacity: 1 }}
        >
          {' '}
          {'<<'}
        </motion.button>
      </div>
    </div>
  );
};

export default TopVolunteers;