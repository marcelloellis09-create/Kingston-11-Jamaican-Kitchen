document.addEventListener("DOMContentLoaded", () => {

    let orderButton = document.getElementById("confirmorder");
    let OrderList = {
        "Chicken": 0,
        "Pork": 0
    };
    orderButton.addEventListener("click", function() {
        console.log(OrderList);
    })

});
