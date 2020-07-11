const smartGarbage = function (trash, bins1) {

  if(trash == "recycle"){
    bins1.recycle += 1;
    return bins1;
  }
  if(trash == "compost"){
    bins1.compost += 1;
    return bins1;
  }
  if(trash == "garbage"){
    bins1.garbage += 1;
    return bins1;
  }
  
}

const bins = {
  recycle: 1,
  compost: 1,
  garbage: 1

};

console.log(smartGarbage("recycle",bins));
smartGarbage("recycle",bins);