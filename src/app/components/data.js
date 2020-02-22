
export default function data(xAxisLabelTrue, yAxisLabelTrue, xValueTrue, yValueTrue, m, c, cmTemp, i){
    var cm;
    if(cmTemp === 2) cm = [2,2];
    else if(cmTemp === 3) cm = [3,3];
    else if(cmTemp === 4) cm = [4,4];
    else if(cmTemp === 5) cm = [5,5];
    else cm = [2,5];
    
    const axis = [xAxisLabelTrue, yAxisLabelTrue];
    const matrix = [3,6,9,12,15];
    const component = [[2,2],[3,3],[4,4],[5,5],[2,5]];
    const cost = [0.01,0.25,0.5];
    const innovation = [0.5,0.75,1];
    var graphs = [];
    var dict = dictData();
    if(axis.includes('component') && axis.includes('cost')){
        if(xAxisLabelTrue === 'component') {
            var temp = xValueTrue;
            xValueTrue = yValueTrue;
            yValueTrue = temp;
            temp = xAxisLabelTrue;
            xAxisLabelTrue = yAxisLabelTrue;
            yAxisLabelTrue = temp;
        }
        component.forEach(function(a) { // X
            cost.forEach(function (b) { // Y
                for (var key in dict) {
                   // innovation, cost, minSize, maxSize
                   if(dict[key][0] === i && dict[key][1] === b && dict[key][2] === a[0] && dict[key][3] === a[1]){
                        graphs.push(m+'_'+key+'/')
                    }
                }
            });
        })
    }
    else if(axis.includes('component') && axis.includes('innovation')){
        if(xAxisLabelTrue === 'component') {
            temp = xValueTrue;
            xValueTrue = yValueTrue;
            yValueTrue = temp;
            temp = xAxisLabelTrue;
            xAxisLabelTrue = yAxisLabelTrue;
            yAxisLabelTrue = temp;
        }
        component.forEach(function(a) { // X
            innovation.forEach(function (b) { // Y
                for (var key in dict) {
                    // innovation, cost, minSize, maxSize
                    if(dict[key][0] === b && dict[key][1] === c && dict[key][2] === a[0] && dict[key][3] === a[1]){
                        graphs.push(m+'_'+key+'/')
                    }
                }
            });
        })
    }
    else if(axis.includes('component') && axis.includes('matrix')){
        if(xAxisLabelTrue === 'component') {
            temp = xValueTrue;
            xValueTrue = yValueTrue;
            yValueTrue = temp;
            temp = xAxisLabelTrue;
            xAxisLabelTrue = yAxisLabelTrue;
            yAxisLabelTrue = temp;
        }
        component.forEach(function(a) { // X
            matrix.forEach(function (b) { // Y
                for (var key in dict) {
                    // innovation, cost, minSize, maxSize
                    if(dict[key][0] === i && dict[key][1] === c && dict[key][2] === a[0] && dict[key][3] === a[1]){
                        graphs.push(b+'_'+key+'/')
                    }
                }
            });
        })
    }
    else if(axis.includes('cost') && axis.includes('matrix')){
        if(xAxisLabelTrue === 'matrix') {
            temp = xValueTrue;
            xValueTrue = yValueTrue;
            yValueTrue = temp;
            temp = xAxisLabelTrue;
            xAxisLabelTrue = yAxisLabelTrue;
            yAxisLabelTrue = temp;
        }
        matrix.forEach(function(a) { // Y
            cost.forEach(function (b) { // X
                for (var key in dict) {
                    // innovation, cost, minSize, maxSize
                    if(dict[key][0] === i && dict[key][1] === b && dict[key][2] === cm[0] && dict[key][3] === cm[1]){
                        graphs.push(a+'_'+key+'/')
                    }
                }
            });
        })
    }
    else if(axis.includes('cost') && axis.includes('innovation')){
        if(xAxisLabelTrue === 'cost') {
            temp = xValueTrue;
            xValueTrue = yValueTrue;
            yValueTrue = temp;
            temp = xAxisLabelTrue;
            xAxisLabelTrue = yAxisLabelTrue;
            yAxisLabelTrue = temp;
        }
        cost.forEach(function(a) { // Y
            innovation.forEach(function (b) { // X
                for (var key in dict) {
                    // innovation, cost, minSize, maxSize
                    if(dict[key][0] === b && dict[key][1] === a && dict[key][2] === cm[0] && dict[key][3] === cm[1]){
                        graphs.push(m+'_'+key+'/')
                    }
                }
            });
        })
    }
    else if(axis.includes('innovation') && axis.includes('matrix')){
        if(xAxisLabelTrue === 'matrix') {
            temp = xValueTrue;
            xValueTrue = yValueTrue;
            yValueTrue = temp;
            temp = xAxisLabelTrue;
            xAxisLabelTrue = yAxisLabelTrue;
            yAxisLabelTrue = temp;
        }
        matrix.forEach(function(a) { // X
            innovation.forEach(function (b) { // Y
                for (var key in dict) {
                    // innovation, cost, minSize, maxSize
                    if(dict[key][0] === b && dict[key][1] === c && dict[key][2] === cm[0] && dict[key][3] === cm[1]){
                        graphs.push(m+'_'+key+'/')
                    }
                }
            });
        })
    }
    return [graphs, xValueTrue, yValueTrue, xAxisLabelTrue, yAxisLabelTrue];
}

function dictData(){
    var dict = {
        1:[0.5,0.01,2,2],
        2:[0.5,0.01,3,3],
        3:[0.5,0.01,4,4],
        4:[0.5,0.01,5,5],
        5:[0.5,0.01,2,5],
        6:[0.75,0.01,2,2],
        7:[0.75,0.01,3,3],
        8:[0.75,0.01,4,4],
        9:[0.75,0.01,5,5],
        10:[0.75,0.01,2,5],
        11:[1,0.01,2,2],
        12:[1,0.01,3,3],
        13:[1,0.01,4,4],
        14:[1,0.01,5,5],
        15:[1,0.01,2,5],
        16:[0.5,0.25,2,2],
        17:[0.5,0.25,3,3],
        18:[0.5,0.25,4,4],
        19:[0.5,0.25,5,5],
        20:[0.5,0.25,2,5],
        21:[0.75,0.25,2,2],
        22:[0.75,0.25,3,3],
        23:[0.75,0.25,4,4],
        24:[0.75,0.25,5,5],
        25:[0.75,0.25,2,5],
        26:[1,0.25,2,2],
        27:[1,0.25,3,3],
        28:[1,0.25,4,4],
        29:[1,0.25,5,5],
        30:[1,0.25,2,5],
        31:[0.5,0.5,2,2],
        32:[0.5,0.5,3,3],
        33:[0.5,0.5,4,4],
        34:[0.5,0.5,5,5],
        35:[0.5,0.5,2,5],
        36:[0.75,0.5,2,2],
        37:[0.75,0.5,3,3],
        38:[0.75,0.5,4,4],
        39:[0.75,0.5,5,5],
        40:[0.75,0.5,2,5],
        41:[1,0.5,2,2],
        42:[1,0.5,3,3],
        43:[1,0.5,4,4],
        44:[1,0.5,5,5],
        45:[1,0.5,2,5],
        }
    return dict; 
}