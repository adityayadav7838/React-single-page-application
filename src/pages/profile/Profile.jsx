import React from "react";
import "./Profile.module.css";
import { useParams } from "react-router-dom";
import { useApi } from "../../customHooks/CustomHooks";

const cardData = [
  { name: "Amit Sharma", image: "https://i.pravatar.cc/100?img=1", role: "Frontend Dev" },
  { name: "Priya Verma", image: "https://i.pravatar.cc/100?img=2", role: "Backend Dev" },
  { name: "Rahul Singh", image: "https://i.pravatar.cc/100?img=3", role: "UI Designer" },
  { name: "Neha Gupta", image: "https://i.pravatar.cc/100?img=4", role: "Full Stack" },
];

const Profile = () => {
  let {id}=useParams(); //
  console.log(id);
  let user =useApi('http://localhost:6060/user/${id}')
  console.log(user)
  return (
    <div 
    className="profile-main">
      <h1></h1>
      {/* Left Rectangle - Profile Summary */}
      <div className="left-container">
        <img src="https://i.pravatar.cc/150?img=12" alt="profile" className="main-profile-img" />
        <h2>Aditya Yadav</h2>
        <p>MCA Student | Java Enthusiast</p>
        <button>Edit Profile</button>
      </div>

      {/* Right Rectangle - Sections with Cards */}
      <div className="right-container">
        {[1, 2, 3, 4].map((section) => (
          <div className="section" key={section}>
            <h3>Section {section}</h3>
            <div className="card-wrapper">
              {cardData.map((card, index) => (
                <div className="profile-card" key={index}>
                  <img src={card.image} alt="avatar" className="card-img" />
                  <h4>{card.name}</h4>
                  <p>{card.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
