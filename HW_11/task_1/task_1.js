function dublicate(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
      if (!obj[str[i]]) {  //проверка и добавление нового обьекта если он не сущестует в этом обьекте
        obj[str[i]] = 1;
      } else if (obj[str[i]]) {
        obj[str[i]] += 1; //добавление числа к уже существующему обьекту 
      }
    }
    return obj
   
  }
  
  let text = prompt ('Input string');
  let objs = dublicate(text);
  alert(objs);
  console.log(objs);
