//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
 
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache  = cache.findIndex((item) => item.hash == hash);
    if (objectInCache !== -1) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return "Из кэша: " + cache[objectInCache].value;
    }
 
    let result = func(...args);
    cache.push({
      'hash': hash,
      'value': result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2

  function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count=0;
    wrapper.allCount=0;
    function wrapper(...args){
      wrapper.allCount++;
      if (timeoutId === null) {
        func(...args);
        wrapper.count++;
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {wrapper.count++; func(...args)}, delay);
      
    }
    return wrapper;
}