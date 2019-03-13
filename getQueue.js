const AWS = require('aws-sdk');

AWS.config.region = 'us-east-1';

const sqs = new AWS.SQS();

module.exports.getQueueLink = queueName => {
	return new Promise((resolve, reject) => {
		try {
			const params = {
				QueueNamePrefix: queueName
			};
			sqs.listQueues(params, (err, data) => {
				if (err) {
					console.log(err, err.stack);
					reject(err);
				} else {
					resolve(data.QueueUrls[0]);
				}
			});
		} catch (error) {
			reject(error);
		}
	});
};
