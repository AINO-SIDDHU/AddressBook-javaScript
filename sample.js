 function emptyField() {

     var field = document.getElementById("name").value;

     var field1 = document.getElementById("street").value;
     var field2 = document.getElementById("city").value;

     var field3 = document.getElementById("zip").value;


     if (field == "" || field1 == "" || field2 == "" || field3 == "") {
         alert("Field should not be empty...");


     } else {
         if (isNaN(field3)) {
             alert("zip must be Number");


         } else {
             alert("Successfully added \n Click ok ");
             document.getElementById("form1").style.display = "none";
             document.getElementById("form2").style.display = "block";
             document.getElementById("uname").innerHTML = field;
             document.getElementById("ustreet").innerHTML = field1;
             document.getElementById("ucity").innerHTML = field2;
             document.getElementById("uzip").innerHTML = field3;


         }



     }



 }