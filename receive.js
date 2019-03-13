const AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';

const sqs = new AWS.SQS();

const { getQueueLink } = require('./getQueue.js');

// POLL Queue for messages then process and delete
let waitingSQS = false;
let queueCounter = 0;

let queueUrl;
(async function getQueueUrl() {
	queueUrl = await getQueueLink('AGENT_MASS_EMAIL');
})();

setInterval(() => {
	if (!waitingSQS && queueUrl) {
		if (queueCounter <= 0) {
			receiveMessages();
		} else --queueCounter;
	}
}, 1000);

function receiveMessages() {
	var params = {
		QueueUrl: queueUrl,
		MaxNumberOfMessages: 10,
		VisibilityTimeout: 60,
		WaitTimeSeconds: 20 // wait for messages to arrive
	};
	waitingSQS = true; //  wait till all messages are arrived before calling this function again;
	sqs.receiveMessage(params, (err, data) => {
		if (err) {
			waitingSQS = false;
			console.log('err', err.stack);
		} else {
			waitingSQS = false;
			if (typeof data.Messages !== 'undefined' && data.Messages.length !== 0) {
				console.log(`Received  ${data.Messages.length} messages from the sqs queue`);
				processMessages(data.Messages);
			} else {
				queueCounter = 60; // Queue  empty back of for 60s;
				console.log(`SQS Queue empty waiting for ${queueCounter}s.`);
			}
		}
	});
}

async function processMessages(messages) {
	for (let content of messages) {
		console.log(`Processing Messages:  ${content.Body}`);
		const params = {
			QueueUrl: queueUrl,
			ReceiptHandle: content.ReceiptHandle
		};
		console.log(params);
		await sqs.deleteMessage(params, (err, data) => {
			if (err) {
				console.log(err, err.stack);
			} else {
				console.log(`Deleted message RequestId: ${JSON.stringify(data.ResponseMetadata.RequestId)}`);
			}
		});
	}
}
