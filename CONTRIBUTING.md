# Requerimentos
Este módulo esta optimizado para trabajar con [Mailer API de criselgeek](https://github.com/CrisElGeek/mailer-api) pero puede ser utilizado tambien con otras API realizando algunos ajustes en el achivo de configuracion JAvascript del formulario

## Node Modules

- [Validator](https://www.npmjs.com/package/validator)
- axios

# Documentación

## Crear el formulario

- El formulario debe contar con el mismo nombre de atributo id que utilizamos en el archivo Javascript
- Cada imput, textarea o select del formulario debe contar con su atributo name
- Para mostrar los mensajes de error de cada campo del formulario se debe crear un elemento html con su atributo data-id el cual debe llamarse igual que el name del input asociado, ademas este elemento debe contener un atributo id con el nombre *input-error* para que pueda ser identificado
- El formulario debe contener un elemento div con el atributo id con el nombre *form-loading* dentro de este elemento irá un elemento img
- También debe contener un div con un atributo id llamado *form-message*
- Dentro de este elemento anterior debe ir otros dos elementos con el id *form-message-title* y *form-message-text*, en este se mostrarán los mensajes generales del proceso de envio del formulario no relacionados con la validación de campos

## funcionamiento
- Opcionalmente dependiendo del API se puede necesitar un hash CSRF para validar, este se puede realizar desde el archivo de javascript, este automaticamente lo incluirá dentro del formulario como otro elemento que luego se enviará por medio de la petición POST al enviar el formulario
- Cuando el elemento loading este activo (cuando se esta realizando la peticion al api) se agregará automaticamente una clase llamada *spinner-load* la cual puede ser utilizada para mostrar u ocultar este elemento
- Cuando se muestre un mensaje en el elemento con id *form-message* se agregará a este el atributo class con el nombre *alert-danger* para errores o bien *alert-success* para mensajes satifactorios, estos se pueden utilizar para mostrar o esconder los mensajes
- En el caso de los mensages de alerta relacionados con la verificacion de los elementos del formulario por medio de javascript se agregará un *display: block* para mostrarlo, o *display: none* para esconderlos.
