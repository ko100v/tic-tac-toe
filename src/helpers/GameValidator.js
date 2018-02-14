/** 
 * 
 */
export function gameCheck(game, callback) {
    /* */
    try {        
        game.forEach((row, r_index) => {

            // Horizontal check
            if (row.allValuesSame()) {
                // End game with winner
                throw row[0]
                
            }
            // Vertical check
            let tempColumn = []
            row.forEach((item, i_index) => {
                tempColumn.push(game[i_index][r_index])
            })
            if (tempColumn.allValuesSame()) {
                // End game with winner
                throw tempColumn[0]
                
            }
        })
    }
    catch (winner) {
        /* */
        callback(winner)
    }

    /* */
    let leftDiagonal = []
    let rightDiagonal = []
    /* */
    game.forEach((row, index) => {
        /* */
        let reversedIndex = (row.length - 1) - index
        /* */
        leftDiagonal.push(game[index][index])
        rightDiagonal.push(game[reversedIndex][index])
    })
    /* */
    if (leftDiagonal.allValuesSame()) {
        // End with winner
        callback(leftDiagonal[0])
        return
    }

    /* */
    if (rightDiagonal.allValuesSame()) {
        // End with winner
        callback(rightDiagonal[0])
        return
    }
}



// 
Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0] || this[i] === null)
            return false;

    }

    return true;
}


