import "./Professional.css";

const Professional = () => {
  return (
    <section className="professional-wrapper">
      <h2>Work Experience</h2>
      <div className="work-div">
        <div className="title-div">
          <h2>Research Assistant</h2>
          <p>George Brown College</p>
          <p>Contract - Toronto, Ontario, Canada</p>
          <p>May 2025 - </p>
        </div>
        <div className="work-description">
          <ul>
            {" "}
            <li>
              {" "}
              Built and maintained administrative interfaces using React,
              streamlining internal workflows and data management for
              non-technical stakeholders.{" "}
            </li>{" "}
            <li>
              {" "}
              Integrated Firebase Authentication and Firestore to securely
              manage user roles, permissions, and dynamic data access within the
              admin dashboard.{" "}
            </li>{" "}
            <li>
              {" "}
              Developed custom dashboards and data visualization components to
              monitor key application metrics and user activity.{" "}
            </li>{" "}
            <li>
              {" "}
              Automated backend processes and Firebase Cloud Functions to handle
              data validation, logging, and real-time updates for admin
              operations.{" "}
            </li>{" "}
            <li>
              {" "}
              Collaborated with cross-functional teams to align admin tools with
              evolving product needs, ensuring scalability and security best
              practices.{" "}
            </li>{" "}
            <li>
              Deployed and maintained the full admin platform on cloud infrastructure, leveraging Firebase Hosting, Firestore, and Cloud Functions to ensure secure, scalable, and high-availability deployment.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-div">
        <div className="title-div">
          <h2>Student Researcher</h2>
          <p>George Brown College</p>
          <p>Contract - Toronto, Ontario, Canada</p>
          <p>February 2025 - April 2025</p>
        </div>
        <div className="work-description">
          <ul>
            <li>
              Developed a research-based application using React Native,
              Firebase, and ExpressJS.
            </li>
            <li>
              Designed and maintained database schemas in Firebase, optimizing
              data retrieval and storage for scalability and efficiency.
            </li>
            <li>
              Collaborated with faculty advisors and peers to present project
              findings and deliverables to the client, providing regular
              progress updates and receiving feedback.
            </li>
            <li>
              Tested and debugged application code, resolving issues related to
              performance and functionality.
            </li>
            <li>
              Documented technical specifications and user guidelines for future
              development and potential project expansion.
            </li>
          </ul>
        </div>
      </div>
      <div className="work-div">
        <div className="title-div">
          <h2>Tutor</h2>
          <p>George Brown College</p>
          <p>Part Time - Toronto, Ontario, Canada</p>
          <p>January 2024 - February 2025</p>
        </div>
        <div className="work-experience">
          <ul>
            <li>
              Accumulated over 385 hours of one-on-one tutoring experience,
              providing academic support in a variety of subjects, including
              HTML, CSS, JavaScript, C#, Python, Java, PHP, MySQL, OracleSQL,
              mathematics, data structures, algorithms, web development
              (ASP.NET, Spring, and Spring Boot), and version control with
              Git/GitHub.
            </li>
            <li>
              Created a supportive and engaging learning environment, helping
              students gain confidence in their skills and achieve academic
              success.
            </li>
            <li>
              Guided students through complex concepts in programming languages,
              database technologies, and mathematical problems, adapting
              teaching methods to suit individual learning styles.
            </li>
            <li>
              Assisted students with troubleshooting coding problems, debugging
              issues, and understanding core principles in programming and web
              development.
            </li>
            <li>
              Created strong relationships with students, encouraging
              self-sufficiency and continued learning outside of tutoring
              sessions.
            </li>
            <li>
              Developed personalized learning plans for students based on their
              academic needs and goals, ensuring efficient use of tutoring time.
            </li>
            <li>
              Although no longer employed in this role, my time as a tutor was a
              rewarding experience, contributing to the academic growth of
              numerous students.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Professional;
