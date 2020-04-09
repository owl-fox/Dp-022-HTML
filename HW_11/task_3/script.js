function findShort(s) {
    //убираем пробелы с начала и конца если есть, формируем массив
    const stringArray = s.trim().split(" "); 

     //Сортирует массив по возрастанию(первый элемент с минимальным значением)
    const orderedArray = stringArray.sort(function(a, b){
      return a.length - b.length;
    });
    //возвращаем первый элемент в массиве
    return orderedArray[0].length;
  }
  
  let text = prompt ('Input string');
  alert(findShort(text));
  console.log(findShort(text));
  

