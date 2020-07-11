const judgeVegetable = function (vegetables, metric) {
 vegetables.sort(compare_redness)
  /*var max = 0;
  var position = 0;
  var name = " ";
  for(var i = 0; i < vegetables.length; i++ ){
    if(vegetables[i].metric > max){
      max = vegetables[i].metric;
      //position = i;
    }
  }*/
  console.log(vegetables);
  return vegetables[vegetables.length - 1].submitter;
};


const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
]

const metric = "redness"

const compare_redness = function (a, b){
        
        if(a.redness < b.redness){
                return -1;
       
        }else if(a.redness > b.redness){
                return 1;
       
        }else{
                return 0;
        }
}



console.log(vegetables)

judgeVegetable(vegetables, metric);

console.log(judgeVegetable(vegetables, metric))
