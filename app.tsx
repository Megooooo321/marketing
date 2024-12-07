import React, { useState } from 'react';
import { Menu, X, Rocket, Code, Lightbulb, TrendingUp, Shield, CheckCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business needs.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: 'Innovation Consulting',
      description: 'Strategic guidance to help you stay ahead of industry trends.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"]
    },
    {
      title: "Help Center",
      links: ["Discord Server", "Twitter", "Facebook", "Contact Us"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Settings", "Guidelines"]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                TechCorp
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-hero min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              We help businesses grow through cutting-edge technology solutions and strategic innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform rotate-3 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Our office"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-6">
                About Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With over a decade of experience, we've helped hundreds of businesses
                transform their digital presence and achieve remarkable growth.
              </p>
              <div className="space-y-4">
                {[
                  'Industry-leading expertise',
                  'Innovative solutions',
                  'Dedicated support team',
                  'Proven track record'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help your business grow
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">contact@techcorp.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
              <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Innovation Street, Tech City</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md"
                />
              </div>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">TechCorp</h3>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((column, index) => (
              <div key={index}>
                <h3 className="text-white text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 TechCorp. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by TechCorp Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;