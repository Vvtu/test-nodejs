import 'babel-polyfill';
import fs from 'fs';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('test 1', () => {
	const randomsArray = [];
	for (var i = 0; i < 10; i++) {
		randomsArray.push(Math.floor(Math.random() * 300 + 10));
	}

	randomsArray.forEach((item, index) => {
		console.log('randomsArray[' + index + '] = ' + item);
	});

	beforeEach(() => {
		fs.writeFileSync('deployInfo.json', '1111');
	});
	afterEach(() => {
		fs.unlinkSync('deployInfo.json');
	});

	randomsArray.forEach((item, index) => {
		test('1 should run with index = ' + index, async () => {
			console.log('test ' + index);
			await sleep(item);
			expect(index).toBe(index);
		});
	});
});
