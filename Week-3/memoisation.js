function add(a,b){
    return a+b
}
//Create a method called memoize such that:
const memoize = (fn) => {
    let cache = new Map();
    return (...args) => {
        const key = args.toString();
        if(cache.has(key)) return cache.get(key);
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}
const memoizeAdd = memoize(add);
//then calling...
console.log(memoizeAdd(100,100));
memoizeAdd(100,100);//returns 200
memoizeAdd(100);//returns 100
memoizeAdd(100,200)//returns 300
memoizeAdd(100,100)//returns 200 
