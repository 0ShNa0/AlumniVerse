import React from 'react';
import { Search } from 'lucide-react';

const styles = `
  .alumni-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .alumni-card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    height: 3rem;
    background: linear-gradient(90deg, #4776e6 0%, #8e54e9 100%);
  }

  .avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid white;
    margin-top: -2rem;
    object-fit: cover;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 0.5rem;
  }

  .department-select {
    appearance: none;
    background-color: #f0f4f8;
    border: 2px solid #4776e6;
    border-radius: 8px;
    padding: 0.5rem 2rem 0.5rem 1rem;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234776e6'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 1.2rem auto;
  }

  .department-select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(71, 118, 230, 0.3);
  }
  .social-icons svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #4776e6;
  }

   .search-container {
    display: flex;
    align-items: center;
    background-color: #f0f4f8;
    border-radius: 8px;
    padding: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom:20px
  }

  .search-input {
    flex-grow: 1;
    border: none;
    background: transparent;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
  }

  .search-button {
    background-color: #4776e6;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .search-button:hover {
    background-color: #3a5bbf;
  }
`;

const AlumniCard = ({ name, department, description, avatar }) => (
  <div className="alumni-card">
    <div className="card-header"></div>
    <div className="p-4 flex flex-col items-center flex-grow">
      <img src={avatar} alt={name} className="avatar mb-2"/>
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-sm text-blue-500">{department}</p>
      <p className="text-xs text-gray-600 text-center mt-1 mb-2">{description}</p>
    </div>
    <div className="social-icons pb-4">
      <a href="#"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg></a>
      <a href="#"><svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
      <a href="#"><svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
    </div>
  </div>
);

const AlumniDirectory = () => {
  const alumni = [
    { name: "Ankur Singh", department: "AIML", description: "Ex-DailyPe (YC W23) | Backend Developer | AWS | ⭐@CodeChef | C++ Programmer | Machine Learning", avatar: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" },
    { name: "Krish Tiwary", department: "CSE", description: "Ex Intern @GMR Hyderabad Int. Airport | Ex Student Trainee @ IIIT-Hyd", avatar: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" },
    { name: "Shreya", department: "AIML", description: "SWE at google | Tech Enthusiast| ML developer", avatar: "https://media.istockphoto.com/id/685132223/photo/businesswoman-with-braided-hair-over-white.jpg?s=612x612&w=0&k=20&c=HmsQrf9AuqHReVZ7GNAggi5udYR7-wW7OzhcHFaqU6Y=" },
    { name: "Ritivk", department: "CSE", description: "Cloud Practioner and cyber security expert | Pursuing PHD from IISC Bangalore", avatar: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=" },
    { name: "Maitri", department: "IT", description: "Developer | Manager at Microsoft | Carrer Advisor", avatar: "https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE="  },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Alumni</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="search-container mb-4 relative w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 marginBottom: 20px">
            <input
              type="text"
              placeholder="Search by Name..."
              className="search-input"
            />
            <Search className="search-button" size={20} />
          </div>
          {/* <div className="w-full md:w-48  ">
            <select className="department-select w-full ">
                <option value="">Department</option>
                <option value="AIML">AIML</option>
                <option value="CSE">CSE</option>
                <option value="ISE">ISE</option>
            </select>
          </div>   */}
        </div>
        <div className="alumni-grid">
          {alumni.map((alum, index) => (
            <AlumniCard key={index} {...alum} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AlumniDirectory;
