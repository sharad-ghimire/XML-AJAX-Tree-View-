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

    var data = $.parseXML($.ajax({
        url: 'xml/categories.xml',
        dataType: 'xml',
        async: false
    }).responseText);
    $(data).find('CategoriesRoot Categories').each(function () {
        categoryID.push($(this).find('CategoryID').text());
        categoryName.push($(this).find('CategoryName').text());
        categoryDescription.push($(this).find('Description').text())

    });

    var data2 = $.parseXML($.ajax({
        url: 'xml/products.xml',
        dataType: 'xml',
        async: false
    }).responseText);
    $(data2).find('ProductsRoot Products').each(function () {
        productID.push($(this).find('ProductID').text());
        productName.push($(this).find('ProductName').text());
        productCatID.push($(this).find('CategoryID').text());
        quantityPerUnit.push($(this).find('QuantityPerUnit').text());
        unitPrice.push($(this).find('UnitPrice').text());
    });




    function displayData() {
        var products = document.getElementById("pro");
        for (var i = 0; i < categoryName.length; i++) {
            var list = "<ul><a>" + categoryName[i] + "</a></ul>";
            products.innerHTML += list;
            for(var i=0; i< productID.length; i++ ) {
                var node = document.createElement("li");
                var textnode = document.createTextNode(productName[i]);
                node.appendChild(textnode);
                document.getElementById("pro").appendChild(node);
            }

        }

    }

    function checkForCatPro() {
        for (var i = 0; i < productCatID.length; i++) {
            if (productCatID[i] == categoryID[i]) {
                return productName[i];
            }
        }


    }


    displayData();