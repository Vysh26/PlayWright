// test.beforeAll(...)
// test.beforeEach(...)
// test.afterEach(...)
// test.afterAll(...)

// Execution order is:
// beforeAll         ← Runs once

// beforeEach        ← Test 1
// Test 1
// afterEach

// beforeEach        ← Test 2
// Test 2
// afterEach

// beforeEach        ← Test 3
// Test 3
// afterEach

// beforeEach        ← Test 4
// Test 4
// afterEach

// afterAll          ← Runs once