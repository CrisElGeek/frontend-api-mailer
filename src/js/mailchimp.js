import {FormProcess, CSRFHash} from './libs/mailer.js'

var config = {
	apiUrl:'https://apimailer.cris.com.mx/mailer/v1/',
	module: 'mailchimp',
	messages: {
		success: {
			title: 'Subscripción realizada',
			text: 'Gracias por suscribirte a nuestro boletín de noticias!'
		},
		failed: {
			title: 'Ha ocurrido un error',
			text: 'No pudimos realizar su suscripción, por favor, intente de nuevo, si el problema persiste, pongase en contacto con nosotros.'
		}
	}
}

let rules = {
	email: {
		empty: {},
		email: null
	}
}

window.onload = () => {
	let FormName = '#mailchimp-signup'
	new FormProcess(FormName, config, rules).Send()
		.then(response => {
			console.log(response)
		}).catch(error => {
			console.log(error)
		})
	new CSRFHash(FormName, config).Get()
}

import '../sass/forms.sass'
