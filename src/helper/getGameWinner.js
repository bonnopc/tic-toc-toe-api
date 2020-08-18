export default function (scores) {
    let winner = null;

    console.log("TOTAL SCORES", scores)

    if(scores && scores.length){
        // scores.forEach((score,index) => {
        //     console.log("score score", score.rowIndex);
        // })
        // const xValuedScores = scores.filter()
        scores.filter(scr => scr !== null && typeof scr !== "undefined").forEach((score,index) => {
            // console.log("SLOT 1", scores.filter((s,i) => i !== index && s.value && s.value === score.value && (s.rowIndex === score.rowIndex || s.colIndex === score.colIndex)).length)

            if(scores.filter((s,i) => i !== index && s.value && s.value === score.value && (s.rowIndex === score.rowIndex || s.colIndex === score.colIndex)).length === 2){
                winner = score.value;
            } else if(
                score.rowIndex === score.colIndex &&
                scores.filter((s,i) => i !== index && s.value && s.rowIndex === s.colIndex && s.value === score.value).length === 2
            ){
                winner = score.value;
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