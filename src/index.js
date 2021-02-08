
// You should implement your task here.

module.exports = function towelSort (matrix) {

   if(!matrix || !matrix.length) return [];

   return matrix.reduce((accum, item, index) => {

       if(index && !(index % 2 === 0)) {

           item.reverse();
       }

       for (let element of item) {

           accum.push(element);
       }

       return accum;
   }, []);
}
