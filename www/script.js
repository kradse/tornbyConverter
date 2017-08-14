var katNo = document.getElementById('katNo');
var add1 = document.getElementById('add');


var items = [
    [0,'testvej0'],
    [1,'testvej1'],
    [2,'testvej2'],
    [3,'testvej3'],
    [4,'testvej4']
];


var me;

function numTilAdd(num){
    me = items[num];
    add1.value = me.slice(1);
}


var temp;
function addTilNum(add){
    for (var i = 0; i < items.length; i++) {
        //items[i]
        temp = items[i].slice(1);
        if (add == temp) {
            katNo.value = items[i].slice(0,1);
        }

    }
}
