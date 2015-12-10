$(document).ready(function(){

$('.button').click(function(){
  alert('log in')
})


//
var un = document.myform.username.value;
var pw = document.myform.pword.value;
  var unArray = ["Austin"];
  var pwArray = ["Password1"];
  var valid = false;

  for (var i=0; i <unArray.length; i++) {
  if ((un == unArray[i]) && (pw == pwArray[i])) {
  valid = true;
  break;
  }
  }
//

$('.deleteRow').click(function(){
  $(this).parent().remove()
})

//have another class or id for a delete button that will append to the <tr> on that row.
//when the row is highlighted then have the class above have a delete button that will delete that row only (use .parent())
//also try and put an aleret with a button asking if you want to delete that row yes or no.


function hover(){$('tr').mouseenter(function(){
  $(this).css('background-color', 'yellow')
})

$('tr').mouseleave(function(){
  $(this).css('background-color', 'white')
})
}
hover()




//
// $('.button').click(function(){
//   if(valid){
//   $('table').append('<tr> <td>New</td><td>New</td><td>New</td><td>New</td><td>New</td><td>New</td><td>New</td><td>New</td> </tr>')
// hover()
// } else{
//   alert('log in!')
// }
// })
//
function editTable(){$("td").dblclick(function () {
  var OriginalContent = $(this).text();
   $(this).addClass("cellEditing");
    $(this).html("<input type='text' value='" + OriginalContent + "' />");
     $(this).children().first().focus();
      $(this).children().first().keypress(function (e) { if (e.which == 13) { var newContent = $(this).val();
         $(this).parent().text(newContent); $(this).parent().removeClass("cellEditing");
        } });
         $(this).children().first().blur(function(){ $(this).parent().text(OriginalContent);
            $(this).parent().removeClass("cellEditing");
          });
    });
}








});
