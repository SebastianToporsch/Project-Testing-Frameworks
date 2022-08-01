/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
import 'jasmine_dom_matchers'
import flush from 'flush-cache'
import pug from 'pug'
const { JSDOM } = jsdom

// setup JSDOM and jquery
const html = pug.renderFile('../views/ui/rest_index.pug')
const dom = new JSDOM(html)
const { window } = dom
const $ = jquery(window)

// flush cache and click events
beforeEach(async function () {
  flush()
  await $('#reset').click()
})

// texts
const text1 = $('#manipulateText1')
const text2 = $('#manipulateText2')
const text3 = $('#manipulateText3')

// texts
const input1 = $('#manipulateInput1')
const input2 = $('#manipulateInput2')
const input3 = $('#manipulateInput3')

// manipulation functions
function manipulation1 () {
  text1.html('CHECK1')
    .attr('testAttribute', 'test1')
    .addClass('testClass', 'test1')
    .css('color', 'red')
    .css('font-size', '18px')

  text2.html('CHECK2')
    .attr('testAttribute', 'test2')
    .addClass('testClass', 'test2')
    .css('color', 'green')
    .css('font-size', '20px')

  text3.html('CHECK3')
    .attr('testAttribute', 'test3')
    .addClass('testClass', 'test3')
    .css('font-size', '22px')
    .css('color', 'blue')
}

function manipulation2 () {
  input1.html('CHECK4')
    .attr('testAttribute', 'test4')
    .addClass('testClass', 'test4')
    .val('test4')
    .css('background-color', 'red')

  input2.html('CHECK5')
    .attr('testAttribute', 'test5')
    .addClass('testClass', 'test5')
    .val('test5')
    .css('background-color', 'green')

  input3.html('CHECK6')
    .attr('testAttribute', 'test6')
    .addClass('testClass', 'test6')
    .val('test6')
    .css('background-color', 'blue')
}

// reset dom
function reset () {
  text1.html('test1')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .remove('value')
  text2.html('test2')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .remove('value')
  text3.html('test3')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .remove('value')
  input1.html('test4')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .remove('value')
  input2.html('test5')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .remove('value')
  input3.html('test6')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .remove('value')
}

// add listeners
$('#checkbox3').on('click', manipulation1)
$('#date3').on('change', manipulation2)
$('#reset').on('click', reset)

describe('Checkbox Manipulation Tests', () => {
  it('should change text of the texts', async () => {
    expect(text1).toHaveText('test1')
    expect(text2).toHaveText('test2')
    expect(text3).toHaveText('test3')
    await $('#checkbox3').click()
    expect(text1).toHaveText('CHECK1')
    expect(text2).toHaveText('CHECK2')
    expect(text3).toHaveText('CHECK3')
  })

  it('should add attribute to the texts', async () => {
    expect(text1).not.toHaveAttr('testAttribute', 'test1')
    expect(text2).not.toHaveAttr('testAttribute', 'test2')
    expect(text3).not.toHaveAttr('testAttribute', 'test3')
    await $('#checkbox3').click()
    expect(text1).toHaveAttr('testAttribute', 'test1')
    expect(text2).toHaveAttr('testAttribute', 'test2')
    expect(text3).toHaveAttr('testAttribute', 'test3')
  })

  it('should add class to the texts', async () => {
    expect(text1).not.toHaveClass('testClass', 'test1')
    expect(text2).not.toHaveClass('testClass', 'test2')
    expect(text3).not.toHaveClass('testClass', 'test3')
    await $('#checkbox3').click()
    expect(text1).toHaveClass('testClass', 'test1')
    expect(text2).toHaveClass('testClass', 'test2')
    expect(text3).toHaveClass('testClass', 'test3')
  })

  it('should add color to the texts', async () => {
    expect(text1.css('color')).not.toContain('red')
    expect(text2.css('color')).not.toContain('green')
    expect(text3.css('color')).not.toContain('blue')
    await $('#checkbox3').click()
    expect(text1.css('color')).toContain('red')
    expect(text2.css('color')).toContain('green')
    expect(text3.css('color')).toContain('blue')
  })

  it('should add font-size to the texts', async () => {
    expect(text1.css('font-size')).not.toContain('font-size')
    expect(text2.css('font-size')).not.toContain('font-size')
    expect(text3.css('font-size')).not.toContain('font-size')
    await $('#checkbox3').click()
    expect(text1.css('font-size')).toContain('18px')
    expect(text2.css('font-size')).toContain('20px')
    expect(text3.css('font-size')).toContain('22px')
  })
})

describe('Date Picker Manipulation Tests', () => {
  it('should change text of the inputs', async () => {
    expect(input1).toHaveText('test4')
    expect(input2).toHaveText('test5')
    expect(input3).toHaveText('test6')
    await $('#date3').trigger('change')
    expect(input1).toHaveText('CHECK4')
    expect(input2).toHaveText('CHECK5')
    expect(input3).toHaveText('CHECK6')
  })

  it('should add attribute to the inputs', async () => {
    expect(input1).not.toHaveAttr('testAttribute', 'test4')
    expect(input2).not.toHaveAttr('testAttribute', 'test5')
    expect(input3).not.toHaveAttr('testAttribute', 'test6')
    await $('#date3').trigger('change')
    expect(input1).toHaveAttr('testAttribute', 'test4')
    expect(input2).toHaveAttr('testAttribute', 'test5')
    expect(input3).toHaveAttr('testAttribute', 'test6')
  })

  it('should add class to the inputs', async () => {
    expect(input1).not.toHaveClass('testClass', 'test4')
    expect(input2).not.toHaveClass('testClass', 'test5')
    expect(input3).not.toHaveClass('testClass', 'test6')
    await $('#date3').trigger('change')
    expect(input1).toHaveClass('testClass', 'test4')
    expect(input2).toHaveClass('testClass', 'test5')
    expect(input3).toHaveClass('testClass', 'test6')
  })

  it('should add value to the inputs', async () => {
    expect(input1).not.toHaveValue('test1')
    expect(input2).not.toHaveValue('test2')
    expect(input3).not.toHaveValue('test3')
    await $('#date3').trigger('change')
    expect(input1).toHaveValue('test4')
    expect(input2).toHaveValue('test5')
    expect(input3).toHaveValue('test6')
  })

  it('should add font-size to the texts', async () => {
    expect(input1.css('background-color')).not.toContain('red')
    expect(input2.css('background-color')).not.toContain('green')
    expect(input3.css('background-color')).not.toContain('blue')
    await $('#date3').trigger('change')
    expect(input1.css('background-color')).toContain('red')
    expect(input2.css('background-color')).toContain('green')
    expect(input3.css('background-color')).toContain('blue')
  })
})
