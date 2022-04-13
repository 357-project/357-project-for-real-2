
const pages = ['/mazeGame', '/MemoryGame'];
const ConstantDate = new Date('01-01-2022');

const inDays = (d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();
    return parseInt(((t2-t1)/(24*3600*1000)));
}

const GetDailyGame = () => {

    return pages[Math.abs((inDays(ConstantDate,new Date()))% 2)];

}

export default GetDailyGame;