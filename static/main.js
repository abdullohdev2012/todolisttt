function getCheckedFunc(e){
$.ajax({

    url: "/edit_status",
    type: "post" ,
    data: {status : e.checked, index: e.dataset.task_id } ,
    success : function (data) {
        console.log(data);  
    }



})
}