const amount = document.getElementById("amountDiv")
const tipAmount = document.getElementById("tipAmountDiv")
const numberofPeopleDiv = document.getElementById("numberofPeople")
const perpersonTotalDiv = document.getElementById("perpersonTotal")


let numberofPeople = Number(numberofPeopleDiv.innerText)

const calculateAmount = () => {

    //getting bill input
    const billInput = Number(amount.value)

    //getting tip input
    const tipInput = Number(tipAmount.value)

    //tip percentage
    const tipPercentage = Number(tipInput)/100

    //tip amount
    const tip = billInput * tipPercentage

    //totalamount
    const totalAmount = billInput + tip


    const perpersonTotal = totalAmount/numberofPeople

    perpersonTotalDiv.innerText = `$${perpersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    numberofPeople += 1
    numberofPeopleDiv.innerText = numberofPeople
    calculateAmount()
}

const decreasePeople = () => {

    if(numberofPeople <= 1){
        alert("Invalid entry of number of people")
        return
    }

    numberofPeople -= 1
    numberofPeopleDiv.innerText = numberofPeople
    calculateAmount()
}
