const persone = {
    name: 'Alex',
    tel: '+380957778877',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
// convert to JSON
console.log(JSON.stringify(persone));
// convert from JSON
console.log(JSON.parse(JSON.stringify(persone)));
// clone object after JSON
const clonePersone = JSON.parse(JSON.stringify(persone));
clonePersone.parents.mom = 'Jina';
console.log(clonePersone);