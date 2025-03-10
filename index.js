var customerName = "bob"; // Global variable

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Modifies the global variable
}


function setBestCustomer() {
    bestCustomer = "not bob"; // Assign value in global scope
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "steve"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "mary"
}