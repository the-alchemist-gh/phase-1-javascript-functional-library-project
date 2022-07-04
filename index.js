fl = (
  function(){
    return {

      myEach: function (collection, callback){
        const newArray = Object.values(collection)
        for(let i=0; i<newArray.length; i++){
          callback(newArray[i]);
        }
        return collection;
      },

      myMap: function (collection, callback){
        const newArray = Object.values(collection)
        const newArray1 = [];
        for(let i=0; i<newArray.length; i++){
          newArray1.push(callback(newArray[i]));
        }
        return newArray1;
      },

      myReduce: function (collection, callback, acc){
        console.log(typeof acc)
        const newArray = Object.values(collection)
        let result;
        if(typeof acc == 'undefined'){
            acc = 0;
        }
        for(let i=0; i<newArray.length; i++){
          acc =+ callback(acc, newArray[i])
          result = acc;
          // newArray1.push(callback(newArray[i]));
        }
        return result;
      },

      myFind: function(collection, predicate){
        const newArray = Object.values(collection)
        let result;
        for(let i=0; i<newArray.length; i++){
          if(predicate(newArray[i]) === true){
            result = newArray[i];
            break
          }
        }
        console.log(result);
        return result;
      },
      
      myFilter: function(collection, predicate){
        const newArray = Object.values(collection)
        let result=[];
        for(let i=0; i<newArray.length; i++){
          if(predicate(newArray[i]) === true){
            result.push(newArray[i]);
          }
        }
        console.log(result);
        return result;
      },

      mySize: function(collection){
        const newArray = Object.values(collection)
        let result;
        result = newArray.length;
        console.log(result);
        return result;
      },

      myFirst: function(array,[n]){
        
      },
       myLast: function(array, [n]){
         
       }


    }
  }
)();

// fl.alertMe();
// fl.libraryMethod();
// fl.myEach([1, 2, 3], alert);
// fl.myEach({one: 1, two: 2, three: 3}, alert);
// fl.myMap([1, 2, 3], function(num){ return num * 3; });
// fl.myMap({one: 2, two: 5, three: 8}, function(num, key){ return num * 3; });
// fl.myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// fl.myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// fl.myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// fl.myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
// fl.myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
fl.mySize({one: 1, two: 2, three: 3});
fl.mySize([]);

