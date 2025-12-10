//big bracket
// const array = ["jigme","sherpa","Hi","HEllo"]
// console.log(array[2])

//array methods

// const student=['jigme','ram','sita']
// const check= student.includes('jigme')
// console.log(check);
// console.log(student.reverse());

// const name=['JINGME']
// // console.log(name.join()); 
// // const string= name.join()
// // console.log(string.split());
// const string= name.join('')
// const array= string.split('')
// const reverse= array.reverse()
// const string1=reverse.join('')
// console.log(`The reverse of ${name} is ${string1}`);



//In Map method of array we have 2 paarameters first one contains value/element
//and second one contains index
//the value in map contains each elements record 
const array = [1,2,3,4,5,6,7,8,9,10];

const test = array.map((value, index) => {
    const table = value * 2;
    console.log(`2 x ${value} = ${table}`);
});
