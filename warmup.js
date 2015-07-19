// Warmup 1
  var arr = [4, 2, 6, 1, 15, 0];
  function my_max(myarray) {   
    // Solution 1: 
    var y = Math.max.apply(null, myarray);  //have to pass null or Math object as first argument.
    console.log('y = ' + y); 
  }

  my_max(arr);
  // Solution 2: 
  var max;
  for (var i = 0; i < arr.length; i++) {
      
    if (arr[i] >= arr[(i + 1)]) {
      max = arr[i];
    }
    else if (arr[i] > arr[(i + 1)] === undefined) {
      max = arr[i];
    }
    else if (arr[i] < arr[(i + 1)]) {
      max = arr[(i + 1)];
    }
  }
  console.log('max = ' + max);  

// Warmup 2

  var str = 'strawberry hills';

  function vowel_count(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    
    for (var i = 0; i < str.length; i++){
      for (var j = 0; j < vowels.length; j++){
        if (str.charAt(i) == vowels[j]) {
          count = count + 1;
         
        }
      }     
    }
  console.log('count = ' + count);
  }

  vowel_count(str);

// Warmup 3
  var str2 = "ohayo gozaimasu";
    function reverse(str2) {
    var reversed = "";
      for(var i = str2.length-1; i >= 0; i--) {
        reversed = reversed + str2[i];
      }
      console.log(reversed);
    }
  reverse(str2);