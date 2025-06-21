const Selection:React.FC = () => {
     const gameNames = ["Sudoku", "Crossword", "Memory Match", "Reaction Test", "Word Scramble", "Pattern Finder"];

    return ( 
    <div className="container">
       <div className="d-flex flex-row align-items-center bg-info mx-5 p-2 rounded-5 text-white">
                <h4 className='mx-2 mb-0'>other games</h4>
                <label htmlFor="" className="mx-2"><i className="bi bi-search"></i> Search</label>
                <input type="text" className="mx-2 w-25 bg-secondary text-dark rounded-5 border-0 p-1" placeholder='Search by name...' />
                {/* <input type="text" className="mx-2 w-25 bg-secondary text-light rounded-2 border-0 p-1" placeholder='Search by name...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}
            </div>

             {/* Game Cards */}
            <div className="row mt-4 mx-5">
                {gameNames.map((name, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 rounded-5 bg-secondary border-0 shadow">
                            <div className="card-body text-center text-dark">
                                <h5 className="card-title fw-bold">{name}</h5>
                                <p className="card-text">Coming soon!</p>
                                <button className="btn btn-primary text-dark fw-bold rounded-5">Play</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div> 
    );
}
 
export default Selection ;