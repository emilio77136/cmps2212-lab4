const accordion = document.querySelector('.accordion');

accordion.addEvenListener('click', function(event){
	const trigger = event.target.closest('.accordion-trigger');

	if(!trigger) return;

	const item = trigger.closest('.accordion-item');

	document.querySelectorAll('.accordion-iteam').forEach( i => {
		if(i !== item){
			i.classList.remove('open');
		}
	});

	item.classList.toggle('open');

});















