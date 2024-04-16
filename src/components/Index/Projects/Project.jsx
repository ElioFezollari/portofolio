import './Project.css'
import ProjectCard from "./ProjectCard/ProjectCard"
import northPole from'../../../assets/Northpole.png' 
import pathFusion from'../../../assets/PathFusion.png'
import treasureMaze from'../../../assets/TreasureMaze.png'
const Project = () =>{
    const Projects = [
        {
            "Name" : "NorthPole Booking",
            "img" : northPole,
            "technology" : ["Asp.netCore","Javascript","html","Css","Bootstrap","Csharp","SqlServer","AJAX"],
            "type" : "Fullstack",
            "Description": "NorthPole Booking is a full stack asp.net core application for a booking website that includes bookings for flights, cars and hotels (which include rooms). This application utilizes LINQ, Entity Framework Core, Entity Framework Core identity and more! Its features include but not limited to the ability Sign Up/Logging in,sending emails (through the SendGrid API),Authorization and Authentication,Role Management,Reviews by regular users,Addition of new Items by admins,Booking    ",
            "GitHub" : "https://github.com/ElioFezollari/NorthPole-Booking"
        },
        {
            "Name" : "PathFusion",
            "img" : pathFusion,
            "technology" : ["PHP","Javascript","Html","Css","MYSQL","XAMPP","AJAX"],
            "type" : "Fullstack",
            "Description":  "PathFusion is a Learning Path creator and browser similar to LinkedIN learning, where users create, share and learn from each others learning paths. These learning paths are a detailed step by step guide on topics chosen by the user, and also categorized by them in different language, topics and more.The backend is completely built in PHP and the database is MYSQL.This app includes user login and registration,Upvote/Downvote System,User Comments,its own CMS and more all built from scratch using the mentioned technologies ",
            "GitHub" : "https://github.com/ElioFezollari/PathFusion"
        },
        {
            "Name" : "Treasure Maze",
            "img" : treasureMaze,
            "technology" : ["Java"],
            "type" : "VideoGame",
            "Description":  "Treasure Maze is a game built using only Java,JavaSwing and JavaFX. The purpose of the game is to collect the 7 treasures in the randomly-generated maze,and later escape through the door to advance to the next level.You have to do all of this without touching the purple walls which reset your position.The game also includes game saving and loading.",
            "GitHub" : "https://github.com/ElioFezollari/Treasure-Maze"
        }
    ]
    return(
        <section className='project-sec-wrapper'>
            <div className="project-wrapper">
            <h2>Some of my work!</h2>

            <div className='projects'>
            {Projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    projectName={project.Name} 
                    projectImg={project.img} 
                    projectTechnologies={project.technology} 
                    projectType={project.type} 
                    projectDescription={project.Description} 
                    projectGithub={project.GitHub} 
                />
            ))}
                        </div>
            </div>
        </section>
    )
}

export default Project