import "./resume.css";
function Resume() {
  return (
    <div>
      <div class="aa" style={{ display: "grid", justifyContent: "center" }}>
        <h1>Sujatha Govardhan</h1>
        <h5>Email:sujathagovardhan1703@gmail.com</h5>
      </div>
     
      <div className="navbar1">
        <h3 className="nv1"><a className="nv" href="#profilesummary">profile summary</a></h3>
        <h3 className="nv1"><a className="nv" href="#Education">education</a></h3>
        <h3 className="nv1"><a className="nv" href="#project1">project</a></h3>
        <h3 className="nv1"><a className="nv" href="#technical">skills</a></h3>
      </div>
      <div id="profilesummary" className="ps">
        <h1>Profile Summary</h1>
        <p>
          I am a recent graduate eager to develop my skills in front-end
          development, particularly with Microsoft Front-End Development React
          JavaScript (FED ReactJS). Currently expanding my knowledge in
          designing, building, and configuring applications to meet business
          process and application requirements. I am passionate about learning
          the intricacies of React and leveraging my problem-solving skills to
          contribute effectively to real-world projects. My educational
          background has provided me with a solid foundation in web development,
          and I am committed to continuously enhancing my expertise while
          collaborating with experienced professionals to deliver high-quality
          solutions.
        </p>
      </div>
      <div id="Education"className="edu">
        <h1>Education</h1>
        <h3>Narsimha Reddy Engineering College (2020-2024) </h3>
        <p>B.Tech (Computer science and Engineering College)</p>
        <h3>Sri Chaitanya Junior College(2018-2020)</h3>
        <p>Mpc</p>
      </div>
      <div id="project1" className="prj">
        <h1>Project</h1>
        <h2>
          TITLE- AI-Powered virtual Assistant for Health Care | Python, NumPy.{" "}
        </h2>
        <p>
          • AI-powered virtual assistants in healthcare serve various purpose,
          including patients monitoring. • Chatbot-The chatbots are
          conversational virtual assistants which automate interaction. • SQL-
          SQL used for handling the database.{" "}
        </p>
        <h2>
          TITLE- RNN and LSTM Networks for risk prediction of DYSLIPEDIMIA in
          Steel and Iron Workers.{" "}
        </h2>
        <p>
          • It is about the risk prediction for iron and steel workers to
          eradicate the disease called DYSLIPEDIMIA, predicted using RNN AND
          LSTM algorithms. • Combining AI and Big Data is research for risk
          prediction of a disease. • Operating Systems: Windows, Linux. •
          Software Requirements: Python IDLE 3.7 version and Anaconda 3.7 (or)
          Jupiter.
        </p>
      </div>
      <div  id="technical"className="skill">
        <h1>Skills</h1>
        <h3>Technical Skill: </h3>
        <p>• Programming Languages: Python, JavaScript </p>
        <p>• Web Development: HTML, CSS, React</p>
        <p>• Framework: Bootstrap </p>
        <p>• Database: SQL </p>
        <p>• Developer Tool: VS Code, Git, GitHub </p>
        <h3>Soft Skills: </h3>
        <p>
          • Communication • Flexibility • Creativity and Innovation • Teamwork •
          Leadership • Problem Solving.
        </p>
      </div>

    </div>
  );
}
export default Resume;
