$(document).ready(function() {
    $('#datatable').dataTable();
    
    $.ajax({
        type : 'get',
        url : 'http://localhost:8080/usermanagement/userList',
        success : function(userList)
        {
            console.log(userList);
            for (let index = 0; index < userList.length; index++) {
            //     var table = document.getElementById("datatable");
            //    var row = table.insertRow(0);
            //    var cell1 = row.insertCell(0);
            //    var cell1 = row.insertCell(0);
            //    var cell1 = row.insertCell(0);
            //    var cell1 = row.insertCell(0);
            //    var cell1 = row.insertCell(0);
            //    var cell1 = row.insertCell(0);

               document.getElementById('id').innerHTML = userList[index].id;
      
               
            }
        }
    })
     $("[data-toggle=tooltip]").tooltip();
    
} );
