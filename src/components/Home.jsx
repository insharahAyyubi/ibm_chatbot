import '../App.css';

function Home() {
    return (
        <div className="mainDiv">
          <div className="leftComp">
            <img src="/logo_main.png" alt="robo-img" />
          </div>
          <div className="rightComp">
            <div className="heading">Welcome to Career Compass</div>
            <div className="text">Navigate your career path with precision. Discover personalized insights and guidance from our intuitive career chatbot.</div>
            <a href="/chatbot"><button className="btn">Explore Now</button></a>
          </div>
        </div>
    );
}

export default Home;