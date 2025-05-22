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
import three from "../../../assets/threejs.png";
import blender from "../../../assets/blender.png";
import gsap from "../../../assets/gsap.png"
import express from "../../../assets/express.png"
import reactNative from "../../../assets/reactnative.png"
import postgreSQL from "../../../assets/postgresql.svg"
import nodeJS from "../../../assets/nodejs.svg"
import expo from "../../../assets/expo.webp"
import sportTrackr from "../../../assets/SportTrackr.png"
import sportTrackrMobile from "../../../assets/SportTrackrMobile.mp4"
import sportTrackrVid from "../../../assets/SportTrackr.mp4"
import wireframe from "../../../assets/wireframe.png"
import azure from "../../../assets/azure.png"
const Project = () => {
  const Projects = [
    {
      Name: "SportTrackr",
      img: sportTrackr,
      technology: {
        name: ["React","Express","NodeJS","PostgreSQL","React Native","Expo"],
        techimg: [reactimg,,express,nodeJS,postgreSQL,reactNative,expo],
      },
      type: "Fullstack & Mobile App",
      Description:
        "SportTrackr is the biggest project I have worked on to date. The idea originated from the frustration and unmet need in the market for recreational soccer league apps. SportTrackr addresses this by offering a mobile app for athletes, providing features like highlight reels, stats tracking, and more. Additionally, it offers a web app for league owners and employees to efficiently manage operations and keep everything running smoothly, while also offering them detailed statistics of how their leagues are doing. ",
      GitHub: "https://github.com/ElioFezollari/SportTrackr",
      pages: [
        {
          id:1,
          isVideo:true,
          img: northPole, 
          subtitle: "The web portion of SportTrackr",
          description: "This short video demonstrates the admin view of the web portion of SportTrackr. The platform not only provides a webpage for users to access information but also offers a comprehensive portal for various functions. The portal includes a dashboard on the left with multiple options such as league creation, graphical data visualizations, employee and athlete listings, transaction tracking, and more. It is built using React for the front-end, ExpressJS for the backend, and PostgreSQL as the database, ensuring a robust and scalable platform for all users.",
        },
        {
          id:1,
          isVideo:true,
          img: sportTrackrVid, 
          subtitle: "The web portion of SportTrackr",
          description: "This short video demonstrates the admin view of the web portion of SportTrackr. The platform not only provides a webpage for users to access information but also offers a comprehensive portal for various functions. The portal includes a dashboard on the left with multiple options such as league creation, graphical data visualizations, employee and athlete listings, transaction tracking, and more. It is built using React for the front-end, ExpressJS for the backend, and PostgreSQL as the database, ensuring a robust and scalable platform for all users. <a href='https://github.com/ZaveriAum/SportTrackr-backend/' target='_blank'>Github Link for SportTrackr Backend</br> ",
        },
        {
          id:3,
          isVideo:true,
          img:sportTrackrMobile,  
          subtitle: "Mobile LogIn And Sign Up",
          description: "This video demonstrates the login and signup page for the mobile app, <a href='https://github.com/ElioFezollari/SportTrackr-Mobile' target='_blank'>The repo for the mobile portion of the app</a>",
        },
        {
          id:4,
          subtitle: "Project Summary",
          description: "<br><a target='_blank' href='https://docs.google.com/document/d/1u9jRdpMX8NCdS6qL9GKZKfUp_mW9mBjl'>To view the full project summary please click Here</a> <br><br><b>Project Description</b><br> With the emergence of recreational sports league, there is an increasing demand for solutions to manage such leagues. SportTrackr is a centralized app that is distributed to different leagues for the sport of soccer that helps not only the league managers and owners but also the everyday people that use it, from employees to normal athletes. The league will track the stats of the players, notify them, allow them to book games and much more. It will allow league managers to manage their games separate fields and more. It will be the bridge that will bring players/hosts together and much more.",
        },
        {
          id:5,
          subtitle: "Project Vision",
          description: "<br><a target='_blank' href='https://docs.google.com/document/d/1XhMuJ424uaBtSHZDhvX_O0Lu5epk5fGS'>To view the full project vision please click here</a> <br><br> <b>Purpose</b><br> The purpose of this Project Vision Document is to outline the objectives, goals, and strategic direction for the development of SportTrackr. This document acts as a roadmap for coordinating the app's vision and objectives among users, developers, and stakeholders.SportTrackr is designed to provide football players with a vibrant, interactive platform where they can engage, compete, and express their love of the game. With the help of innovative and entertaining features, the app seeks to provide players with a dynamic 'playground' where they can locate leagues, keep score, and interact with teammates. The goal of this app's release is to build a group of players that share similar interests and wish to play football in a friendly and competitive atmosphere.",
        },
        {
          id:6,
          subtitle: "Requirements Analysis and Design ",
          description: "<br> <a target='_blank' href='https://docs.google.com/document/d/16tFhZLTPvHYsoteHYRhtQTjRgeQDpWxo/edit?tab=t.0#bookmark=id.30j0zll'>To view the full Requirements Analysis and Design  please click here</a> <br><br> <b>Introduction</b> <br> For football enthusiasts, SportTrackr is a dynamic software that helps to find competitive leagues, connect with fellows, and monitor performance. Whether you're a novice or an aspiring champion, the app makes it easy to track scores, join leagues, and have conversations with teammates in real time. SportTrackr guarantees that you stay connected and  enjoy every second of the game with an intuitive UI and cutting-edge features.<br><br> <b>Purpose</b><br> This document defines the essential high-level software requirements for SportTrackr, focusing on core capabilities essential to the system's functionality and usability. The requirements outline key functions for three main user groups—athletes, teams, and league organizers/employees.",
        },
        {
          id:7,
          subtitle: "Project Plan",
          description: "<br> <a target='_blank' href='https://docs.google.com/document/d/1WYAKhMz2wh1gPxhKrklzSJDoHECwfzpo/edit'>To view the full Project Plan please click here</a> <br><br> <b>Objective</b> <br>SportTrackr is a platform for football enthusiasts to easily find competitive leagues, track personal performance, and stay connected with their team members. The software is a way to smoothly organize, participate, and share football games and stats. Creating both enjoyable and competitive football groups with the help of SportTrackr, football players in all levels enjoy a better football experience by keeping track of their own accomplishments, interacting with teammates.<br><b>Corporate Goals Addressed</b> <br>User Interaction: It aims to boost user engagement by creating a highly dynamic platform with real-time updates, league tracking, and social sharing features. Creating a devoted community of football players.Market Expansion: The software aims to both casual and competitive players including social elements and user-friendly.",
        },
        {
          id:8,
          subtitle:"Project/Business Requirements",
          description:"<br> <a target='_blank' href='https://docs.google.com/document/d/1-r8B2CrDoI-rb0ZA2vODTxsRPq99Uk9d/edit'>To view the full Project/Business Requirements please click here</a> <br><br> <b>SportTrackr Application</b><br>Area designed to manage leagues, player data, payments, match and league statistics. Serves as a centralized system for multiple entities including athletes, league organizers, teams, and employees<br><br><b>Athlete</b><br>Participant of the app who can view their statistics, their teams, matches and leagues information, join a team and update their preferences. Athletes can download highlights and their data <br><br><b>Scope</b><br>Athlete must be able to make payments online <br>Athlete must be able to see his/her data, league and match data online..."
        },
        {
          id:9,
          img: wireframe, 
          subtitle: "SportTrackr Wireframes",
          description: "<br><a target='_blank' href='https://www.figma.com/design/HWCtLXIZCJVHe0IzQH4qJi/Sport-Tracker?node-id=0-1&p=f&t=MqARVmvo0EOYPJeb-0'>Click here to view the wireframes in more detail figma</a>"
        },
        {
          id:10,
          subtitle: "Status Reports",
          description: "<br>Status Report One: <a target='_blank' href='https://docs.google.com/document/d/12e8BDZ3lf7VbFODq7QmSaAzJVJuPUKQ3c9FvSNG9VQ8/edit?tab=t.0'>Click Here To View Status Report One</a><br><br>Status Report Two: <a target='_blank' href='https://docs.google.com/document/d/1EeqqM77HurpkbNMJ69qu0SJkG8i2QcE_/edit'>Click Here To View Status Report Two</a>"
        }
      ],
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
    },
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
          "Azure"
        ],
        techimg: [
          aspCore,
          javascript,
          html,
          css,
          bootstrap,
          csharp,
          sqlserver,
          azure
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
