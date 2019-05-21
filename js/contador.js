const getRemainTime = deadline => {
	let now = new Date(),
	remainTime = (new Date(deadline)- now + 1000)/1000,
	remainSeconds = ('0' + Math.floor(remainTime % 60 )).slice(-2),
	remainMinutes = ('0' + Math.floor(remainTime /60 % 60 )).slice(-2),
	remainHours = ('0' + Math.floor(remainTime /3600 % 24 )).slice(-2),
	remainDays = Math.floor(Math.round(remainTime) / (3600 * 24) );
	
	return{
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
};
 const contador = (deadline, elem, finalm) => {
	 const el = document.getElementById(elem);
	 const actualizacion = setInterval( () => {
		 
		 let tiempo =getRemainTime(deadline);
		 el.innerHTML= `<div class="half">
                                <span>${tiempo.remainDays} <sup>días</sup></span>
                                <span>${tiempo.remainHours } <sup>h</sup></span>
                            </div>
                            <div class="half">
                                <span>${tiempo.remainMinutes } <sup>min</sup></span>
                                <span>${tiempo.remainSeconds} <sup>s</sup></span>
                            </div>`
							if(tiempo.remainTime <= 1){
								clearInterval(actualizacion);
								el.innerHTML= 'Gracias por esperar'
							}
	 },1000	 )
	 
	 
 };
 contador('Wed Jun 5 2019 23:40:00 GMT-0400 (hora de Venezuela)', 'counter'); 
  
