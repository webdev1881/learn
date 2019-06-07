//window.onload = function(){
let v = console;
let d = document;

/*
var p = new Promise(function(resolve, reject){	
	setTimeout(function foo(){
		for(var i = 0; i<100; i++){
			v.log("Загрузка картинки " + i)			
		}
		return resolve();	
	},1000);	
});


function next(){
v.log("сервак загружен");
}

//add()
//next()
p.then(function(){
	next();
});
v.log("Грузим дом")


function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Запуск (запуск синхронного кода)');

  var p1 = new Promise(
  
    function(resolve, reject) {       
      log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Запуск обещания (запуск асинхронного кода)');
	  
      window.setTimeout(
        function() {
          // Обещание выполнено!
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });


  p1.then(
    function(val) {
      log.insertAdjacentHTML('beforeend', val +') Обещание выполнено (асинхронный код завершён)');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Обещание создано (синхронный код завершён)');
}

//_______________________________________МОДУЛЬ MODULE
(function(){
	
	function Module(a,b){
		this.a = a;
		this.b = b;
		var p = "private"; // приватный
	}
	Module.prototype.sum = function(a,b){
			return a+b;
		};

	window.app = window.app || {};
	window.app.Module = Module;
})()

var m = new app.Module()
m.sum(5,7); //12

        function Tooltip() {  // Конструктор для всплывающей подсказки
            this.tooltip = document.createElement("div"); // Создание div для тени
            this.tooltip.style.position = "absolute";     // Абсолютное позиционирование.
            this.tooltip.style.visibility = "hidden";
            this.tooltip.className = "tooltip";
        }

        // Установка содержимого для подсказки и отображение
        Tooltip.prototype.show = function (text, x, y) {
            this.tooltip.innerHTML = text;             // Текст подсказки
            this.tooltip.style.left = x + "px";        // Координаты
            this.tooltip.style.top = y + "px";
            this.tooltip.style.visibility = "visible";

            // Добавление подсказки в документ если он еще не присутствует.
            if (this.tooltip.parentNode != document.body)
                document.body.appendChild(this.tooltip);
        };

        // Функция для скрытия подсказки
        Tooltip.prototype.hide = function () {
            this.tooltip.style.visibility = "hidden";
        };

        window.onload = function () {
            var d = document.getElementById("test");
            d.onmousemove = mouseMoveHandler;
            d.onmouseout = mouseOutHandler;
        }

        var t = new Tooltip();

        function mouseMoveHandler(e) {
            if (!e) e = window.event;
            t.show("This is tooltip text!!!", e.clientX + 10, e.clientY + 10);
        }

        function mouseOutHandler() {
            t.hide();
        }


	function tShow(text,x,y){
		tt.style.visibility = "visible";
		tt.innerHTML = text;
		tt.style.top = x + "px";
		tt.style.left = y + "px";
	}	
	let div = d.getElementsByTagName("div");	
	for(var i=0; i<div.length; i++){
				div[i].onmousemove = function(e){
				tShow(this.innerHTML, e.clientY + 10, e.clientX + 10 )
			};
			div[i].onmouseout = function(e){
				tt.style.visibility = "hidden"
			};			
	}
	

function tShow(text,x,y){
	tt.style.visibility = "visible";
	tt.innerHTML = text;
	tt.style.top = x + "px";
	tt.style.left = y + "px";
}
document.onmousemove = function(e){
	if(e.target.tagName != "HTML"){
		tShow(e.target.innerText, e.clientY + 10, e.clientX + 10 )			
	}
}
document.onmouseout = function(e){
	tt.style.visibility = "hidden"
}

var divColor = document.createElement("div");
document.body.appendChild(divColor)

divColor.style.width = "300px";
divColor.style.height = "300px";
divColor.style.border = "solid black 1px";

var color = 0;

setInterval(function () {
	color = color + 1 % 360;
	divColor.style.backgroundColor = "hsl(" + color + ", 100%, 100%)"; // H — тон [0; 360] S — насыщенность[%] L — светлота [%]
}, 50);




var computedStyle = getComputedStyle(document.body);
v.log( computedStyle.marginTop ); // выведет отступ в пикселях
v.log( computedStyle.color ); // выведет цвет
v.log(computedStyle)



window.onload = function () {
	var btn1 = document.getElementById("button1");
	var btn2 = document.getElementById("button2");
	if (btn1.addEventListener)
		{
			btn1.addEventListener("click", handler, false);
			btn2.addEventListener("click", removeHandler, false);
		}
	function handler() {
		v.log("Обработчик события нажатия кнопки");
	}
	function removeHandler() {
		btn1.removeEventListener("click", handler, false);
	}
}



button1.addEventListener("click", function(){
	this.style.backgroundColor = "red"
}, false )


document.body.addEventListener("click", function(){
	v.log("This is a body")
}, true )

container.addEventListener("click", function(){
	v.log("This is a DIV")
}, false )

button1.addEventListener("click", function(){
	v.log("This is a BUTTON in DIV")
}, true )



but.onclick = function(e){
	if(inp.value.length == 0){
		e.preventDefault();
		throw new Error("UPS") // My Eroor
	} else{
		v.log(inp.value)
		inp.value = ""
		inp.focus()		
	}	
}


//______________________________
inp.addEventListener("keypress", function (e) {
	if (String.fromCharCode(e.charCode) != '1'
		&& String.fromCharCode(e.charCode) != '0') {
		// если нажатая кнопка не 0 или 1 отменить действие по умолчанию.
		e.preventDefault();
	}
}, true);

// e.stopPropagation() //Остановка сценария
var isTunnel = true;

var e1 = document.getElementById("first");
var e2 = document.getElementById("second");
var e3 = document.getElementById("third");

e1.addEventListener("click",
	// e - параметр хранит объект с информацией о событии.
	function (e) {		
		this.style.backgroundColor = "green";
		alert("Обработчик DIV 1");
		// прекращение дальнейшего маршрута события.
		e.stopPropagation();
	},
isTunnel);

e2.addEventListener("click",
	function (e) {
		this.style.backgroundColor = "yellow";
		alert("Обработчик DIV 2");
		e.stopPropagation();
	},
isTunnel);

e3.addEventListener("click",
	function (e) {
		this.style.backgroundColor = "red";
		alert("Обработчик DIV 3");
		e.stopPropagation();
	},
isTunnel);


function handler(e) {
	if (!e) e = window.event; // получение информации о событии в IE. 
	
	var message = "";
	message += "type: " + e.type + "<br />";                    // тип события.
	message += "srcElement:" + e.srcElement + "<br />";         // отправитель события.
	message += "button:" + e.button + "<br />";                 // 1 - левая клавиша, 2 - правая клавиша, 4 - средняя.
	message += "clientX:" + e.clientX + "<br />";               // координаты мыши относительно окна.
	message += "clientY:" + e.clientY + "<br />";               // координаты мыши относительно окна.
	message += "offsetX:" + e.offsetX + "<br />";               // координаты относительно элемента в котором произошло событие.
	message += "offsetY:" + e.offsetY + "<br />";               // координаты относительно элемента в котором произошло событие.
	message += "altKey:" + e.altKey + "<br />";                 // true если зажата клавиша Alt
	message += "ctrlKey:" + e.ctrlKey + "<br />";               // true если зажата клавиша Ctrl
	message += "shiftKey:" + e.shiftKey + "<br />";             // true если зажата клавиша Shift
	message += "keyCode:" + e.keyCode + "<br />";               // код клавиши для события keydown и keyup или код unicode символа для события keypress
	message += "cancelBubble:" + e.cancelBubble + "<br />";     // присвоить true для предотвращения "всплывания" события.
	message += "returnValue:" + e.returnValue + "<br />";       // присвоить false для предотвращения выполнения операции по умолчанию.

	document.body.innerHTML = message;
}

*/

//v.log(window.jQuery.fn.jquery)


"<script>alert()</script>"



let arr = [2,15,98,101,99]
arr.sort(function(a,b){return a+b} )
v.log(arr)










//document.getElementsByClassName("cbalink")[0].remove()
//}

