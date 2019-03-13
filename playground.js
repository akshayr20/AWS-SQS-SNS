const waitFor = ms => new Promise(r => setTimeout(r, ms));

// [1, 2, 3].forEach(async num => {
// 	await waitFor(500);
// 	console.log(num);
// });

const a = [1, 2, 3];
async function test() {
	for (let num of a) {
		await waitFor(1000);
		console.log(num);
	}
}

test();
console.log('DONE');

const message = [
	{
		MessageId: '10cf26e2-3b4f-46f9-b445-8960ebfe438a',
		ReceiptHandle:
			'AQEBX/0WcZPFfOFIUtlMScSAKBk8ain4xcCMYqDE01euSqiLGiiSd5vCFC8VrTX9Y9hF5ylow6Szh9Wgg3hcNQAO0DL0nWMDH8Z+GruQblq+Y8nbAC6QKHJpKEAP7LgUU+2MRpm+zOAGFv7yUXqE/lLETEZ1nABNvgHsnBl+k4cvRFugJBZHhrAghyhogAAMXuEB+Z6oBpnfXF0IHqOLmgT75u12AcSjNWvwx6YXD7xqH9dd6PAnbWR8uhOAO+GGCW2MtkkXpoAZUB/Atm/Pv9M+u1D6BXt9hhY0YY0sSD9tyDOT9aOzomVR2HrbEurAxB1zx1lA+LVbjk7ojQKAklndHm/yyzRnQL2mXkkbZFOSQKLLXOS8pczU+rgCnO7IfEXnuTmdyyhT2uJAyjUM6DvUEg==',
		MD5OfBody: 'c62937c48bfc7aa35398d73b0f5f4c9e',
		Body: 'This is the content for the message 10 .'
	},
	{
		MessageId: '9f3b9093-7bcf-485d-82ca-4d20a2cb8854',
		ReceiptHandle:
			'AQEBYLvj7DDaZAz46rv9wf5BYMDpO+DLbOFi+xoDFe2t42MDrTU8ouxNembDIMgnSY3seWYL6bvF9Ef5LQBoPO6Oj5rwjKKIBy4F0YB85ehLkcf75EPbvJhW+ptaHm0gBrIbIBWHCden6ScD9rguJeVmKmjZFyBxsaWxklAORwOZpAteoJvCo5izV4K3A+3t/qDPKGio3vaZiaIQRyx4na1S4adq/ANGCYIWVVi3m5cT6KLn6K9Zp9bHLdbFiTA26Rt6IPD308j31QC2ed2jsL8eZHxUFMDdZhvH01XEzzh386uD4V7N5o1/msxgdQ7OghWuyuhk1uxPtHsN9Z4BG7JZBrVksJp3Xg1JGIOxq4MZwqn82CxzyrBZh5KlwEamKh/Yl3QZp73f3G3X3zFqXTJFzg==',
		MD5OfBody: '9cbfb99cf98be04abaa763599f91aee9',
		Body: 'This is the content for the message 5 .'
	},
	{
		MessageId: '42ddbae3-dfc0-476a-8d81-678dc6404b7e',
		ReceiptHandle:
			'AQEB7n44y8DwonrQ6L72WsX3yZcuOisTEzM+22iq/ycxhu2ZtLHS0WsG61un+YUNPnNKdljAE9T1NvZCEPCjUQoahApxrbYtiMjc9FulmZdMEktYfyPKY3BliR68OQo5m39X5jEGJZm6zQT+zEcKIRsRXFjwSsOyHcFerfHzoQ0EjVkN/E0m7BVIDTNQVrdQ6Fs2PiQ9AbLTEEX/X/yDPSV9dF/HcLxLlbW96DKok1N/34mejCm02Zu1a0sgKy3Ic7mycy7RvFtdOWATQLXK+lrCxVGjzCUyWg2rjy0NxB5nz6fRgxI+lsaj0G4Vzu6MySwcAVRIIONUdDWl9IDoWapmBeyhTAzS6lcjfGAzXC7vaR/OnKzGtBbuTB5VBRvt3301E/Qms0EItlR/Gp7G/3GSEw==',
		MD5OfBody: '12fb6124f38c86abfc72e50ec9bb74bb',
		Body: 'This is the content for the message 4 .'
	},
	{
		MessageId: '4069c537-1e14-4bb8-bc10-551e9d9ea8ba',
		ReceiptHandle:
			'AQEB8N1vVcLuooAhbtc+4VqI7xveGxIXAy3hofg78oTNHpa7M3AZRiKmeyimEEsBQvWWIhD7DikXzeUTV4AJxoczwrBu/Hv0/+Cd/jdT2LCkIKPI+fRAPyAT/fBYYq+ajQRgE40Lvl1c3BwYfKNAOxjQQWf00mWyq7AlbxrxWy91FyaDulHTzskOotubRL+H2U/U2UAgE6jZxsNK3X9L1Ri6LjyjHcRy2GsfCNAWILDcyA5wRaONEIPVDarX/QM+FkwRC0A+W2hBxT+V8w2myLMh6+JKLjNKxIUf1ZdVYJb0Ku9BfTHJI84eOsHyZOWlwmrxACJeFV1+3dkDsSccCzgB9W1rKh/rAXedlzyusEfEGwbxcq/vjec0zaTr/71we8Bk6X+gJeZAw79MiC71KqqOtQ==',
		MD5OfBody: '9cbfb99cf98be04abaa763599f91aee9',
		Body: 'This is the content for the message 5 .'
	},
	{
		MessageId: 'd7aa10f2-1a4b-4cf2-a403-8e2c9ac7bc0c',
		ReceiptHandle:
			'AQEB3um5LIoDwsdcnc8HC6krfyJh3MVD93GwnHdHeiRjugTCc5dAIblA3pNPj5B4DYWCx9Dk4mDOAjOeB6axq1oE/Bf+S7HMzpHdLmg6XbLtWKA73b+z5Dp/LYAJzM/8DAHiIXsG2GESh3KxZFhui43ji6mjD68sRtnh2glVIMgc/Fx70NiwddIZGhrl7qEkKV//OiRW56MNaX40W+UMUhy5WvOiN7ubGzaqF08nFXjpk/9l1I9UUpUh4FtZNRBGJsMxQM4aKWX7lXKKzePAcW3QwKXbPgev4vOy/kHgtdv3MIJQKi5BEblyNuoL+Qvi1Up2musX1WpLbCF1bQlMcSqm/XGge3qgz2tU33OpT3QShKK02tDhKFBsW8IoCW8Odotn7Ww0HZXYXIiBWSl30nEn6Q==',
		MD5OfBody: '013317494db6d03ec60ec4838f46d134',
		Body: 'This is the content for the message 14 .'
	},
	{
		MessageId: 'cf1a3d6b-d641-4241-96df-84b03204c2fa',
		ReceiptHandle:
			'AQEB+fKk++PUqiMGV3WswPlcFZgkR1euhG2XqlN8yqXhzTm0VaYmKSR67mg5vFZ7JFqNBDcOjpgzuQoktda8CC0vHJVuTnznQ5uhgWlTZ/dUTLyV8vUeL2W4WHNWABXvKhbJirj2wP+J9NUBW/TEItP/YsC65bY4zNLIwkBTdVuc7v4fQLq0uLGjcfLTqp2ZIUdm5WMyc7fuzNySn8KZHvrHFbieMxxmidNcaukY2lJQzoXDv7gvZQSw5xktXsh0NDJ6HEaiiXd7QbrIaZElg0ArO8uZH+bMHrVoqFRXM6rmjuC3OqxO9wO1Zb2O7K2FgxSMjOmz4pGwuUGOCneIM6vee6e9nvBEixp3n8pIxjGkvI7YlcznV7+JNBS9p+Qzzr6Ja63K6tVucpliiny7Dx1xeg==',
		MD5OfBody: '4e73300902dee4c4db6450bdf848942d',
		Body: 'This is the content for the message 15 .'
	},
	{
		MessageId: '3da7d085-0d1f-469b-be38-2e14c678ede8',
		ReceiptHandle:
			'AQEB26XvZRLopREW/xuHaOurybn9d2PLN5Uk63wLxIIYkunClTrD4apiro/fvK2trIsaqjuiGuG/Iin07e3wQlbIzUkwDeCtxz4QTSuS0gmDZgV3EILfxjehMG9NWqgTVH73wiJj29xuldR/eA0GQzWjbaxeK3AiIMTXBVue/dueukMtjsTXJMbY78WaO9ZGcYqp07n9SWHkm6ThQtNE++Ko1c8mgMbC69qMToeVaKf0XcGBSSYBh9ExQTuO+AMTzg0Dtwch9tftGTba0ealEY2b0jlylgtF2jSsaZZa6JiqJESQio1fU03zqrLh+xN4I9NfpnU6B/MmITB7+DplH5OmNKZwAvZuJAKPGiHl3iseRWWmKbY6iv/+AWZNOV0U4lF/5QxGap6hykk1uG3YLjdNAQ==',
		MD5OfBody: 'bb361148faf483ca232a30e2e56fce41',
		Body: 'This is the content for the message 30 .'
	},
	{
		MessageId: 'abf771d2-70d1-46b4-90ef-0b74c9b87d2e',
		ReceiptHandle:
			'AQEBPaEhhYfvdxaSqG9HpDpIR8gj/tQVWDwP9gDpHA+K2aUhewKISR/RoyyTeSY6v0V2fc0KlNpUeDc8lOB6O6kgarMt/8joWizAnE61gj19Bwc8ofgfvhLfGCQ36cSpfGICbrnzu9T0Ti/MgZChA2LFF78Bo9FATo+soLcungyugZdCOFu321gOhyvd0/2++E2/HzFo/f2XVZChR+tQY9PIpV3amUrzE779KLkcFdGOEL7J+CY3+IW1tmWIDJEa7awkNvpHCuWjs/ZcT7/V9RZEen7FLUdYhxlbZPZ1EPUzt/wPsR26v2bXxl+tuUJvvCz/nKTzH8i5dHE7rANUuAkwfHYR0/VdVBAQiCt0iFRH8/sUxgjR+xVR6+XBiQTKxD3Hzc5ZeLXHrcUYY1Hb/1wiIw==',
		MD5OfBody: 'c3468d4c27a90532f083596ac479f0a7',
		Body: 'This is the content for the message 31 .'
	},
	{
		MessageId: 'fdd50ed4-4ebe-4aea-848b-977910cc786e',
		ReceiptHandle:
			'AQEBMduf6n/7RFaN9vUTHSZo3YAo584Wvd59/7r1m7bKUeoFj/kWb3aIbWWd0ZREhcFzKTdmk8j+/WvQb1QJFQFeXBIj2lIi5jimIvvWqSoq8IMnofxwAhBjYBZ3fKxpYkHRdg4dq9q5rmHorBnIGtLao2x02YCBWYmgCXUV4nM0u+1EzdZacFYs6ClpbT6+TzNbQnbfsetlZi2eKrutXNavDriqfNW+Pc18tqG/Uz0yeu9cqdcpqKiT7vfl0MnBgi46RJblVEbZDh0snxlpg6M2q8L3RcK8ANnisosRCrvlGh98bPk51hlL6mdw2a5k8aVwqwt0NQGCfAg8qWfxWIRLXgteFQ8AwEZxIWD4jbIEXUn6Km/L9LSKe22dinnoUrP/HsZVBROe0kuDGgqqGzn5SA==',
		MD5OfBody: '29f3b5ebf66b7996ef545d4ef1044e08',
		Body: 'This is the content for the message 24 .'
	},
	{
		MessageId: 'd96b1c34-8171-4e1c-8bbf-b131187247fb',
		ReceiptHandle:
			'AQEB/Eb09enH+epR9JH1KUmJmkxdu2lNaXTQKfTF5kI7oPefLgo+MyU1jCyIli7MTO/KoCu7MhokK9Gzt59aP3b2LYKzKLrxTPJmJEalASx/uVgh9x0NzsVB4RTAHwDo2ZZhtWlyFc8VJRZH4LnLTQLI9hknQ7SQVaGa1z/wVdWQRS0OXLIAej1ge0g5Us9g7mjM17nyq80cQ4TdK/CZ7lW18N0PEgepwxCycrMyi1/rCbtoSlHZMfVGy3dBgBwROfAaxzGdysN4VXlYPi3K8P0jkKZ+zEkn/Aj+GhgspaQn6rdDVQi/YsTSE49fIltCkM7P2EVkVkm442RvZyKMNG5oL8/YXA/AtQNFLkVhVVBLNdJbxu7RipykY5a9XcJwZBSkgO/2PrFYE2JG/FtbwfR50w==',
		MD5OfBody: 'f5bba0ee3324bad0c51ac4602ea88c8e',
		Body: 'This is the content for the message 25 .'
	}
];
