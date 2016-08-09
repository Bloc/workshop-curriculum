<!--{ ids:[189], language:'JavaScript', type:'workshop', order: 8, name:'Get Element Index', description:'Get the index of an element' } -->
var addItem = function(item, groceryList) {
  if (groceryList.indexOf(item) === -1){
    groceryList.push(item);
  }
  return groceryList;
};
