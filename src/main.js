// var button = document.querySelector('button');

// Rx.Observable.fromEvent(button, 'click')
// 	.subscribe(function(e) {
// 	    console.log(e);
// 	});

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//    .subscribe(e => console.log(e));

// Rx.Observable.fromEvent(document, 'mousemove')
//   .subscribe(e => {
//       document.querySelector('h4').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
//   });


// Rx.Observable.of(5, 7, '9', 2, [5,4,7,1,2] )  // создаем стрим из любых данныхъ
// 	.subscribe(
// 		(x) => console.log(x),
// 		(err) => console.log(err),
// 		() => console.log('comlete') // метод OF завершает стрим сам
// 	)

 
// Rx.Observable.interval(1000)  // счетчит с нуля с заданым тнтервалом (1000мс)
// 	.take(5)                     // сколько получить значений из непрерывного потока. На 5 будет complete
// 	.subscribe(
// 		(x) => console.log(x),
// 		(err) => console.log(err),
// 		() => console.log('comlete') // метод OF завершает стрим сам
// 	)


// Rx.Observable.range(10, 5)  // числа (мгновенно) с первого значения + плюс еще второе значение
// 	.subscribe(
// 		(x) => console.log(x),
// 		(err) => console.log(err),
// 		() => console.log('comlete') 
// 	)


// console.log( [1,2,3,4,5] );
// console.log( new Set([1,2,3,4,5]) );
// console.log( new Map([ [1,2], [3,4] ]) );

// let arr = [1,5,7,4,3,6,8];

// //ES6
// arr = new Set([1,2,3,4,5])
// arr = new Map([ [1,2], [3,4] ])

// Rx.Observable.from(arr)  // итерация по массиву
// 	.subscribe(
// 		(x) => console.log(x),
// 		(err) => console.log(err),
// 		() => console.log('comlete') 
// 	)


// function delay( ms=1000 ) {
// 	return new Promise( (res, rej)  => {
// 		setTimeout(() => {
// 		  res ( ms ) // что бы что то показывать потом
// 		}, ms)
// 	}) ;
// }

// // delay( 3000 ).then( () => {
// // 	console.log('test');
// // } )

// Rx.Observable.fromPromise( delay(2000) )
// 	.subscribe(
// 		(x) => console.log(x),
// 		(err) => console.log(err),
// 		() => console.log('comlete') 
// 	)


// Map служит для переобразования элементов итерации 

 Rx.Observable.fromEvent( document.querySelector('input'), 'keyup' )
 	.map( x => {return x.target.value } ) // Метод Map всегда RETURN
 	.pluck('target', 'value')             // Метод Pluck - то же самое, только по принципу: ключ-значение
 	.map( x => {return x.toUpperCase() } ) // Метод Map можно вызывать сколько угодно
		.subscribe(
			(x) => console.log(x),
			(err) => console.log(err),
			() => console.log('comlete') 
		)