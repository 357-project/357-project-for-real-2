// Selects which game to showcase when user presses daily challengs 
const pages = ['/MazeGame', '/MemoryGame'];
const ConstantDate = new Date('01-01-2022');

//Algorithm to calculate which day we are and what to show
const inDays = (d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();
    return parseInt(((t2 - t1) / (24 * 3600 * 1000)));
}

//Returns proper game
const GetDailyGame = () => {
    return pages[Math.abs((inDays(ConstantDate, new Date())) % 2)];
}

export default GetDailyGame;