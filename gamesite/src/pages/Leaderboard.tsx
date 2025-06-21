const Leaderboard: React.FC = () => {
    const players = [
          { rank: 1, name: "Alice", score: 80, country: "USA" },
        { rank: 2, name: "Bob", score: 66, country: "Canada" },
        { rank: 3, name: "Charlie", score: 43, country: "UK" },
        { rank: 4, name: "Diana", score: 34, country: "Australia" },
        { rank: 5, name: "Evan", score: 27, country: "India" },
    ];

    return (
        <div className="container">
            <div className="d-flex flex-row align-items-center bg-info mx-5 p-2 rounded-5 text-white">
                <h4 className='mx-2 mb-0'>
                    The Memory Test - Leaderboards <i className="bi bi-trophy-fill"></i>
                </h4>
            </div>
            
            <div className="mx-5 mt-4 d-flex flex-column gap-3">
                {players.map((player, index) => (
                    <div key={index} className="bg-secondary text-dark p-3 rounded-5 d-flex justify-content-between align-items-center shadow">
                        <span className="fw-bold bg-">#{player.rank}</span>
                        <span>{player.name}</span>
                        <span>{player.country}</span>   
                        <span className="fw-bold">{player.score} pts</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
