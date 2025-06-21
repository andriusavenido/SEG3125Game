import { Link } from "react-router";
const Home:React.FC = () => {
    return ( 
        <div className="container">
            <div className="row ">
                <div className="w-100 rounded-5 d-flex flex-column align-items-center justify-content-center p-5" >
                    <div className="row">
                          <div className= "mx-3"style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor:"#ADD8E6",
                                borderRadius: "1rem"
                            }} />
                            <div className= "mx-3"style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor:"#90EE90",
                                borderRadius: "1rem"
                            }} /> <div className= "mx-3"style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor:"#FF69B4",
                                borderRadius: "1rem"
                            }} /> <div className= "mx-3"style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor:"#FF4500",
                                borderRadius: "1rem"
                            }} />
                    </div>
                    <h2 className="mb-4 fw-bold mt-4">Welcome to the Test of Memory</h2>
                    <div className="w-50 rounded-5 bg-info text-white p-5">
                    <h5 className="fw-bold">How to play:</h5>
                    <p>Welcome to the test of memory - a game to test your memory and intellectual skills.</p>
                    <p>In this game you will be shown a <span className="fw-bold">color </span>or <span className="fw-bold">word </span> in the middle of the screen.</p>
                    <p>You will have two buttons to press, "New" or "Seen".</p>
                    <p>Press accordingly to if you have seen the item or it is new in the game session. Your run will go up with each selection you get correct, however if you make one mistake, you lose! How far can you get?</p>
                            <Link to="/game" className="btn bg-primary text-dark fw-bold rounded-5">Try the Test</Link>
                </div>
                 <div className="w-50 rounded-5 bg-secondary text-dark p-5 mt-2">
                    <h5 className="fw-bold ">More Games</h5>
                    <p>Other than our popular memory test, our website offers various other intellectual mind games that you can play to test your degree in critical thinking, memory, and other mental attribute. Crosswords, Sudoku, puzzles, and more!</p>
                    <Link to="/selection" className="btn bg-primary text-dark fw-bold rounded-5">View more games</Link>
                </div>
                 <div className="w-50 rounded-5 bg-secondary text-dark p-5 mt-2">
                    <h5 className="fw-bold ">Leaderboards <i className="bi bi-trophy-fill"></i></h5>
                     <p>Curious about how others did? View our global leaderboard to see how other players have performed.</p>
                    <Link to="/Leaderboard" className="btn bg-primary text-dark fw-bold rounded-5">View Leaderboard</Link>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;