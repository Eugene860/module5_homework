let map = new Map;
map.set (1, "one");
map.set (2, "two");
map.set (3, "three");
map.forEach (function (key, value){
  console.log(`Ключ - ` + key + `, значение -` + value)
});