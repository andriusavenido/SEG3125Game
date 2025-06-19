import { useState, useEffect } from "react";

const Game: React.FC = () => {

    const [started, setStarted] = useState(false);
    const [level, setLevel] = useState<number | null>(null);

    const wordBank: string[] = [
        "Fable", "Table", "Cable",
        "Mirth", "Myth", "Moth",
        "Lace", "Laze", "Gaze",
        "Vane", "Vein", "Vain",
        "Grain", "Brain", "Drain",
        "Flare", "Glare", "Blare",
        "Tame", "Name", "Lame",
        "Clasp", "Grasp", "Gasp",
        "Spire", "Spike", "Spite",
        "Reed", "Read", "Raid",
        "Haste", "Hate", "Haze",
        "Brim", "Trim", "Prim",
        "Plum", "Plump", "Plume",
        "Snare", "Spare", "Scare",
        "Dusk", "Disk", "Desk"
    ];

    const colorBank: string[] = [
        "#FF0000",  // Red
        "#00FF00",  // Lime
        "#0000FF",  // Blue
        "#FFFF00",  // Yellow
        "#FF00FF",  // Magenta / Fuchsia
        "#00FFFF",  // Cyan / Aqua
        "#800000",  // Maroon
        "#008000",  // Green
        "#000080",  // Navy
        "#808000",  // Olive
        "#800080",  // Purple
        "#008080",  // Teal
        "#C0C0C0",  // Silver
        "#808080",  // Gray
        "#FFA500",  // Orange
        "#A52A2A",  // Brown
        "#8A2BE2",  // Blue Violet
        "#5F9EA0",  // Cadet Blue
        "#7FFF00",  // Chartreuse
        "#D2691E",  // Chocolate
        "#DC143C",  // Crimson
        "#00CED1",  // Dark Turquoise
        "#9400D3",  // Dark Violet
        "#FF1493",  // Deep Pink
        "#1E90FF",  // Dodger Blue
        "#B22222",  // Firebrick
        "#228B22",  // Forest Green
        "#FF69B4",  // Hot Pink
        "#CD5C5C",  // Indian Red
        "#4B0082",  // Indigo
        "#F08080",  // Light Coral
        "#20B2AA",  // Light Sea Green
        "#90EE90",  // Light Green
        "#ADD8E6",  // Light Blue
        "#E0FFFF",  // Light Cyan
        "#778899",  // Light Slate Gray
        "#B0C4DE",  // Light Steel Blue
        "#FFFFE0",  // Light Yellow
        "#00FA9A",  // Medium Spring Green
        "#DDA0DD",  // Plum
        "#FFD700",  // Gold
        "#FA8072",  // Salmon
        "#DA70D6",  // Orchid
        "#F0E68C",  // Khaki
        "#E9967A",  // Dark Salmon
        "#8FBC8F",  // Dark Sea Green
        "#9370DB",  // Medium Purple
        "#3CB371",  // Medium Sea Green
        "#BA55D3",  // Medium Orchid
        "#40E0D0",  // Turquoise
        "#FF4500",  // Orange Red
        "#B0E0E6",  // Powder Blue
        "#AFEEEE",  // Pale Turquoise
        "#F5DEB3",  // Wheat
        "#FFE4E1",  // Misty Rose
        "#F4A460",  // Sandy Brown
        "#ADFF2F",  // Green Yellow
        "#FFEFD5",  // Papaya Whip
        "#BC8F8F",  // Rosy Brown
        "#F0FFF0",  // Honeydew
    ];

    const colorsOnly = colorBank;
    const wordsOnly = wordBank;
    const allItems = [...wordBank, ...colorBank];
    const getCurrentItemBank = () => {
        if (level === 1) return colorsOnly;
        if (level === 2) return wordsOnly;
        return allItems; // level 3 or beyond
    };

    const [score, setScore] = useState(0);
    const [seen, setSeen] = useState<string[]>([]);
    const [currentItem, setCurrentItem] = useState<string | null>(null);
    const [gameOver, setGameOver] = useState(false);

    const isColor = (item: string): boolean => item.startsWith("#");

    const showNewItem = () => {
        const shouldUseSeen = seen.length > 0 && Math.random() < 0.3; // 30% chance

        let newItem: string;

        if (shouldUseSeen) {
            // Pull a random seen item
            newItem = seen[Math.floor(Math.random() * seen.length)];
        } else {
            const currentBank = getCurrentItemBank();
            const unseenItems = currentBank.filter(item => !seen.includes(item));
            if (unseenItems.length === 0) {
                // All items seen, fallback to any
                newItem = currentBank[Math.floor(Math.random() * currentBank.length)];
            } else {
                newItem = unseenItems[Math.floor(Math.random() * unseenItems.length)];
            }
        }

        setCurrentItem(newItem);
    };

    useEffect(() => {
        if (!gameOver) {
            showNewItem();
        }
    }, [score, gameOver]);

    const handleSeen = () => {
        if (!currentItem) return;

        if (seen.includes(currentItem)) {
            setScore(score + 1);
        } else {
            setGameOver(true);
            return;
        }
        showNewItem();
    };

    const handleNew = () => {
        if (!currentItem) return;

        if (seen.includes(currentItem)) {
            setGameOver(true);
            return;
        }

        setSeen([...seen, currentItem]);
        setScore(score + 1);
        showNewItem();
    };

    const resetGame = () => {
        setScore(0);
        setSeen([]);
        setGameOver(false);
        setLevel(null);
        setStarted(false);
    };

    if (!started) {
        return (<div className="container mt-3">
            <div className="row">
                <div className="col-3 rounded-5 bg-info text-white p-5">
                    <h3 className="fw-bold">The Test of Memory</h3>
                    <h5>How to play:</h5>
                    <p>Welcome to the test of memory - a game to test your memory and intellectual skills.</p>
                    <p>In this game you will be shown a <span className="fw-bold">color </span>or <span className="fw-bold">word </span> in the middle of the screen.</p>
                    <p>You will have two buttons to press, "New" or "Seen".</p>
                    <p>Press accordingly to if you have seen the item or it is new in the game session. Your run will go up with each selection you get correct, however if you make one mistake, you lose! How far can you get?</p>
                </div>
                <div className="col-9 bg-secondary rounded-5 d-flex flex-column align-items-center justify-content-center" >
                    <h2 className="mb-4 fw-bold">The Test of Memory: Choose a Level</h2>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-primary fs-4 rounded-5 fw-bold text-dark" onClick={() => { setLevel(1); setStarted(true); }}>
                            Level 1: Colors Only
                        </button>
                        <button className="btn btn-primary fs-4 rounded-5 fw-bold text-success" onClick={() => { setLevel(2); setStarted(true); }}>
                            Level 2: Words Only
                        </button>
                        <button className="btn btn-primary fs-4 rounded-5 fw-bold text-warning" onClick={() => { setLevel(3); setStarted(true); }}>
                            Level 3: Both
                        </button>
                    </div>
                </div>
            </div>
        </div>

        );
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-3 rounded-5 bg-info text-white p-5">
                    <h3 className="fw-bold">The Test of Memory</h3>
                    <h5>How to play:</h5>
                    <p>Welcome to the test of memory - a game to test your memory and intellectual skills.</p>
                    <p>In this game you will be shown a <span className="fw-bold">color </span>or <span className="fw-bold">word </span> in the middle of the screen.</p>
                    <p>You will have two buttons to press, "New" or "Seen".</p>
                    <p>Press accordingly to if you have seen the item or it is new in the game session. Your run will go up with each selection you get correct, however if you make one mistake, you lose! How far can you get?</p>
                </div>
                <div className="col-9 bg-secondary rounded-5 d-flex flex-column" >
                    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                        {gameOver ? (
                            <h2 className="text-dark fw-bold">Great Run! Your run was: {score}</h2>
                        ) : currentItem && isColor(currentItem) ? (
                            <div style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: currentItem,
                                borderRadius: "1rem"
                            }} />
                        ) : (
                            <h1 className="text-dark display-3 fw-bold text-shadow">{currentItem}</h1>
                        )}
                    </div>

                    <div className="d-flex justify-content-center align-items-center py-3">
                        {gameOver ? (
                            <button className="btn bg-primary text-dark fw-bold fs-4 rounded-5" onClick={resetGame}>
                                Restart Game
                            </button>
                        ) : (
                            <>
                                <button className="btn bg-primary fw-bold fs-3 text-warning mx-3 rounded-5" onClick={handleNew}>NEW</button>
                                <h4 className="text-dark m-0">Run: {score}</h4>
                                <button className="btn bg-primary fw-bold fs-3 text-success mx-3 rounded-5" onClick={handleSeen}>SEEN</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;