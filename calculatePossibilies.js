var calculatePossibilies = function (cell1,cell2, req, res) {

    //var cell = req.query[0]+req.query[1];
    var possibleCoordinates = [];
    var finalCoordinates = [];
    var xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var cellX = xCoordinates.indexOf(cell1) + 1; //The X Position
    var cellY = parseInt(cell2); //The Y Position
    
    //Find all possible X Positions
    var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })
    
    //Find all possible Y Positions
    var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    for (var i = 0; i < cellXpositions.length; i++) {
        for (var j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                //console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push([xCoordinates[cellXpositions[i]-1], cellYpositions[j]]);
                } 
            }
        }
    }
    for (var i = 0; i < possibleCoordinates.length; i++) {
        finalCoordinates[i] = possibleCoordinates[i][0]+possibleCoordinates[i][1];
    }
    console.log(finalCoordinates);
    return finalCoordinates;
  };

  module.exports = calculatePossibilies;