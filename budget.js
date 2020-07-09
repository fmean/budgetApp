let totalBudget;
let totalExpenses;

function calculate(event) {

   event.preventDefault()
   
   const incomeValue = document.getElementById('inputForIncomeValue').value
   const totalIncomeValue = document.getElementById('incomeParagraph')
   const outcomeValue = document.getElementById('outcomeParagraph')
   
   if(incomeValue.length < 1){
   return alert("Task field cannot be empty. Please fill in task.")
   }
   
   totalBudget = incomeValue;
   
   totalIncomeValue.innerText = totalBudget
   outcomeValue.innerText = totalBudget
   
   document.getElementById('inputForIncomeValue').value = ""

   }

function addExpense(event) {
	
	event.preventDefault()
	
	const expenseName = document.getElementById('inputForExpenseName').value
	const expenseAmount = document.getElementById('inputForExpenseValue').value
	const totalCostValue = document.getElementById('costParagraph')
	const expenseBox = document.getElementById('expenseTable')
	const totalIncomeValue = document.getElementById('incomeParagraph').innerText
	const outcomeValue = document.getElementById('outcomeParagraph').innerText

    if(totalIncomeValue == 0 || outcomeValue == 0) {
		return alert("Please fill in income first.")
	}

	if(expenseName.length < 1 || expenseAmount.length < 1){
    return alert("Task field cannot be empty. Please fill in task.")
    }
	
	totalExpenses = expenseAmount;
	
	const expenseLinesDivision = document.createElement('div')
	expenseLinesDivision.setAttribute("class", "expenseLinesDivisionClass")
	const expenseLinesHeader = document.createElement('p')
	const expenseLinesAmount = document.createElement('p')
	
	const buttonsDivision = document.createElement('div')
	buttonsDivision.setAttribute("class", "buttonsDivisionClass")
	const editButton = document.createElement('button')
	editButton.id = "editButton"
	editButton.onclick = editTask;
	const editIcon = document.createElement('i')
	editIcon.setAttribute("class", "fas fa-eye-dropper")
	editButton.appendChild(editIcon);

	const deleteButton = document.createElement('button')
	deleteButton.id = "deleteButton"
	deleteButton.onclick = deleteTask;
	const deleteIcon = document.createElement('i')
	deleteIcon.setAttribute("class", "fas fa-trash")
	deleteButton.appendChild(deleteIcon);

	buttonsDivision.appendChild(editButton)
	buttonsDivision.appendChild(deleteButton)

	expenseLinesDivision.appendChild(expenseLinesHeader)
	expenseLinesDivision.appendChild(expenseLinesAmount)
	expenseLinesDivision.appendChild(buttonsDivision)

	expenseBox.appendChild(expenseLinesDivision);
	
	expenseLinesHeader.innerText = expenseName
	expenseLinesAmount.innerText = totalExpenses
	totalCostValue.innerText = Number(totalCostValue.innerText) + Number(totalExpenses)
	
	
	document.getElementById('inputForExpenseName').value = ""
	document.getElementById('inputForExpenseValue').value = ""
	
	calculateBalance();
}

function calculateBalance() {
	const totalCostValue = document.getElementById('costParagraph')
	const totalBalance = totalBudget - totalCostValue.innerText;
	const outcomeValue = document.getElementById('outcomeParagraph')
	outcomeValue.innerText = totalBalance;
}

function editTask(event) {
	console.log(event)
	const newExpenseValue = event.target.parentElement.parentElement.parentElement.children[1]
	const newExpenseName = event.target.parentElement.parentElement.parentElement.children[0]
	const totalCostValue = document.getElementById("costParagraph")
	const outcomeValue = document.getElementById('outcomeParagraph')
	const newExpenseDiv = event.target.parentElement.parentElement.parentElement;
	
	totalCostValue.innerText = Number(totalCostValue.innerText) - Number(newExpenseValue.innerText);
	outcomeValue.innerText = Number(outcomeValue.innerText) + Number(newExpenseValue.innerText);

	document.getElementById('inputForExpenseName').value = newExpenseName.innerText;
	document.getElementById('inputForExpenseValue').value= newExpenseValue.innerText;

	newExpenseDiv.remove();
}

function deleteTask() {
	const newExpenseValue = event.target.parentElement.parentElement.parentElement.children[1]
	const newExpenseDiv = event.target.parentElement.parentElement.parentElement;
	newExpenseDiv.remove();
	const totalCostValue = document.getElementById("costParagraph")
	const outcomeValue = document.getElementById('outcomeParagraph')
	totalCostValue.innerText = Number(totalCostValue.innerText) - Number (newExpenseValue.innerText);
	outcomeValue.innerText = Number(outcomeValue.innerText) + Number (newExpenseValue.innerText);
}