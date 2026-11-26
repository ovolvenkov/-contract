
const data = [
"	№ в группе@	15	$Вид документа@	Паспорт	$Выдан паспорт@	Балаклійським РВ УМВС України в Харківській обл.	$Дата выдачи паспорта@	31.03.2000	$Серия паспорта@	МС	$Номер паспорта@	489734	$ФИО@	Иванов Іван Іванович	$ИНН@	25069064256	$прописка@	642614, Україна, Харківська обл., Балаклійський р-н, 4	$Окончание договора@	31.12.2022 23:59:59	$Дата определения стоимости@	01.01.2010	$Нормативная стоимость@	41 771,87	$Тип договора@	Договір оренди земельної ділянки	$Статус договора@	Зарегистрирован	$Номер регистрации@	041068300013	$Дата регистрации@	15.12.2010	$Представление наследников@		$Сельсовет@	Лозовеньківська сільська рада	$Арендная плата ставка@	5,000000	$Арендная плата сумма@	4 580,80	$Кадастровый номер@	632028553600:03:000:0381	$Доля арендодателя@	100,00	$Площадь@	2,91880	$Нормативная стоимость (доли)@	41 771,87	",
"	№ в группе@	17	$Вид документа@	Паспорт	$Выдан паспорт@	Балаклійським РВ УМВС України в Харківській обл.	$Дата выдачи паспорта@	02.09.2002	$Серия паспорта@	МС	$Номер паспорта@	329584	$ФИО@	Иванова Іван Іванович	$ИНН@	26253058265	$прописка@	642641, Україна, Харківська обл., Балаклійський р-н, 	$Окончание договора@	03.12.2022 23:59:59	$Дата определения стоимости@	01.01.2015	$Нормативная стоимость@	183 744,73	$Тип договора@	Договір оренди земельної ділянки	$Статус договора@	Зарегистрирован	$Номер регистрации@	12342834	$Дата регистрации@	03.12.2015	$Представление наследников@		$Сельсовет@	Лозовеньківська сільська рада	$Арендная плата ставка@	5,000000	$Арендная плата сумма@	9 187,24	$Кадастровый номер@	632028360660:01:000:0047	$Доля арендодателя@	100,00	$Площадь@	6,18880	$Нормативная стоимость (доли)@	183 744,73	",
"	№ в группе@	118	$Вид документа@	Паспорт	$Выдан паспорт@	Балаклійським РВ ГУМВС України в Харківській обл.	$Дата выдачи паспорта@	08.10.2010	$Серия паспорта@	МК	$Номер паспорта@	087265	$ФИО@	Иванющенко Іван Євгеніївна	$ИНН@	23655615661	$прописка@	614183, Україна, Харківська обл., м. Харків, $Окончание договора@	31.12.2022 23:59:59	$Дата определения стоимости@	01.01.2015	$Нормативная стоимость@	183 753,91	$Тип договора@	Договір оренди земельної ділянки	$Статус договора@	Зарегистрирован	$Номер регистрации@	10188714	$Дата регистрации@	25.06.2015	$Представление наследников@		$Сельсовет@	Лозовеньківська сільська рада	$Арендная плата ставка@	5,000000	$Арендная плата сумма@	9 187,70	$Кадастровый номер@	632660283600:03:000:0072	$Доля арендодателя@	33,33	$Площадь@	1,92524	$Нормативная стоимость (доли)@	61 245,18	",
"	№ в группе@	120	$Вид документа@	Паспорт	$Выдан паспорт@	Балаклійським РВ ГУМВС України в Харківській обл.	$Дата выдачи паспорта@	21.07.1999	$Серия паспорта@	МП	$Номер паспорта@	164525	$ФИО@	Погорелова Іван Пилипівна	$ИНН@	21126015006	$прописка@	644252, Україна, Харківська обл., Балаклійський р-н, 	$Окончание договора@	31.12.2022 23:59:59	$Дата определения стоимости@	01.01.2010	$Нормативная стоимость@	83 776,22	$Тип договора@	Договір оренди земельної ділянки	$Статус договора@	Зарегистрирован	$Номер регистрации@	041068300014	$Дата регистрации@	30.11.2010	$Представление наследников@	Бельовцева Валентина Миколаївна	$Сельсовет@	Лозовеньківська сільська рада	$Арендная плата ставка@	5,000000	$Арендная плата сумма@	9 187,08	$Кадастровый номер@	632026683600:02:000:0054	$Доля арендодателя@	100,00	$Площадь@	6,69860	$Нормативная стоимость (доли)@	83 776,22	",
];

function createObjectFromArray(dateBase) {
	let arr = dateBase.map(item => {
		return item.split('$');
	});

	let arr2 = [];
	arr.forEach((item,index) => {
		arr2[index] = [];
		item.forEach( item => {
		arr2[index].push(item.split('@'))
		});
	});


	let arr3 = arr2.map(item => {
	return Object.fromEntries(item);
	});


	let obj= {};

	arr3.forEach(item => {
	obj[item['Кадастровый номер']] = item;
	});

	return obj;
}


let dataObject = createObjectFromArray(data);



function findLandPlot(numberCadastr) {
	let number = '	'+numberCadastr+'	';
	let dataPerson = dataObject[number];
	console.log(dataPerson)
	return dataPerson;
}



let cadastrNumber = document.querySelector('#numberCadastr');
cadastrNumber.addEventListener('change', () => {
		if (cadastrNumber.value.length === 22) {
			let objPerson = findLandPlot(cadastrNumber.value);
			changeDataContract(objPerson);
		}
	});


let datalist = document.querySelector('datalist');
for(let cadastrNumber in dataObject){
	let option = document.createElement('option');
	option.value = cadastrNumber.trim();
	datalist.append(option);
}



function changeDataContract(dataPerson) {
	function changeName(namePerson) {
		let nameLandlordNodeAll = document.querySelectorAll('.name-landlord');
		nameLandlordNodeAll.forEach((element,index) => {
			if (index === 2) {
				let arr = namePerson.split(' ');
				let str = '' + arr[0] + ' ' + arr[1][0] + '.' +  arr[2][0] + '.';
				element.textContent = str;
			} else {
				element.textContent = namePerson;
			}
		})
	}

	changeName(dataPerson['ФИО']);


	function changeVillage(village) {
		let villageHeader = document.querySelector('.villageHeader');
		let villageBottom = document.querySelector('.villageBottom');
		if (village.trim() == 'Асіївська сільрада') {
			villageHeader.textContent = 'Асіївка';
			villageBottom.textContent = 'Асіївської';
		} else if (village.trim() == 'Лозовеньківська сільська рада') {
			villageHeader.textContent = 'Лозовенька';
			villageBottom.textContent = 'Лозовеньківської';
		}

	}

	changeVillage(dataPerson['Сельсовет']);


	function changeNumberDateRegistration(numberRegistration, dateRegistration) {
		let spanDateRegistration = document.querySelectorAll('.date-contract-registration'); 
		let spanNumberRegistration = document.querySelectorAll('.number-registration');

		spanDateRegistration.forEach(elem => { elem.textContent = dateRegistration });
		spanNumberRegistration.forEach(elem => { elem.textContent = numberRegistration });
	}

	changeNumberDateRegistration(dataPerson['Номер регистрации'], dataPerson['Дата регистрации'])


	function changeArea(area) {
		let spanArea = document.querySelector('.area');
		spanArea.textContent = area.slice(1,7);
	}

	changeArea(dataPerson['Площадь'])


	function changePaySum(costLand, dateCost) {
		let numberWords_1 = ["одна", "дві", "три","чотири","п'ять","шість","сім","вісім","дев'ять"];
		let numberWords_4 = ["десять","одинадцять","дванадцять","тринадцять","чотирнадцять","п'ятнадцять","шістнадцяь","сімнадцять","вісімнадцть","дев'ятнадцять","двадцять"];
		let numberWords_2 = ["десять", "двадцять", "тридцять","сорок","п'ятдесят","шістдесят","сімдесят","вісімдесят","дев'яносто"];
		let numberWords_3 = ["сто", "двісті", "триста","чотириста","п'ятсот","шістсот","сімсот","вісімcот","дев'ятсот"];
		let thousand = ['тисяча','тисячі', 'тисяч'];
	
		


		let costLandNumber = +costLand.replace(' ', '').replace(',','.');
		let yearCostNumber = +dateCost.slice(-5);

		let indexing = {
			'2007-2010': '1.756',
			2007:'',
			2008:'1.22',
			2009:'',
			2010:'',
			2011:'',
			2015:'1.249',
			2016:'1.2'
		}

		let rentYear;

		if (yearCostNumber > 2016) {
			rentYear = costLandNumber * 0.09;
		} else if (yearCostNumber >= 2007 &&  yearCostNumber <= 2011) {
			rentYear = costLandNumber * indexing['2007-2010'] * indexing[yearCostNumber] * 
				indexing['2015'] * indexing['2016'] * 0.09;
		} else if (yearCostNumber >= 2012 && yearCostNumber <= 2014) {
			rentYear = costLandNumber * indexing['2015'] * indexing['2016'] * 0.09;
		} else if (yearCostNumber == 2015) {
			rentYear = costLandNumber * indexing['2016'] * 0.09;
		} else if (yearCostNumber > 2016) {
			rentYear = costLandNumber * 0.09;
		} 

		document.querySelector('.rent').textContent = `${rentYear.toFixed(2).replace('.',',')}`;
		document.querySelector('.rentPennies').textContent = `${rentYear.toFixed(2).slice(-2)}`;


		function makeStringFromNum(number){
			let stringRent = '';
			let numArray = parseInt(number).toString().split('');
			console.log(numArray);

			if(numArray.length === 3){
				numArray.forEach((item, index, arr)=>{
					if (index === 0) stringRent += numberWords_3[+item - 1] + ' ';
					else if (index === 1 && item != 0 && item != 1) stringRent += numberWords_2[+item - 1] + ' ';
					else if (index === 2 && item != 0 && arr[index - 1] != 1) stringRent += numberWords_1[+item - 1];
					else if (index === 1 && item == 1) stringRent += numberWords_4[+arr[index + 1]];
				})
			} else if(numArray.length === 4){
				numArray.forEach((item, index, arr)=>{
					if (index === 0) {
						stringRent += numberWords_1[+item - 1] + ' ';
						if (+item === 1) stringRent += thousand[0] + ' ';
						else if (+item > 1 && +item <= 4) stringRent += thousand[1] + ' ';
						else if (+item > 4) stringRent += thousand[2] + ' ';
					}
					else if (index === 1 && item != 0) stringRent += numberWords_3[+item - 1] + ' ';
					else if (index === 2 && item != 0 && item != 1) stringRent += numberWords_2[+item - 1] + ' ';
					else if (index === 3 && item != 0 && arr[index - 1] != 1) stringRent += numberWords_1[+item - 1];
					else if (index === 2 && item == 1) stringRent += numberWords_4[+arr[index + 1]];
				})
			} else if (numArray.length === 5) {
				numArray.forEach((item, index, arr)=>{
					if (index === 0 && +item === 1 ) {
						stringRent += numberWords_4[+arr[index + 1]] + ' ' + thousand[2] + ' ';
					}
					//else if(index === 0 && +item != 1) 
					else if (index === 1 && item != 0) stringRent += numberWords_3[+item - 1] + ' ';
					else if (index === 2 && item != 0 && item != 1) stringRent += numberWords_2[+item - 1] + ' ';
					else if (index === 3 && item != 0 && arr[index - 1] != 1) stringRent += numberWords_1[+item - 1];
					else if (index === 2 && item == 1) stringRent += numberWords_4[+arr[index + 1]];
				})
			}



			console.log(number);
			console.log(stringRent);
		}

		makeStringFromNum(185);

		console.log(+rentYear.toFixed(2));
		return +rentYear.toFixed(2);
	}

	changePaySum(dataPerson['Нормативная стоимость'], dataPerson['Дата определения стоимости']);


	function changePasportData(location, seriaPasport, numPasport, datePasport, givePasport, identificNumber) {
		document.querySelector('.location').textContent = location;
		document.querySelector('.seriaPasport').textContent = seriaPasport;
		document.querySelector('.numPasport').textContent = numPasport;
		document.querySelector('.datePasport').textContent = datePasport;
		document.querySelector('.givePasport').textContent = givePasport;
		document.querySelector('.identificNumber').textContent = identificNumber;
	}

	changePasportData(dataPerson['прописка'],dataPerson['Серия паспорта'],dataPerson['Номер паспорта'],dataPerson['Дата выдачи паспорта'],dataPerson['Выдан паспорт'],dataPerson['ИНН']);

}





