$(document).ready(function() {
    loadData();

});


function loadData() {
    $.ajax({
        url: 'xml/categories.xml',
        dataType: 'xml',
        success: function(data) {
            $(data).find('CategoriesRoot Categories').each(function(){
                var info ="<li> ID: "+ $(this).find('CategoryID').text()+'</li>';
                info += "<li> CategoryName: "+ $(this).find('CategoryName').text()+'</li>';
                info += "<li> Description: "+ $(this).find('Description').text()+'</li>';

                $('ul').append(info);
            });
        },
    });
}

function tree() {

}




function displayCatDesp() {

}

function displayProductPrice() {

}


