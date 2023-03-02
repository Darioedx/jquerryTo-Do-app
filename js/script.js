

function newItem(){
  let li = $('<li></li>');
  
  let doneButton = $('<crossOutButton></crossOutButton>')
  if ($('#input').val() === '') {
    alert("You must write something!");
  } else {
      $('#list').append(li.append($('#input').val()));
      li.append(doneButton.append(document.createTextNode('X')));
      
  } 
  
  li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
    });

  
  doneButton.on("click", deleteListItem)
  function deleteListItem(){
    
      li.addClass("delete");
    } 
    $('#list').sortable();
   

  }   
  