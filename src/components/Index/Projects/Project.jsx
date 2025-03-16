import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import northPole from "../../../assets/Northpole.png";
import pathFusion from "../../../assets/PathFusion.png";
import treasureMaze from "../../../assets/TreasureMaze.png";
import aspCore from "../../../assets/Asp.netCore.svg";
import javascript from "../../../assets/javascript.svg";
import html from "../../../assets/html.svg";
import css from "../../../assets/css.svg";
import bootstrap from "../../../assets/bootstrap.svg";
import csharp from "../../../assets/csharp.svg";
import sqlserver from "../../../assets/sqlserver.svg";
import php from "../../../assets/php.svg";
import mysql from "../../../assets/mysql.svg";
import xampp from "../../../assets/ajax.svg";
import ajax from "../../../assets/xampp.svg";
import java from "../../../assets/java.svg";
import reactimg from "../../../assets/react.svg";
import reactrouter from "../../../assets/reactrouter.svg";
import framermotion from "../../../assets/framer-motion.svg";
import mongodb from "../../../assets/mongodb.svg";
import nestJs from "../../../assets/nestjs.svg";
import PetExpo from "../../../assets/PetExpo.png";
import room from "../../../assets/room.png"
import roomVid from "../../../assets/room.mp4"
import three from "../../../assets/threejs.png";
import blender from "../../../assets/blender.png";
import gsap from "../../../assets/gsap.png"

const Project = () => {
  const Projects = [
    {
      Name: "NorthPole Booking",
      img: northPole,
      technology: {
        name: [
          "Asp.netCore",
          "Javascript",
          "html",
          "Css",
          "Bootstrap",
          "Csharp",
          "SqlServer",
          "AJAX",
        ],
        techimg: [
          aspCore,
          javascript,
          html,
          css,
          bootstrap,
          csharp,
          sqlserver,
          ajax,
        ],
      },

      type: "Fullstack",
      Description:
        "NorthPole Booking is a full stack asp.net core application for a booking website that includes bookings for flights, cars and hotels (which include rooms). This application utilizes LINQ, Entity Framework Core, Entity Framework Core identity and more! Its features include but not limited to the ability Sign Up/Logging in,sending emails (through the SendGrid API),Authorization and Authentication,Role Management,Reviews by regular users,Addition of new Items by admins,Booking    ",
      GitHub: "https://github.com/ZaveriAum/COMP2139-Assignment1",
      pages: [
        {
          id:1,
          img: northPole, 
          subtitle: "Page 1 Overview",
          description: "This page showcases the home page of the booking application. Users can view available flight, car, and hotel options.",
        },
        {
          id:2,
          img: northPole, 
          subtitle: "Booking Page",
          description: "The booking page allows users to choose flights, cars, and hotels, and finalize their bookings.",
        },
        {
          id:3,
          img: northPole, 
          subtitle: "Admin Dashboard",
          description: "The admin dashboard allows admins to manage users, bookings, and website content.",
        },
      ],
    },
    {
      Name: "PathFusion",
      img: pathFusion,
      technology: {
        name: ["PHP", "Javascript", "Html", "Css", "MYSQL", "XAMPP", "AJAX"],
        techimg: [php, javascript, html, css, mysql, xampp, ajax],
      },

      type: "Fullstack",
      Description:
        "PathFusion is a Learning Path creator and browser similar to LinkedIN learning, where users create, share and learn from each others learning paths. These learning paths are a detailed step by step guide on topics chosen by the user, and also categorized by them in different language, topics and more.The backend is completely built in PHP and the database is MYSQL.This app includes user login and registration,Upvote/Downvote System,User Comments,its own CMS and more all built from scratch using the mentioned technologies ",
      GitHub: "https://github.com/ElioFezollari/PathFusion",
    },
    {
      Name: "Treasure Maze",
      img: treasureMaze,
      technology: { name: ["Java"], techimg: [java] },
      type: "VideoGame",
      Description:
        "Treasure Maze is a game built using only Java,JavaSwing and JavaFX. The purpose of the game is to collect the 7 treasures in the randomly-generated maze,and later escape through the door to advance to the next level.You have to do all of this without touching the purple walls which reset your position.The game also includes game saving and loading.",
      GitHub: "https://github.com/ElioFezollari/Treasure-Maze",
    },
    {
      Name: "PetExpo",
      img: PetExpo,
      technology: {
        name: ["React", "ReactRouter", "framer-motion","mongodb",'nestJs'],
        techimg: [reactimg, reactrouter, framermotion,mongodb,nestJs],
      },
      type: "Fullstack",
      Description:
        "Pet Expo is a fullstack website built with React in the frontend, NestJs in the backend, and MongoDB as the database.The goal of this web application is to showcase dogs,cats and birds, added by the admins in the admin dashboard.This web application is a SPA that utilizes react-router for routing and framer-motion for beautiful animations.The backend is built with NestJS (Express framework) and a few smaller libraries.",
      GitHub: "https://github.com/ElioFezollari/PetExpo-Fullstack",
    },
    {
      Name: "3D Room Portofolio",
      img: room,
      technology: {
        name: ["React","ThreeJS","Blender","GSAP"],
        techimg: [reactimg,three,blender,gsap],
      },
      type: "WebGL Frontend Website",
      Description:
        "This website is a 3d recreation of my real room. The room model was created with Blender, while the website itself is built using React, and R3F with GSAP for the camera animations. It is a simple yet unique website that provides an interactive and immersive experience, allowing visitors to explore a virtual version of my space. This website reflects the implementation of what I've learned from WebGL and 3D modeling.",
      GitHub: "https://github.com/ElioFezollari/3D-Portofolio",
      pages: [
        {
          id:1,
          isVideo: true,
          img: roomVid,  
          subtitle: "Room Tour Video",
          description: "A walkthrough of the 3D room portfolio.",
        },]
    },
  ];
  return (
    <section className="project-sec-wrapper">
      <div className="project-wrapper">
        <h2>Some of my work!</h2>

        <div className="projects">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.Name}
              projectImg={project.img}
              projectTechnologies={project.technology}
              projectType={project.type}
              projectDescription={project.Description}
              projectGithub={project.GitHub}
              pages={project.pages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
