import 'babel-polyfill';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('test 1', () => {
	test('1 should be 1', async () => {
		await sleep(2000);
		expect(1).toBe(1);
	});
});
