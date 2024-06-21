import './Menu.css'
const Menu = () => {
    return(
        <div className="menu">
                  <a target="_blank" href="https://drive.google.com/file/d/17fM40WuKRWGRoDkf80ua5Fc6EtrAMJsw/view?usp=drive_link"><span>Get my Cover Letter</span></a>
        <a  target="_blank"href="https://drive.google.com/file/d/1hslDzJaYH3ZPRC2W-lD7tkcR-LHisRqf/view?usp=drive_link"><span>Get my Resume</span></a>
        <a  target="_blank" href="https://drive.google.com/file/d/1DUHNOnq2whZsYuE6J-XQuat2a1vIOwIK/view?usp=drive_link"><span>Get my Transcripts</span></a>
        <a target='_blank' href='https://github.com/ElioFezollari'>Visit my Github</a>
        <a target='_blank' href='https://www.linkedin.com/in/elio-fezollari-46a041289/'>Visit my Linkedin</a>
        <div className='overlay'></div>
        </div>
    )
}

export default Menu