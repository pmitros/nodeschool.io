function multi(operation, num) {
    var i;
    for(i=0; i<num; i++) {
	operation();
    }
}
    
module.exports = multi
