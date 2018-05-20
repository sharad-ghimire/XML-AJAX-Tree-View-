$(document).ready(function() {
    loadData();

});


function loadData() {
    $.ajax({
        url: 'xml/categories.xml',
        dataType: 'xml',
        success: function(data) {
            $(data).find('CategoriesRoot Categories').each(function(){
                var catt ="<li> ID: "+ $(this).find('CategoryID').text()+'</li>';
                catt += "<li> CategoryName: "+ $(this).find('CategoryName').text()+'</li>';
                catt += "<li> Description: "+ $(this).find('Description').text()+'</li>';
                $('.cat').append(catt);
            });
        }
    });
    $.ajax({
        url: 'xml/products.xml',
        dataType: 'xml',
        success: function(data) {
            $(data).find('ProductsRoot Products').each(function(){
                var info ="<li> ID: "+ $(this).find('ProductID').text()+'</li>';
                info += "<li> Product Name: "+ $(this).find('ProductName').text()+'</li>';
                info += "<li> CategoryID: "+ $(this).find('CategoryID').text()+'</li>';
                info += "<li> Qunatity Per Unit: "+ $(this).find('QuantityPerUnit').text()+'</li>';
                info += "<li> Unit Price: "+ $(this).find('UnitPrice').text()+'</li>';
                $('.pro').append(info);
            });
        }
    })
}

function tree() {

}




function displayCatDesp() {

}

function displayProductPrice() {

}


