var _ = require ("lodash")
//heres this dumb array
let arr = [1, 2, 3, 4];
console.log('here is the array');
console.log(arr);

//chunk
console.log('here is chunk');
console.log(_.chunk(arr, 2));

//heres reverse
console.log('here is reverse');
console.log(_.reverse(arr));

//heres without
console.log('heres without 2 and 4');
console.log(_.without((arr), 2, 4));

//heres shuffle
console.log('heres shuffle');
console.log(_.shuffle(arr));

//heres head
console.log('heres head');
console.log(_.head(arr));

