function runTotal() {
            var total = 0;
            var small = 5.0;
            var medium = 7.50;
            var large = 10.00;
            var xlarge = 12.50
            var addTopping = 0.8;
                if(document.forms[0].pizza[0].checked == true) {
                total += small;
                }
                else if(document.forms[0].pizza[1].checked == true){
                total += medium;
                }
                else if(document.forms[0].pizza[2].checked == true){
                total += large;
                }
                else if(document.forms[0].pizza[3].checked == true){
                total += xlarge;
                }
            for(var i = 0; i < 4; i++){
                if(document.forms[0].toppings[i].checked == true){
                total += addTopping;
		          }
                }
            document.order.Total.value = total;
            } 

function validate()
{
	var form = document.getElementById("orderForm");
	form.addEventListener("submit", orderValid);
}
function orderValid()
{
	var form = document.getElementById("orderForm");
	var toppingsValid = false;
	
	if(form.pizza.value == "")
	{
		document.getElementById("pizzaBaseRequiredError").style.display = "block";
		event.preventDefault();
	}
	
	else
	{
		document.getElementById("pizzaBaseRequiredError").style.display = "none";
	}
	
	for(var i = 0; i < form.toppings.length; i++)
	{
		if(form.toppings[i].checked)
		{     
			toppingsValid = true;
		}
	}
	
    if(toppingsValid == false)
	{
		document.getElementById("toppingRequiredError").style.display = "block";
		event.preventDefault();
	}
	
	else
	{
		document.getElementById("toppingRequiredError").style.display = "none";
	}
}