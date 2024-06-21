import './Strip.css'
import aspCore from "../../../assets/Asp.netCore.svg";
import javascript from "../../../assets/javascript.svg";
import html from "../../../assets/html.svg";
import css from "../../../assets/css.svg";
import csharp from "../../../assets/csharp.svg";
import sqlserver from "../../../assets/sqlserver.svg";
import php from "../../../assets/php.svg";
import mysql from "../../../assets/mysql.svg";
import xampp from "../../../assets/ajax.svg";
import java from "../../../assets/java.svg";
import reactimg from "../../../assets/react.svg";
import nodejs from "../../../assets/nodejs.svg";
import githubWhite from "../../../assets/github-white.svg";
import mongodb from "../../../assets/mongodb.svg";

const Strip = ({ content, type }) => {
    const technologies = [
        { name: "Java", img: java },
        { name: "Csharp", img: csharp },
        { name: "Html", img: html },
        { name: "Css", img: css },
        { name: "Javascript", img: javascript },
        { name: "Php", img: php },
        { name: "Mysql", img: mysql },
        { name: "Sqlserver", img: sqlserver },
        { name: "AspNetCore", img: aspCore },
        { name: "React", img: reactimg },
        { name: "Nodejs", img: nodejs },
        { name: "GithubWhite", img: githubWhite },
        { name: "Mongodb", img: mongodb }
    ];

    if (type === "text") {
        return (
            <div className="strip">
                <p>{content}</p>
            </div>
        );
    } else if (type === "technologies") {
        return (
            <div className="strip" id="tech-strip">
                <h5>Technologies I am proficient at include but are not limited to:</h5>
                <div>
                    {technologies.map((tech, index) => (
                        <img className="project-tech-img" src={tech.img} alt={tech.name} key={index} />
                    ))}
                </div>
            </div>
        );
    }
};

export default Strip;
