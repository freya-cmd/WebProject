console.log('Success!')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'stylesheet1.css';
		document.getElementById('gh').src = 'images/gh.png'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css';
		document.getElementById('gh').src = 'images/gh2.png'
		
	}

	localStorage.setItem('theme', mode)
}


var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 5);
}
  
function show() {
            var body = document.getElementById("h1");
            opacity = Number(window.getComputedStyle(body)
             .getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity = opacity + 0.3;
                body.style.opacity = opacity
            } else {
                clearInterval(intervalID);
            }
        }
