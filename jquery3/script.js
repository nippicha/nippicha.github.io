$(document).ready(function() {
    $('#advance-search').hide();
    $('#advance-btn').click(function(){
        $('#advance-search').toggle();
    });
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x = "";
        response.forEach(element => {
            console.log(element.name, element.hot, element.iced, element.frappe, element.type);
            x +="<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.hot+"</td>"+
            "<td>"+element.iced+"</td>"+
            "<td>"+element.frappe+"</td>"+
            "<td>"+element.type+"</td>";
            $('#table').html(x);
        });
    });
});
$('#search-btn').click(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var x = "";
        var check = false;
        $('p#warning').text("");
        response.forEach(element => {
            if(element.name.toLowerCase().includes($('#input-text').val().toLowerCase())){
                console.log(element.name, element.hot, element.iced,  element.frappe, element.type);
                check = true;
                x += "<tr>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.hot+"</td>"+
                "<td>"+element.iced+"</td>"+
                "<td>"+element.frappe+"</td>"+
                "<td>"+element.type+"</td>";
                $('#table').html(x);
            }
        });
        if(check == false){
            $('p#warning').text("Non Found!");
        }
    });
});
$('#advanceSearch-btn').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response){
        var x = "";
        var check = false;
        var i=0;
        response.forEach(element => {
            if(element.type.includes($('#select-type').val()) && (element.hot.includes($('#select-price').val()) || element.iced.includes($('#select-price').val()) || element.frappe.includes($('#select-price').val()))){
                x += "<tr>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.hot+"</td>"+
                "<td>"+element.iced+"</td>"+
                "<td>"+element.frappe+"</td>"+
                "<td>"+element.type+"</td>";
                $('#table').html(x);
            }
        });
    });
    
});