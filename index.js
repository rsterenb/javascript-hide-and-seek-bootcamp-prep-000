function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rankedList = document.querySelectorAll('ul.ranked-list')
  for (var i = 0, l = rankedList.length; i < l; i++){
    rankedList[i].innerHTML = parseInt(i + n)
  }
}

function deepestChild() {
  var current = document.getElementById('grand-node')
  var child = current.querySelector('div')
  while (child) {
    current = child
    child = current.querySelector('div')
  }
  return current 
}