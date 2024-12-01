import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Download,
  Brain,
  Users,
} from 'lucide-react';
import fotodiri from '../assets/fotodiri1.jpeg';
import cv from '../assets/cv.pdf';

const MainPage = () => {
  const skills = [
    { name: 'Project Management', level: 80 },
    { name: 'ReactJS', level: 75 },
    { name: 'Team Management', level: 80 },
    { name: 'Python, C++', level: 85 },
    { name: 'Adaptability', level: 90 },
    { name: 'Microsoft Word & Excel', level: 90 },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'World Scout Jamboree - Indonesian Delegate',
      location: 'SaeManGeum, South Korea',
      description: 'Represented Indonesia at the international scouting event, fostering global connections and cultural exchange.',
    },
    {
      year: '2024',
      title: 'Potluck Event Staff at GADEENG',
      location: 'Jakarta, Indonesia',
      description: 'Managed logistics and coordination for a large-scale event, developing leadership and organizational skills.',
    },
    {
      year: '2024',
      title: 'Exercise FTUI Internship',
      location: 'Jakarta, Indonesia',
      description: 'Frontend development intern working with React.js and TailwindCSS on real-world projects.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
            Muhammad Fatih Zamzami
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Electrical Engineering Student at Universitas Indonesia
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href={cv} 
              download 
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={fotodiri}
                alt="Muhammad Fatih Zamzami"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                As an Electrical Engineering student at Universitas Indonesia, I combine my technical knowledge with creative problem-solving skills. My passion lies in the intersection of technology and innovation, where I strive to create meaningful solutions that impact society.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Brain className="w-8 h-8 text-yellow-500 mb-2" />
                  <h3 className="font-semibold mb-1">Technical Skills</h3>
                  <p className="text-gray-600">Frontend Development & Engineering Fundamentals</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-yellow-500 mb-2" />
                  <h3 className="font-semibold mb-1">Leadership</h3>
                  <p className="text-gray-600">Project Management & Team Collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-yellow-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Journey & Achievements</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-1/4">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold inline-block">
                    {achievement.year}
                  </div>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-2">{achievement.location}</p>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-yellow-400">Let's Connect</h3>
              <p className="text-gray-300">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="mailto:muhfatihzamzami@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition duration-300">
                  <Mail className="w-6 h-6" />
                  <span>muhfatihzamzami@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/fatihzamzami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition duration-300">
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn: Fatih Zamzami</span>
                </a>
                <a href="https://github.com/enclaire1443" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition duration-300">
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a href="https://instagram.com/fthzami" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition duration-300">
                  <Instagram className="w-6 h-6" />
                  <span>Instagram: fthzami</span>
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;