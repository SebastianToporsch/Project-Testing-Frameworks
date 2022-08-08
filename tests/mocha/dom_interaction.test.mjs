/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
import chaiDOM from 'chai-dom'
import flush from 'flush-cache'
import pug from 'pug'
import chai, { expect } from 'chai'
chai.use(chaiDOM)

const { JSDOM } = jsdom

// setup JSDOM and jquery
const html = pug.renderFile('./views/ui/rest_index.pug')
const dom = new JSDOM(html)

const { window } = dom
const $ = jquery(window)

global.window = dom.window

// flush cache
beforeEach(function () {
  flush()
})

// checkboxes
const checkbox1Element = $('#manipulateCheckbox1')
const checkbox2Element = $('#manipulateCheckbox2')
const checkbox3Element = $('#manipulateCheckbox3')

// date pickers
const datePicker1Element = $('#manipulateDatePicker1')
const datePicker2Element = $('#manipulateDatePicker2')
const datePicker3Element = $('#manipulateDatePicker3')

// images
const image1Element = $('#manipulateImage1')
const image2Element = $('#manipulateImage2')
const image3Element = $('#manipulateImage3')

// image Buttons
const imageButton1Element = $('#manipulateImageButton1')
const imageButton2Element = $('#manipulateImageButton2')
const imageButton3Element = $('#manipulateImageButton3')

// inputs
const input1Element = $('#manipulateInput1')
const input2Element = $('#manipulateInput2')
const input3Element = $('#manipulateInput3')

// number steppers
const numberStepper1Element = $('#manipulateNumberStepper1')
const numberStepper2Element = $('#manipulateNumberStepper2')
const numberStepper3Element = $('#manipulateNumberStepper3')

// radio buttons
const radio1Element = $('#manipulateRadio1')
const radio2Element = $('#manipulateRadio2')
const radio3Element = $('#manipulateRadio3')

// texts
const text1Element = $('#manipulateText1')
const text2Element = $('#manipulateText2')
const text3Element = $('#manipulateText3')

// text buttons
const textButton1Element = $('#manipulateButton1')
const textButton2Element = $('#manipulateButton2')
const textButton3Element = $('#manipulateButton3')

// checkboxes
const checkbox1 = $('#manipulateCheckbox1')[0]
const checkbox2 = $('#manipulateCheckbox2')[0]
const checkbox3 = $('#manipulateCheckbox3')[0]

// date pickers
const datePicker1 = $('#manipulateDatePicker1')[0]
const datePicker2 = $('#manipulateDatePicker2')[0]
const datePicker3 = $('#manipulateDatePicker3')[0]

// images
const image1 = $('#manipulateImage1')[0]
const image2 = $('#manipulateImage2')[0]
const image3 = $('#manipulateImage3')[0]

// image Buttons
const imageButton1 = $('#manipulateImageButton1')[0]
const imageButton2 = $('#manipulateImageButton2')[0]
const imageButton3 = $('#manipulateImageButton3')[0]

// inputs
const input1 = $('#manipulateInput1')[0]
const input2 = $('#manipulateInput2')[0]
const input3 = $('#manipulateInput3')[0]

// number steppers
const numberStepper1 = $('#manipulateNumberStepper1')[0]
const numberStepper2 = $('#manipulateNumberStepper2')[0]
const numberStepper3 = $('#manipulateNumberStepper3')[0]

// radio buttons
const radio1 = $('#manipulateRadio1')[0]
const radio2 = $('#manipulateRadio2')[0]
const radio3 = $('#manipulateRadio3')[0]

// texts
const text1 = $('#manipulateText1')[0]
const text2 = $('#manipulateText2')[0]
const text3 = $('#manipulateText3')[0]

// text buttons
const textButton1 = $('#manipulateButton1')[0]
const textButton2 = $('#manipulateButton2')[0]
const textButton3 = $('#manipulateButton3')[0]

// manipulation functions

function manipulateCheckboxes () {
  checkbox1Element
    .attr('testAttribute', 'test1')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .css('width', '60px')

  checkbox2Element
    .attr('checked', 'true')
    .attr('testAttribute', 'test2')
    .addClass('testClass')
    .attr('disabled', 'true')
    .css('width', '70px')

  checkbox3Element
    .attr('testAttribute', 'test3')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .css('width', '80px')
}

function manipulateDatePickers () {
  datePicker1Element
    .attr('testAttribute', 'test4')
    .addClass('testClass')
    .attr('max', '2017-06-01')
    .attr('min', '2016-06-01')
    .val('2017-06-01')

  datePicker2Element
    .attr('testAttribute', 'test5')
    .addClass('testClass')
    .attr('max', '2017-06-02')
    .attr('min', '2016-06-02')
    .val('2017-06-02')

  datePicker3Element
    .attr('testAttribute', 'test6')
    .addClass('testClass')
    .attr('max', '2017-06-03')
    .attr('min', '2016-06-03')
    .val('2017-06-03')
}

function manipulateImages () {
  image1Element
    .attr('testAttribute', 'test7')
    .addClass('testClass')
    .attr('height', '60px')
    .attr('width', '60px')
    .attr('alt', 'image1')

  image2Element
    .attr('testAttribute', 'test8')
    .addClass('testClass')
    .attr('height', '70px')
    .attr('width', '70px')
    .attr('alt', 'image2')

  image3Element
    .attr('testAttribute', 'test9')
    .addClass('testClass')
    .attr('height', '80px')
    .attr('width', '80px')
    .attr('alt', 'image3')
}

function manipulateImageButtons () {
  imageButton1Element
    .attr('testAttribute', 'test10')
    .addClass('testClass')
    .attr('height', '60px')
    .attr('width', '60px')
    .attr('alt', 'imageButton1')

  imageButton2Element
    .attr('testAttribute', 'test11')
    .addClass('testClass')
    .attr('height', '70px')
    .attr('width', '70px')
    .attr('alt', 'imageButton2')

  imageButton3Element
    .attr('testAttribute', 'test12')
    .addClass('testClass')
    .attr('height', '80px')
    .attr('width', '80px')
    .attr('alt', 'imageButton3')
}

function manipulateInputs () {
  input1Element
    .html('CHECK13')
    .attr('testAttribute', 'test13')
    .addClass('testClass')
    .val('test13')
    .css('background-color', 'red')

  input2Element
    .html('CHECK14')
    .attr('testAttribute', 'test14')
    .addClass('testClass')
    .val('test14')
    .css('background-color', 'green')

  input3Element
    .html('CHECK15')
    .attr('testAttribute', 'test15')
    .addClass('testClass')
    .val('test15')
    .css('background-color', 'blue')
}

function manipulateNumberSteppers () {
  numberStepper1Element
    .attr('testAttribute', 'test16')
    .addClass('testClass')
    .attr('step', '2')
    .val('16')
    .css('background-color', 'red')

  numberStepper2Element
    .attr('testAttribute', 'test17')
    .addClass('testClass')
    .attr('step', '3')
    .val('17')
    .css('background-color', 'green')

  numberStepper3Element
    .attr('testAttribute', 'test18')
    .addClass('testClass')
    .attr('step', '4')
    .val('18')
    .css('background-color', 'blue')
}

function manipulateRadios () {
  radio1Element
    .attr('testAttribute', 'test19')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .attr('name', 'radio1')

  radio2Element
    .attr('testAttribute', 'test20')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .attr('name', 'radio2')

  radio3Element
    .attr('testAttribute', 'test21')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .attr('name', 'radio3')
}

function manipulateTexts () {
  text1Element
    .html('CHECK22')
    .attr('testAttribute', 'test22')
    .addClass('testClass')
    .css('color', 'red')
    .css('font-size', '18px')

  text2Element
    .html('CHECK23')
    .attr('testAttribute', 'test23')
    .addClass('testClass')
    .css('color', 'green')
    .css('font-size', '20px')

  text3Element
    .html('CHECK24')
    .attr('testAttribute', 'test24')
    .addClass('testClass')
    .css('color', 'blue')
    .css('font-size', '22px')
}

function manipulateTextButtons () {
  textButton1Element
    .html('CHECK25')
    .attr('testAttribute', 'test25')
    .addClass('testClass')
    .css('background-color', 'red')
    .css('font-size', '18px')

  textButton2Element
    .html('CHECK26')
    .attr('testAttribute', 'test26')
    .addClass('testClass')
    .css('background-color', 'green')
    .css('font-size', '20px')

  textButton3Element
    .html('CHECK27')
    .attr('testAttribute', 'test27')
    .addClass('testClass')
    .css('background-color', 'blue')
    .css('font-size', '22px')
}

// generic resetter
function resetElement (elem) {
  elem
    .removeClass('testClass')
    .removeAttr('testAttribute')
    .removeAttr('style')
    .removeAttr('value')
    .removeAttr('checked')
    .removeAttr('disabled')
    .removeAttr('max')
    .removeAttr('min')
    .removeAttr('alt')
    .removeAttr('step')
    .removeAttr('name')
}

function resetCheckboxes () {
  resetElement(checkbox1Element)
  resetElement(checkbox2Element)
  resetElement(checkbox3Element)
}

function resetDatePickers () {
  resetElement(datePicker1Element)
  resetElement(datePicker2Element)
  resetElement(datePicker3Element)
}

function resetImages () {
  resetElement(image1Element)
  image1Element
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(image2Element)
  image2Element
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(image3Element)
  image3Element
    .attr('height', '50px')
    .attr('width', '50px')
}

function resetImageButtons () {
  resetElement(imageButton1Element)
  imageButton1Element
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(imageButton2Element)
  imageButton2Element
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(imageButton3Element)
  imageButton3Element
    .attr('height', '50px')
    .attr('width', '50px')
}

function resetInputs () {
  resetElement(input1Element)
  resetElement(input2Element)
  resetElement(input3Element)
}

function resetNumberSteppers () {
  resetElement(numberStepper1Element)
  resetElement(numberStepper2Element)
  resetElement(numberStepper3Element)
}

function resetRadios () {
  resetElement(radio1Element)
  resetElement(radio2Element)
  resetElement(radio3Element)
}

function resetTexts () {
  resetElement(text1Element)
  resetElement(text2Element)
  resetElement(text3Element)
}

function resetTextButtons () {
  resetElement(textButton1Element)
  resetElement(textButton2Element)
  resetElement(textButton3Element)
}

// add listeners
$('#manipulateCheckboxes').on('click', manipulateCheckboxes)
$('#manipulateDatePickers').on('click', manipulateDatePickers)
$('#manipulateImages').on('click', manipulateImages)
$('#manipulateImageButtons').on('click', manipulateImageButtons)
$('#manipulateInputs').on('click', manipulateInputs)
$('#manipulateNumberSteppers').on('click', manipulateNumberSteppers)
$('#manipulateRadios').on('click', manipulateRadios)
$('#manipulateTexts').on('click', manipulateTexts)
$('#manipulateTextButtons').on('click', manipulateTextButtons)

// reset listeners
$('#resetCheckboxes').on('click', resetCheckboxes)
$('#resetDatePickers').on('click', resetDatePickers)
$('#resetImages').on('click', resetImages)
$('#resetImageButtons').on('click', resetImageButtons)
$('#resetInputs').on('click', resetInputs)
$('#resetNumberSteppers').on('click', resetNumberSteppers)
$('#resetRadioButtons').on('click', resetRadios)
$('#resetTexts').on('click', resetTexts)
$('#resetTextButtons').on('click', resetTextButtons)

// checkbox
describe('Checkbox Manipulation Tests', () => {
  it('should add attribute to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.attr('testAttribute', 'test1')
    expect(checkbox2).not.attr('testAttribute', 'test2')
    expect(checkbox3).not.attr('testAttribute', 'test3')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).attr('testAttribute', 'test1')
    expect(checkbox2).attr('testAttribute', 'test2')
    expect(checkbox3).attr('testAttribute', 'test3')
  })

  it('should add class to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.class('testClass')
    expect(checkbox2).not.class('testClass')
    expect(checkbox3).not.class('testClass')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).class('testClass')
    expect(checkbox2).class('testClass')
    expect(checkbox3).class('testClass')
  })

  it('should add checked attribute to the checkboxes', async () => {
    resetCheckboxes(1)
    expect(checkbox1).not.attr('checked')
    expect(checkbox2).not.attr('checked')
    expect(checkbox3).not.attr('checked')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).attr('checked').to.equal('checked')
    expect(checkbox2).attr('checked').to.equal('checked')
    expect(checkbox3).attr('checked').to.equal('checked')
  })

  it('should add disabled attribute to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.attr('disabled')
    expect(checkbox2).not.attr('disabled')
    expect(checkbox3).not.attr('disabled')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).attr('disabled').to.equal('disabled')
    expect(checkbox2).attr('disabled').to.equal('disabled')
    expect(checkbox3).attr('disabled').to.equal('disabled')
  })
  it('should add css to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.style('width', '60px')
    expect(checkbox2).not.style('width', '70px')
    expect(checkbox3).not.style('width', '80px')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).style('width', '60px')
    expect(checkbox2).style('width', '70px')
    expect(checkbox3).style('width', '80px')
  })
})

// date picker
describe('Date Picker Manipulation Tests', () => {
  it('should add attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.attr('testAttribute', 'test4')
    expect(datePicker2).not.attr('testAttribute', 'test5')
    expect(datePicker3).not.attr('testAttribute', 'test6')
    $('#manipulateDatePickers').click()
    expect(datePicker1).attr('testAttribute', 'test4')
    expect(datePicker2).attr('testAttribute', 'test5')
    expect(datePicker3).attr('testAttribute', 'test6')
  })

  it('should add class to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.class('testClass')
    expect(datePicker2).not.class('testClass')
    expect(datePicker3).not.class('testClass')
    $('#manipulateDatePickers').click()
    expect(datePicker1).class('testClass')
    expect(datePicker2).class('testClass')
    expect(datePicker3).class('testClass')
  })

  it('should add max attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.attr('max', '2017-06-01')
    expect(datePicker2).not.attr('max', '2017-06-02')
    expect(datePicker3).not.attr('max', '2017-06-03')
    $('#manipulateDatePickers').click()
    expect(datePicker1).attr('max', '2017-06-01')
    expect(datePicker2).attr('max', '2017-06-02')
    expect(datePicker3).attr('max', '2017-06-03')
  })

  it('should add min attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.attr('min', '2016-06-01')
    expect(datePicker2).not.attr('min', '2016-06-02')
    expect(datePicker3).not.attr('min', '2016-06-03')
    $('#manipulateDatePickers').click()
    expect(datePicker1).attr('min', '2016-06-01')
    expect(datePicker2).attr('min', '2016-06-02')
    expect(datePicker3).attr('min', '2016-06-03')
  })

  it('should add value to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.value('2016-06-01')
    expect(datePicker2).not.value('2016-06-02')
    expect(datePicker3).not.value('2016-06-03')
    $('#manipulateDatePickers').click()
    expect(datePicker1).value('2017-06-01')
    expect(datePicker2).value('2017-06-02')
    expect(datePicker3).value('2017-06-03')
  })
})

// image
describe('Image Manipulation Tests', () => {
  it('should add attribute to the image', async () => {
    resetImages()
    expect(image1).not.attr('testAttribute', 'test7')
    expect(image2).not.attr('testAttribute', 'test8')
    expect(image3).not.attr('testAttribute', 'test9')
    $('#manipulateImages').click()
    expect(image1).attr('testAttribute', 'test7')
    expect(image2).attr('testAttribute', 'test8')
    expect(image3).attr('testAttribute', 'test9')
  })

  it('should add class to the image', async () => {
    resetImages()
    expect(image1).not.class('testClass')
    expect(image2).not.class('testClass')
    expect(image3).not.class('testClass')
    $('#manipulateImages').click()
    expect(image1).class('testClass')
    expect(image2).class('testClass')
    expect(image3).class('testClass')
  })

  it('should add height attribute to the image', async () => {
    resetImages()
    expect(image1).not.attr('height', '60px')
    expect(image2).not.attr('height', '70px')
    expect(image3).not.attr('height', '80px')
    $('#manipulateImages').click()
    expect(image1).attr('height', '60px')
    expect(image2).attr('height', '70px')
    expect(image3).attr('height', '80px')
  })

  it('should add width attribute to the image', async () => {
    resetImages()
    expect(image1).not.attr('width', '60px')
    expect(image2).not.attr('width', '70px')
    expect(image3).not.attr('width', '80px')
    $('#manipulateImages').click()
    expect(image1).attr('width', '60px')
    expect(image2).attr('width', '70px')
    expect(image3).attr('width', '80px')
  })

  it('should add alt attribute to the date pickers', async () => {
    resetImages()
    expect(image1).not.attr('alt', 'image1')
    expect(image2).not.attr('alt', 'image2')
    expect(image3).not.attr('alt', 'image3')
    $('#manipulateImages').click()
    expect(image1).attr('alt', 'image1')
    expect(image2).attr('alt', 'image2')
    expect(image3).attr('alt', 'image3')
  })
})

// image button
describe('Image Button Manipulation Tests', () => {
  it('should add attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.attr('testAttribute', 'test10')
    expect(imageButton2).not.attr('testAttribute', 'test11')
    expect(imageButton3).not.attr('testAttribute', 'test12')
    $('#manipulateImageButtons').click()
    expect(imageButton1).attr('testAttribute', 'test10')
    expect(imageButton2).attr('testAttribute', 'test11')
    expect(imageButton3).attr('testAttribute', 'test12')
  })

  it('should add class to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.class('testClass')
    expect(imageButton1).not.class('testClass')
    expect(imageButton1).not.class('testClass')
    $('#manipulateImageButtons').click()
    expect(imageButton1).class('testClass')
    expect(imageButton2).class('testClass')
    expect(imageButton3).class('testClass')
  })

  it('should add height attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.attr('height', '60px')
    expect(imageButton2).not.attr('height', '70px')
    expect(imageButton3).not.attr('height', '80px')
    $('#manipulateImageButtons').click()
    expect(imageButton1).attr('height', '60px')
    expect(imageButton2).attr('height', '70px')
    expect(imageButton3).attr('height', '80px')
  })

  it('should add width attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.attr('width', '60px')
    expect(imageButton2).not.attr('width', '70px')
    expect(imageButton3).not.attr('width', '80px')
    $('#manipulateImageButtons').click()
    expect(imageButton1).attr('width', '60px')
    expect(imageButton2).attr('width', '70px')
    expect(imageButton3).attr('width', '80px')
  })

  it('should add alt attribute to the date pickers', async () => {
    resetImageButtons()
    expect(imageButton1).not.attr('alt', 'imageButton1')
    expect(imageButton2).not.attr('alt', 'imageButton2')
    expect(imageButton3).not.attr('alt', 'imageButton3')
    $('#manipulateImageButtons').click()
    expect(imageButton1).attr('alt', 'imageButton1')
    expect(imageButton2).attr('alt', 'imageButton2')
    expect(imageButton3).attr('alt', 'imageButton3')
  })
})

// inputs
describe('Input Manipulation Tests', () => {
  it('should add text to the inputs', async () => {
    resetInputs()
    expect(input1).not.text('test13')
    expect(input2).not.text('test14')
    expect(input3).not.text('test15')
    $('#manipulateInputs').click()
    expect(input1).text('CHECK13')
    expect(input2).text('CHECK14')
    expect(input3).text('CHECK15')
  })

  it('should add attribute to the inputs', async () => {
    resetInputs()
    expect(input1).not.attr('testAttribute', 'test13')
    expect(input2).not.attr('testAttribute', 'test14')
    expect(input3).not.attr('testAttribute', 'test15')
    $('#manipulateInputs').click()
    expect(input1).attr('testAttribute', 'test13')
    expect(input2).attr('testAttribute', 'test14')
    expect(input3).attr('testAttribute', 'test15')
  })

  it('should add class to the inputs', async () => {
    resetInputs()
    expect(input1).not.class('testClass')
    expect(input2).not.class('testClass')
    expect(input3).not.class('testClass')
    $('#manipulateInputs').click()
    expect(input1).class('testClass')
    expect(input2).class('testClass')
    expect(input3).class('testClass')
  })

  it('should add value to the inputs', async () => {
    resetInputs()
    expect(input1).not.value('test')
    expect(input2).not.value('test')
    expect(input3).not.value('test')
    $('#manipulateInputs').click()
    expect(input1).value('test13')
    expect(input2).value('test14')
    expect(input3).value('test15')
  })

  it('should add css to the inputs', async () => {
    resetInputs()
    expect(input1).not.style('background-color', 'red')
    expect(input2).not.style('background-color', 'green')
    expect(input3).not.style('background-color', 'blue')
    $('#manipulateInputs').click()
    expect(input1).style('background-color', 'red')
    expect(input2).style('background-color', 'green')
    expect(input3).style('background-color', 'blue')
  })
})

// number steppers
describe('Number Stepper Manipulation Tests', () => {
  it('should add attribute to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.attr('testAttribute', 'test16')
    expect(numberStepper2).not.attr('testAttribute', 'test17')
    expect(numberStepper3).not.attr('testAttribute', 'test18')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).attr('testAttribute', 'test16')
    expect(numberStepper2).attr('testAttribute', 'test17')
    expect(numberStepper3).attr('testAttribute', 'test18')
  })

  it('should add class to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.class('testClass')
    expect(numberStepper2).not.class('testClass')
    expect(numberStepper3).not.class('testClass')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).class('testClass')
    expect(numberStepper2).class('testClass')
    expect(numberStepper3).class('testClass')
  })

  it('should add step attribute to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.attr('step', '2')
    expect(numberStepper2).not.attr('step', '3')
    expect(numberStepper3).not.attr('step', '4')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).attr('step', '2')
    expect(numberStepper2).attr('step', '3')
    expect(numberStepper3).attr('step', '4')
  })

  it('should add value to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.value('1')
    expect(numberStepper2).not.value('1')
    expect(numberStepper3).not.value('1')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).value('16')
    expect(numberStepper2).value('17')
    expect(numberStepper3).value('18')
  })

  it('should add css to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.style('background-color', 'red')
    expect(numberStepper2).not.style('background-color', 'green')
    expect(numberStepper3).not.style('background-color', 'blue')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).style('background-color', 'red')
    expect(numberStepper2).style('background-color', 'green')
    expect(numberStepper3).style('background-color', 'blue')
  })
})

// radio buttons
describe('Radio Button Manipulation Tests', () => {
  it('should add attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.attr('testAttribute', 'test19')
    expect(radio2).not.attr('testAttribute', 'test20')
    expect(radio3).not.attr('testAttribute', 'test21')
    $('#manipulateRadios').click()
    expect(radio1).attr('testAttribute', 'test19')
    expect(radio2).attr('testAttribute', 'test20')
    expect(radio3).attr('testAttribute', 'test21')
  })

  it('should add class to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.class('testClass')
    expect(radio2).not.class('testClass')
    expect(radio3).not.class('testClass')
    $('#manipulateRadios').click()
    expect(radio1).class('testClass')
    expect(radio2).class('testClass')
    expect(radio3).class('testClass')
  })

  it('should add checked attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.attr('checked').to.equal('checked')
    expect(radio2).not.attr('checked').to.equal('checked')
    expect(radio3).not.attr('checked').to.equal('checked')
    $('#manipulateRadios').click()
    expect(radio1).attr('checked').to.equal('checked')
    expect(radio2).attr('checked').to.equal('checked')
    expect(radio3).attr('checked').to.equal('checked')
  })

  it('should add disabled attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.attr('disabled')
    expect(radio1).not.attr('disabled')
    expect(radio1).not.attr('disabled')
    $('#manipulateRadios').click()
    expect(radio1).attr('disabled').to.equal('disabled')
    expect(radio2).attr('disabled').to.equal('disabled')
    expect(radio3).attr('disabled').to.equal('disabled')
  })

  it('should add name attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.attr('name', 'radio1')
    expect(radio2).not.attr('name', 'radio2')
    expect(radio3).not.attr('name', 'radio3')
    $('#manipulateRadios').click()
    expect(radio1).attr('name', 'radio1')
    expect(radio2).attr('name', 'radio2')
    expect(radio3).attr('name', 'radio3')
  })
})

// texts
describe('Text Manipulation Tests', () => {
  it('should change text of the texts', async () => {
    resetTexts()
    expect(text1).not.text('test22')
    expect(text2).not.text('test23')
    expect(text3).not.text('test24')
    $('#manipulateTexts').click()
    expect(text1).text('CHECK22')
    expect(text2).text('CHECK23')
    expect(text3).text('CHECK24')
  })

  it('should add attribute to the texts', async () => {
    resetTexts()
    expect(text1).not.attr('testAttribute', 'test22')
    expect(text2).not.attr('testAttribute', 'test23')
    expect(text3).not.attr('testAttribute', 'test24')
    $('#manipulateTexts').click()
    expect(text1).attr('testAttribute', 'test22')
    expect(text2).attr('testAttribute', 'test23')
    expect(text3).attr('testAttribute', 'test24')
  })

  it('should add class to the texts', async () => {
    resetTexts()
    expect(text1).not.class('testClass')
    expect(text2).not.class('testClass')
    expect(text3).not.class('testClass')
    $('#manipulateTexts').click()
    expect(text1).class('testClass')
    expect(text2).class('testClass')
    expect(text3).class('testClass')
  })

  it('should add color to the texts', async () => {
    resetTexts()
    expect(text1).not.style('color', 'red')
    expect(text2).not.style('color', 'gree')
    expect(text3).not.style('color', 'blue')
    $('#manipulateTexts').click()
    expect(text1).style('color', 'red')
    expect(text2).style('color', 'green')
    expect(text3).style('color', 'blue')
  })

  it('should add font-size to the texts', async () => {
    resetTexts()
    expect(text1).not.style('font-size', '18px')
    expect(text2).not.style('font-size', '20px')
    expect(text3).not.style('font-size', '22px')
    $('#manipulateTexts').click()
    expect(text1).style('font-size', '18px')
    expect(text2).style('font-size', '20px')
    expect(text3).style('font-size', '22px')
  })
})

// text buttons
describe('Text Button Manipulation Tests', () => {
  it('should change text to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.text('test25')
    expect(textButton2).not.text('test26')
    expect(textButton3).not.text('test27')
    $('#manipulateTextButtons').click()
    expect(textButton1).text('CHECK25')
    expect(textButton2).text('CHECK26')
    expect(textButton3).text('CHECK27')
  })

  it('should add attribute to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.attr('testAttribute', 'test25')
    expect(textButton2).not.attr('testAttribute', 'test26')
    expect(textButton3).not.attr('testAttribute', 'test27')
    $('#manipulateTextButtons').click()
    expect(textButton1).attr('testAttribute', 'test25')
    expect(textButton2).attr('testAttribute', 'test26')
    expect(textButton3).attr('testAttribute', 'test27')
  })

  it('should add class to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.class('testClass')
    expect(textButton2).not.class('testClass')
    expect(textButton3).not.class('testClass')
    $('#manipulateTextButtons').click()
    expect(textButton1).class('testClass')
    expect(textButton2).class('testClass')
    expect(textButton3).class('testClass')
  })

  it('should add color to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.style('background-color', 'red')
    expect(textButton2).not.style('background-color', 'green')
    expect(textButton3).not.style('background-color', 'blue')
    $('#manipulateTextButtons').click()
    expect(textButton1).style('background-color', 'red')
    expect(textButton2).style('background-color', 'green')
    expect(textButton3).style('background-color', 'blue')
  })

  it('should add font-size to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.style('font-size', '18px')
    expect(textButton2).not.style('font-size', '20px')
    expect(textButton3).not.style('font-size', '22px')
    $('#manipulateTextButtons').click()
    expect(textButton1).style('font-size', '18px')
    expect(textButton2).style('font-size', '20px')
    expect(textButton3).style('font-size', '22px')
  })
})
