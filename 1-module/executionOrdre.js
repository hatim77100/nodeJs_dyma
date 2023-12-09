// l'ordre d'exécution
setImmediate(() => console.log("set immediate 1"));

setTimeout(() => console.log("set timeout 1"), 0);
setTimeout(() => {
  console.log("set timeout 2");
  process.nextTick(() => console.log("process.nextTick dans le setTimeout"));
}, 0);
setTimeout(() => console.log("set timeout 3"), 0);

process.nextTick(() => console.log("process.nextTick 1"));
