    //Arrays to store the values of categories
    var categoryID = [];
    var categoryName = [];
    var categoryDescription = [];

    //Arrays to store values of product
    var productID = [];
    var productName = [];
    var productCatID = [];
    var quantityPerUnit = [];
    var unitPrice = [];

    $.ajax({
        url: 'xml/categories.xml',
        dataType: 'xml',
        success: function(data) {
            $(data).find('CategoriesRoot Categories').each(function(){
                categoryID.push($(this).find('CategoryID').text());
                categoryName.push($(this).find('CategoryName').text());
                categoryDescription.push($(this).find('Description').text())

            });

            console.log(categoryName.length);
            for (var i = 0; i < categoryName.length; i++) {
                document.getElementById("pro").append(categoryName[i]);
            } 

            
            
        }
    });




//    var getProducts= function() {
//         //AJAX for Products
//         $.ajax({
//             url: 'xml/products.xml',
//             dataType: 'xml',
//             success: function (data) {
//                 $(data).find('ProductsRoot Products').each(function () {
//                     productID.push($(this).find('ProductID').text());
//                     productName.push($(this).find('ProductName').text());
//                     productCatID.push($(this).find('CategoryID').text());
//                     quantityPerUnit.push($(this).find('QuantityPerUnit').text());
//                     unitPrice.push($(this).find('UnitPrice').text());
//                 });
//             }
//         });
//     }




    
   

