"use client";
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
const roles: string[] = ["Developer", "Chess Player", "Physicist", "Abros3006"];

const Index: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [delta, setDelta] = useState<number>(200);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset(); // Use the stored form reference
      } else {
        const error = await response.json() as { message?: string };
        throw new Error(error.message ?? 'Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (currentRole) {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));
          setDelta(100);
        } else {
          setText(currentRole.substring(0, text.length - 1));
          setDelta(100);
        }
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setDelta(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setDelta(100);
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, delta]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Atharva Bangle
          </h1>
          <div className="h-20">
            <p className="text-xl md:text-3xl text-primary">
              I am a{' '}
              <span className="inline-block min-w-[20px] border-r-2 border-primary animate-pulse">
                {text}
              </span>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent opacity-40" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-border rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-up">About</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-muted-foreground leading-relaxed">
            I have a passion for building digital solutions using JavaScript and Python. I enjoy working on everything from web applications to exploring AI and machine learning. With a background in physics and data science, I bring a problem-solving mindset to every project. I love combining creativity and logic, whether it’s through coding, playing chess, or analyzing complex systems. When I’m not coding, you’ll find me exploring historic sites, playing rock and roll, or getting lost in a great novel or movie.</p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Full-Stack Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate and dedicated software developer with a strong foundation in computer science and hands-on experience in Full-Stack development.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4" data-aos="fade-left">
            <div className="bg-border p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <span className="font-semibold min-w-32 text-primary">Birthday:</span>
                  <span>30 June 2002</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="font-semibold min-w-32 text-primary">City:</span>
                  <span>Pune, India</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="font-semibold min-w-32 text-primary">Degree:</span>
                  <span>Master in Computer Application</span>
                </li>
                <li className="flex items-center text-white">
                  <span className="font-semibold min-w-32 text-primary">Email:</span>
                  <span>atharvabangle@gmail.com</span>
                </li>
              </ul>
            </div>
            <p className="text-muted-foreground italic" data-aos="fade-up">
              Looking for opportunities to leverage my expertise and to grow as a full-stack developer.
            </p>
          </div>
        </div>
        <div className="py-16">
            <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-up">My Interests</h2>
            <p className="text-muted-foreground mb-12" data-aos="fade-up">
              I have a diverse range of interests that keep me engaged and inspired.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Programming",
                  content: "I am passionate about coding and enjoy solving complex problems through programming. Whether it's developing web applications or exploring new technologies, programming is a constant source of learning and satisfaction for me."
                },
                {
                  title: "Physics",
                  content: "With a background in Physics, I find the subject fascinating. The principles and theories of physics help me understand the world better and stimulate my curiosity about how things work."
                },
                {
                  title: "Chess",
                  content: "Chess is one of my favorite pastimes. The strategic thinking and foresight required in the game help sharpen my mind and improve my problem-solving skills. I love participating in chess competitions and continuously honing my skills."
                },
                {
                  title: "Backpacking and Travelling",
                  content: "Exploring new places and experiencing different cultures is something I cherish. Backpacking allows me to connect with nature, meet new people, and create unforgettable memories."
                },
                {
                  title: "Watching Movies",
                  content: "I enjoy watching movies as a way to relax and unwind. Whether it's an action-packed thriller or a thought-provoking drama, movies offer a great escape and a chance to experience diverse storytelling."
                },
                {
                  title: "Eating Food",
                  content: "I am a foodie at heart. I love trying out new cuisines and dishes, and I believe that food is an essential part of exploring different cultures. Whether it's a gourmet meal or street food, I'm always excited to try something new."
                }
              ].map((interest, index) => (
                <div 
                  key={index}
                  className="bg-secondary p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold text-primary mb-4">{interest.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{interest.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="py-16" id='contact'>
            <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-up">Contact Me</h2>
            
            <div className="max-w-2xl mx-auto" data-aos="fade-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-primary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-border text-white border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-primary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-border text-white border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full p-3 rounded-lg bg-border text-white border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white bg-primary rounded-lg hover:bg-hover transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Index;