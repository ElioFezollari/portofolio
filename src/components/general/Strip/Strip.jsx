import './Strip.css'
const Strip = ({content,type}) =>{
    const technologies = ["Java","Csharp","Html","Css","Javascript","Ajax","PHp",'bootstrap','mysql','sqlserver','xampp','react','github-white','nodejs','express']
    if(type == "text"){
    return(
        <div className="strip">
            <p>{content}</p>
        </div>
    )}
    else if(type === "technologies"){
        return(
            <div className='strip' id='tech-strip'>
                <h5>Technologies I am proficent at include but are not limited to :</h5>
            <div>
            {technologies.map((tech, index) => (
                <img className='project-tech-img' src={`src/assets/${tech}.svg`} alt={tech} key={index} />
            ))}
            </div>
            </div>
        )
    }
}
export default Strip