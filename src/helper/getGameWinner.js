export default function (scores) {
    let winner = null;

    if(scores && scores.length){
        scores.filter(scr => scr !== null && typeof scr !== "undefined").forEach((score,index) => {
            if(
                scores.filter((s,i) => i !== index && s.value && s.value === score.value && s.rowIndex === score.rowIndex).length === 2 ||
                scores.filter((s,i) => i !== index && s.value && s.value === score.value && s.colIndex === score.colIndex).length === 2
            ){
                winner = score.value;
            } else if(
                score.rowIndex === score.colIndex &&
                scores.filter((s,i) => i !== index && s.value && s.rowIndex === s.colIndex && s.value === score.value).length === 2
            ){
                winner = score.value;
            }
        });

        if(!winner){
            let middleBox = scores.filter(r => r.colIndex === 1 && r.rowIndex === 1).length ? scores.filter(r => r.colIndex === 1 && r.rowIndex === 1)[0] : null;

            if(
                middleBox && middleBox.value &&
                scores.filter(s => s.value === middleBox.value && ((s.rowIndex === 0 && s.colIndex === 2) || (s.rowIndex === 2 && s.colIndex === 0))).length === 2
            ){
                winner = middleBox.value;
            }
        }

        if(!winner && scores.length === 9) winner = "DRAWN";
    }

    return winner;
}