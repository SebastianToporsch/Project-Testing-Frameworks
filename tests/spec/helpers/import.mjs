/* eslint-disable no-undef */
import JasmineDOM from '@testing-library/jasmine-dom'

beforeAll(() => {
  jasmine.getEnv().addMatchers(JasmineDOM)
  jasmine.addMatchers(JasmineDOM)
  jasmine.Expectation.addCoreMatchers(JasmineDOM)
  console.log('test')
})
