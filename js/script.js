

function newItem(){
  let li = $('<li></li>');
  let doneButton = $('<crossOutButton></crossOutButton>')
  if ($('#input').val() === '') {
    alert("You must write something!");
  } else {
      $('#list').append(li.append($('#input').val()));
      li.append(doneButton.append(document.createTextNode('X')));
  } 

  doneButton.on("click", deleteListItem)
  function deleteListItem(){
    
      li.addClass("delete");
    } 
  }   


        ///C.F given code/////

//let li = $('<li></li>');
//let inputValue = $('#input').val();
//li.append(inputValue);

//if (inputValue === '') {
  //alert("You must write something!");
//} else {
  //$('#list').append(li);
//}
//crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
//<input type="checkbox"></input>