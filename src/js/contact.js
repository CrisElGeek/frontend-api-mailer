import {FormProcess, CSRFHash} from './libs/mailer.js'

var config = {
	apiUrl:'https://fiasabot.chavodigital.com/api/v1/messenger-forms/',
	module: 'contact',
	messages: {
		success: {
			title: 'Mensaje enviado',
			text: 'Tu mensaje ha sido enviado correctamente, pronto nos pondremos en contacto contigo'
		},
		failed: {
			title: 'Ha ocurrido un error',
			text: 'No pudimos enviar su mensaje, por favor, intente de nuevo, si el problema persiste, pongase en contacto con nosotros.'
		}
	}
}

let rules = {
	name: {
		empty: {},
		len: {min: 3, max: 50}
	},
	email: {
		empty: {},
		email: null
	},
	message: {
		empty: {},
	}
}

window.extAsyncInit = function() {
	//new CSRFHash('#contactForm', config).Get()
	let btn = document.querySelector("#cancel-btn")
	new FormProcess('#contactForm', config, rules).Send()
		.then(response => {
			console.log(response)
			closeBrowser()
		}).catch(error => {
			console.log(error)
		})
	btn.addEventListener('click', e => {
		e.preventDefault()
		closeBrowser()
	})
}

function closeBrowser() {
	let errMsgText = document.querySelector('#error-msg')
	MessengerExtensions.requestCloseBrowser(function success() {
		console.log('Closed correctly')
	}, function error(err) {
		errMsgText.textContent = `Ocurrio un error al cerrar la ventana, código de Facebook del error: ${err}`
	})
}

import '../sass/forms.sass'
