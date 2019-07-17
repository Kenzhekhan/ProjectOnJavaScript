let money ;
let time;


function start(){
		money = +prompt(" Enter your salary","30000");
		time = prompt( " Enter Data ","YYYY-MM-DD");
			while(isNaN(money) || money == '' || money == null){
				money = +prompt(" Enter your salary","30000");
			
			}
	}
start();

let appData = {
		budget : money,
		InMonthTime : time,
		mustExpenses : { },
		notExpenses : { },
		income : [],
		savings : true,
		chooseExpenses:function (){
			for (var i = 0; i < 2; i++){
				let QuestionOne = prompt("Must expenses");
				let QuestionTwo = prompt("Amount of money for this ");
					if(typeof(QuestionOne) === "string" && typeof(QuestionOne) != null && typeof(QuestionTwo) != null
		 				&& QuestionTwo != "" && QuestionOne != "" && QuestionOne.length < 50){
		 				console.log("done");
						appData.mustExpenses[QuestionOne] = QuestionTwo;
					}
						else{
							i--;
						}
			}
		},
		detectLevel : function(){
			if(appData.moneyPerDay <= 100){
				console.log("Low Budget");
			}
				else if(appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000){
					console.log("Medium BUdget");
				}
					else if(appData.moneyPerDay > 2000){
						console.log("Hihg Budget");
					}
						else{
							console.log("Error");
						}
		},
		checkSavings:function(){
			if (appData.savings == true) {
       			let save = +prompt("Sum of your savings ? "),
            	percent = +prompt("What's procent ? ");
				appData.monthIncome = save/100/12*percent;
            	alert("Income of your deposit per month : " + appData.monthIncome);
    		}
		},
		detectDayBudget:function(){
			let raschet = appData.budget / 60; //рассчет из половины дня, то есть с утра до вечера
			appData.DayBudget = raschet;	
			alert("Your day BUdget is : " + appData.DayBudget);
		},
		chooseOptExpenses:function(){
			for (var i = 0; i < 3; i++) {
			var forNEobyaz = appData.notExpenses[toString(i)] = prompt("Statiya neobezatelnih rashodov");
			console.log(forNEobyaz);
			}
		},

		// Задание 1
		chooseIncome:function(){
					for (;;){
						let items = prompt("Your extra income(Split with ,)");
							if(typeof(items) != "string" || typeof(items) == null || items == ""){
								continue;
							}
								else{
									appData.income = items.split(",");
									appData.income.push(prompt("Maybe you have another extra income ? ",""));
									// Задание 2
									let newArr = [];
									appData.income.forEach(function(item,i,array){
									newArr[i] = array[i];
									});					
									alert("Extra money ways : " + newArr);
									break;
								}					
					}

		}
};
//Задание 3
for(key in appData){
	console.log(key + " " + appData[key]);
}
//Задание 4 Проверил Наличии ошибок в консоли,ошибок не наблюдается
// Задание 5 Загрузил в Github
		
		
/*appData.chooseExpenses(); 	
appData.detectLevel();
appData.checkSavings();
appData.detectDayBudget();
appData.chooseOptExpenses();*/

appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("EveryDay budget : " + appData.moneyPerDay);



/*Life is So Beautigful*/
















