import { exec } from 'child_process';
import { promisify } from 'util';
import { decodePlayFairCypher } from './solution';


const execAsync = promisify(exec);

describe('solution.ts output', () => {
  it('should print the correct output to the console', async () => {
   const output = decodePlayFairCypher("IKEWENENXLNQLPZSLERUMRHEERYBOFNEINCHCV");

    const expected = 'HIPPOPOTOMONSTROSESQUIPPEDALIOPHOBIA';
    expect(output).toBe(expected);
  });
});
