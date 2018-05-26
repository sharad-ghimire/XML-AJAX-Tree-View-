
			var prod={id:"",name:"",cat:0,quantity:0,unitprice:0};
			var cat={id:"",name:"",produ:[],discription:""};
			var productsA=[];
			var categoriesA=[];


			
			function loadproduct() {

				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						fproducts(this);
					}
				};

				xhttp.open("GET", "products.xml", true);
				xhttp.send();
				
				
				
				
			}

			function fproducts(xml) {
				var x;
				var i;
				var xmlDoc = xml.responseXML;

				
				x = xmlDoc.getElementsByTagName("Products");
				for (i = 0; i <x.length; i++) {
					var prod={
						id:x[i].getElementsByTagName("ProductID")[0].childNodes[0].nodeValue,
						name:x[i].getElementsByTagName("ProductName")[0].childNodes[0].nodeValue,
						cat:x[i].getElementsByTagName("CategoryID")[0].childNodes[0].nodeValue,
						quantity:x[i].getElementsByTagName("QuantityPerUnit")[0].childNodes[0].nodeValue,
						unitprice:x[i].getElementsByTagName("UnitPrice")[0].childNodes[0].nodeValue}
						
						productsA.push(prod);
					}
					

					loadcatrgory();
				}
				
				function loadcatrgory() {

					var xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							fcategory(this);
						}
					};
					
					xhttp.open("GET", "categories.xml", true);
					xhttp.send();
					
					
					
					
				}

				function fcategory(xml) {
					var x;
					var i;
					var xmlDoc = xml.responseXML;

					var t=0;
					x=xmlDoc.getElementsByTagName("Categories");
					

					for (var i = 0; i< x.length; i++) { 
						var cat={
							id:x[i].getElementsByTagName("CategoryID")[0].childNodes[0].nodeValue,
							name: x[i].getElementsByTagName("CategoryName")[0].childNodes[0].nodeValue,
							discription: x[i].getElementsByTagName("Description")[0].childNodes[0].nodeValue,products:[]
						}
						categoriesA.push(cat);
					}

					fill_catagery();
					fill_table();

				}
				
				
				
				

				function fill_catagery(){ 

					var k=0;
					
					for ( var i=0;i<categoriesA.length;i++){

						for ( var j=0;j<productsA.length;j++){
							
							if(productsA[j].cat==categoriesA[i].id){
								
								categoriesA[i].products.push(productsA[j]);}
								

							}
						}

					}



					function fill_table(){ var i=0;var k=0; var id=-1;var fix=0;
						var table="";
						for (i=0;i<categoriesA.length;i++){
							
							table += "<tr id=\"hea\"  class=\"treegrid-"+(++id)+"\"><td><span id="+id+" onclick=\"createAndShowPopup(this)\">" 
							+categoriesA[i].name
							+"</span></td></tr>";
							fix=id;
							for (k=0;k<categoriesA[i].products.length;k++)
							{
								table += "<tr  class=\"treegrid-"+(++id)+"\ treegrid-parent-"+fix+"\"><td><span id="+id+" onclick=\"createAndShowPopup(this)\">"
								+ categoriesA[i].products[k].name
								+"</span></td></tr>"
							}
						}

						
						document.getElementById("mytable").innerHTML =table ;




						$(document).ready(function() {
							$('#mytable').treegrid();
						});
						
						
					}

					

					function createAndShowPopup(val){
						var k=0; var id=-1;var fix=0;
						
						
						
						for ( var i=0;i<categoriesA.length;i++){
							if ((++id)==val.id){
								confirm("Description: "+categoriesA[i].discription);
								break;}
								for (k=0;k<categoriesA[i].products.length;k++)
								{
									
									if((++id)==val.id)
									{
										confirm("Description: "+categoriesA[i].discription+"\nPrice: "+categoriesA[i].products[k].unitprice);
										break;
									}
										

								}
							}
						}
									
