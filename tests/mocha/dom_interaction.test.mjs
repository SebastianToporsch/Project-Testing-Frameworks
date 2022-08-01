/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
const { JSDOM } = jsdom
const { window } = await JSDOM.fromFile('../fixtures/index.html')
const $ = jquery(window)

const wait = async ms => new Promise(res => setTimeout(res, ms))

beforeEach(function () {
  // jasmine.getFixtures().clearCache()
})

describe('Name of the group', () => {
  it('should behave...', async () => {
    console.log($('#checkboxText1').html())
    await $('checkbox1').trigger('click')
    await wait(2000)
    console.log($('#checkboxText1').html())
    // console.log(window)
    // console.log($('checkboxText1'))
    // expect($('checkboxText1').html()).toBe('TEST')
  })
})
