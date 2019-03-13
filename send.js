const AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';

const sqs = new AWS.SQS();

// VisibilityTimeout the message is not deleted nor provided to some other consumer, till that period of time
// after 60 sec  if the message is not deleted it will be available to other consumer
let queueUrl;
const params = {
	QueueName: 'AGENT_MASS_EMAIL',
	Attributes: {
		ReceiveMessageWaitTimeSeconds: '20', //  Long Polling(wait till 20sec before asking for new messages)
		VisibilityTimeout: '60'
	}
};

sqs.createQueue(params, function(err, data) {
	if (err) {
		console.log('err', err.stack);
	} else {
		console.log('Successfully created SQS queueUrl', data.QueueUrl);
		createGroupedMessages(data.QueueUrl);
	}
});

async function createMessages(queueUrl) {
	const messages = [];
	for (let a = 0; a < 20; a++) {
		messages[a] = `This is the content for the message ${a} .`;
	}
	for (let content of messages) {
		console.log(`Sending Message: ${content}`);
		const params = {
			MessageBody: content,
			QueueUrl: queueUrl
		};
		await sqs.sendMessage(params, (err, data) => {
			if (err) {
				console.log(err, err.stack);
			} else {
				console.log(data);
			}
		});
	}
}

async function createGroupedMessages(queueUrl) {
	const messages = [];
	for (let a = 0; a < 4; a++) {
		messages[a] = [];
		for (let b = 0; b < 10; b++) {
			messages[a][b] = `This is the content for the message ${a * 10 + b} .`;
		}
	}
	let a = 0;
	for (let content of messages) {
		console.log(`Sending Message: ${JSON.stringify(content)}`);
		const params = {
			Entries: [],
			QueueUrl: queueUrl
		};
		for (var b = 0; b < 10; b++) {
			params.Entries.push({
				MessageBody: content[b],
				Id: `Message${a * 10 + b}`
			});
		}
		a++;
		await sqs.sendMessageBatch(params, (err, data) => {
			if (err) {
				console.log(err, err.stack);
			} else {
				console.log(data);
			}
		});
	}
}
