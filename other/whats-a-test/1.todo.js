// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b
const subtract = (a, b) => a - b

const testFunction = func => {
  return (a1, a2, expectation) => {
    console.log(`Testing ${func.name} with args ${a1} & ${a2}`)
    const result = func(a1, a2)
    if (result !== expectation) {
      throw new Error(`Result ${result} is NOT the expected ${expectation}`)
    }
    console.log('OK!')
  }
}

const testSum = testFunction(sum)
testSum(2, 2, 4)

const testSubtract = testFunction(subtract)
testSubtract(2, 2, 0)
