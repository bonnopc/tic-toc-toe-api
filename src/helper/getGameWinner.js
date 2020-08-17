export default function (scores) {
    let winner = null;

    if(scores && scores.length){
        // const xValuedScores = scores.filter()
        scores.map(scr => scr !== null && typeof a !== "undefined").every((score,index) => {
            if(scores.map((s,i) => i !== index).filter(s => s.value === score.value && (s.rowIndex === score.rowIndex || s.colIndex === score.colIndex)).length === 2){
                winner = score.value;
                return;
            } else if(
                score.rowIndex === score.colIndex &&
                scores.map((s,i) => i !== index).filter(s => s.rowIndex === s.colIndex && s.value === score.value).length === 2
            ){
                winner = score.value;
                return;
            }
        });

        if(!winner){
            let valueForMiddleBox = scores.filter(r => r.colIndex && r.rowIndex && r.colIndex === r.rowIndex).length ? scores.filter(r => r.colIndex && r.rowIndex && r.colIndex === r.rowIndex)[0] : null;

            if(
                valueForMiddleBox &&
                scores.filter(s => s.value === valueForMiddleBox && ((s.rowIndex === 0 && s.colIndex === 2) || (s.rowIndex === 2 && s.colIndex === 0))).length === 2
            ){
                winner = valueForMiddleBox;
            }
        }

        if(!winner && scores.length === 9) winner = "DRAWN";
    }

    return winner;
}