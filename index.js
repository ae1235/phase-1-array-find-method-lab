// code your solution here
function superbowlWin(record) {
    const findWinningYear = record.find( record => record.result === 'W');

    if (findWinningYear) { 
        return (findWinningYear.year);
    } else {
        return (undefined);
    }
}

superbowlWin(record); 