let base = 100;

const add = (x) => base + x;
const mul = (x) => base * x;
const getBase =()=> base;
const setBase =(x)=> base=x;

export{add, mul};
export default getBase;