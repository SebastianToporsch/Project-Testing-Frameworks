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

// flush cache
beforeEach(async function () {
  flush()
})

// checkboxes
const checkbox1 = $('#manipulateCheckbox1')
const checkbox2 = $('#manipulateCheckbox2')
const checkbox3 = $('#manipulateCheckbox3')

// date pickers
const datePicker1 = $('#manipulateDatePicker1')
const datePicker2 = $('#manipulateDatePicker2')
const datePicker3 = $('#manipulateDatePicker3')

// images
const image1 = $('#manipulateImage1')
const image2 = $('#manipulateImage2')
const image3 = $('#manipulateImage3')

// image Buttons
const imageButton1 = $('#manipulateImageButton1')
const imageButton2 = $('#manipulateImageButton2')
const imageButton3 = $('#manipulateImageButton3')

// inputs
const input1 = $('#manipulateInput1')
const input2 = $('#manipulateInput2')
const input3 = $('#manipulateInput3')

// number steppers
const numberStepper1 = $('#manipulateNumberStepper1')
const numberStepper2 = $('#manipulateNumberStepper2')
const numberStepper3 = $('#manipulateNumberStepper3')

// radio buttons
const radio1 = $('#manipulateRadio1')
const radio2 = $('#manipulateRadio2')
const radio3 = $('#manipulateRadio3')

// texts
const text1 = $('#manipulateText1')
const text2 = $('#manipulateText2')
const text3 = $('#manipulateText3')

// text buttons
const textButton1 = $('#manipulateButton1')
const textButton2 = $('#manipulateButton2')
const textButton3 = $('#manipulateButton3')

// manipulation functions

function manipulateCheckboxes () {
  checkbox1
    .attr('testAttribute', 'test1')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .css('width', '60px')

  checkbox2
    .attr('checked', 'true')
    .attr('testAttribute', 'test2')
    .addClass('testClass')
    .attr('disabled', 'true')
    .css('width', '70px')

  checkbox3
    .attr('testAttribute', 'test3')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .css('width', '80px')
}

function manipulateDatePickers () {
  datePicker1
    .attr('testAttribute', 'test4')
    .addClass('testClass')
    .attr('max', '2017-06-01')
    .attr('min', '2016-06-01')
    .val('2017-06-01')

  datePicker2
    .attr('testAttribute', 'test5')
    .addClass('testClass')
    .attr('max', '2017-06-02')
    .attr('min', '2016-06-02')
    .val('2017-06-02')

  datePicker3
    .attr('testAttribute', 'test6')
    .addClass('testClass')
    .attr('max', '2017-06-03')
    .attr('min', '2016-06-03')
    .val('2017-06-03')
}

function manipulateImages () {
  image1
    .attr('testAttribute', 'test7')
    .addClass('testClass')
    .attr('height', '60px')
    .attr('width', '60px')
    .attr('alt', 'image1')

  image2
    .attr('testAttribute', 'test8')
    .addClass('testClass')
    .attr('height', '70px')
    .attr('width', '70px')
    .attr('alt', 'image2')

  image3
    .attr('testAttribute', 'test9')
    .addClass('testClass')
    .attr('height', '80px')
    .attr('width', '80px')
    .attr('alt', 'image3')
}

function manipulateImageButtons () {
  imageButton1
    .attr('testAttribute', 'test10')
    .addClass('testClass')
    .attr('height', '60px')
    .attr('width', '60px')
    .attr('alt', 'imageButton1')

  imageButton2
    .attr('testAttribute', 'test11')
    .addClass('testClass')
    .attr('height', '70px')
    .attr('width', '70px')
    .attr('alt', 'imageButton2')

  imageButton3
    .attr('testAttribute', 'test12')
    .addClass('testClass')
    .attr('height', '80px')
    .attr('width', '80px')
    .attr('alt', 'imageButton3')
}

function manipulateInputs () {
  input1
    .html('CHECK13')
    .attr('testAttribute', 'test13')
    .addClass('testClass')
    .val('test13')
    .css('background-color', 'red')

  input2
    .html('CHECK14')
    .attr('testAttribute', 'test14')
    .addClass('testClass')
    .val('test14')
    .css('background-color', 'green')

  input3
    .html('CHECK15')
    .attr('testAttribute', 'test15')
    .addClass('testClass')
    .val('test15')
    .css('background-color', 'blue')
}

function manipulateNumberSteppers () {
  numberStepper1
    .attr('testAttribute', 'test16')
    .addClass('testClass')
    .attr('step', '2')
    .val('16')
    .css('background-color', 'red')

  numberStepper2
    .attr('testAttribute', 'test17')
    .addClass('testClass')
    .attr('step', '3')
    .val('17')
    .css('background-color', 'green')

  numberStepper3
    .attr('testAttribute', 'test18')
    .addClass('testClass')
    .attr('step', '4')
    .val('18')
    .css('background-color', 'blue')
}

function manipulateRadios () {
  radio1
    .attr('testAttribute', 'test19')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .attr('name', 'radio1')

  radio2
    .attr('testAttribute', 'test20')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .attr('name', 'radio2')

  radio3
    .attr('testAttribute', 'test21')
    .addClass('testClass')
    .attr('checked', 'true')
    .attr('disabled', 'true')
    .attr('name', 'radio3')
}

function manipulateTexts () {
  text1
    .html('CHECK22')
    .attr('testAttribute', 'test22')
    .addClass('testClass')
    .css('color', 'red')
    .css('font-size', '18px')

  text2
    .html('CHECK23')
    .attr('testAttribute', 'test23')
    .addClass('testClass')
    .css('color', 'green')
    .css('font-size', '20px')

  text3
    .html('CHECK24')
    .attr('testAttribute', 'test24')
    .addClass('testClass')
    .css('color', 'blue')
    .css('font-size', '22px')
}

function manipulateTextButtons () {
  textButton1
    .html('CHECK25')
    .attr('testAttribute', 'test25')
    .addClass('testClass')
    .css('background-color', 'red')
    .css('font-size', '18px')

  textButton2
    .html('CHECK26')
    .attr('testAttribute', 'test26')
    .addClass('testClass')
    .css('background-color', 'green')
    .css('font-size', '20px')

  textButton3
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
  resetElement(checkbox1)
  resetElement(checkbox2)
  resetElement(checkbox3)
}

function resetDatePickers () {
  resetElement(datePicker1)
  resetElement(datePicker2)
  resetElement(datePicker3)
}

function resetImages () {
  resetElement(image1)
  image1
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(image2)
  image2
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(image3)
  image3
    .attr('height', '50px')
    .attr('width', '50px')
}

function resetImageButtons () {
  resetElement(imageButton1)
  imageButton1
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(imageButton2)
  imageButton2
    .attr('height', '50px')
    .attr('width', '50px')
  resetElement(imageButton3)
  imageButton3
    .attr('height', '50px')
    .attr('width', '50px')
}

function resetInputs () {
  resetElement(input1)
  resetElement(input2)
  resetElement(input3)
}

function resetNumberSteppers () {
  resetElement(numberStepper1)
  resetElement(numberStepper2)
  resetElement(numberStepper3)
}

function resetRadios () {
  resetElement(radio1)
  resetElement(radio2)
  resetElement(radio3)
}

function resetTexts () {
  resetElement(text1)
  resetElement(text2)
  resetElement(text3)
}

function resetTextButtons () {
  resetElement(textButton1)
  resetElement(textButton2)
  resetElement(textButton3)
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
    expect(checkbox1).not.toHaveAttr('testAttribute', 'test1')
    expect(checkbox2).not.toHaveAttr('testAttribute', 'test2')
    expect(checkbox3).not.toHaveAttr('testAttribute', 'test3')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).toHaveAttr('testAttribute', 'test1')
    expect(checkbox2).toHaveAttr('testAttribute', 'test2')
    expect(checkbox3).toHaveAttr('testAttribute', 'test3')
  })

  it('should add class to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toHaveClass('testClass')
    expect(checkbox2).not.toHaveClass('testClass')
    expect(checkbox3).not.toHaveClass('testClass')
    $('#manipulateCheckboxes').click()
    expect(checkbox1).toHaveClass('testClass')
    expect(checkbox2).toHaveClass('testClass')
    expect(checkbox3).toHaveClass('testClass')
  })

  it('should add checked attribute to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toBeChecked()
    expect(checkbox2).not.toBeChecked()
    expect(checkbox3).not.toBeChecked()
    $('#manipulateCheckboxes').click()
    expect(checkbox1).toBeChecked()
    expect(checkbox2).toBeChecked()
    expect(checkbox3).toBeChecked()
  })

  it('should add disabled attribute to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toBeDisabled()
    expect(checkbox2).not.toBeDisabled()
    expect(checkbox3).not.toBeDisabled()
    $('#manipulateCheckboxes').click()
    expect(checkbox1).toBeDisabled()
    expect(checkbox2).toBeDisabled()
    expect(checkbox3).toBeDisabled()
  })

  it('should add css to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1.css('width')).not.toBe('60px')
    expect(checkbox2.css('width')).not.toBe('70px')
    expect(checkbox3.css('width')).not.toBe('80px')
    $('#manipulateCheckboxes').click()
    expect(checkbox1.css('width')).toBe('60px')
    expect(checkbox2.css('width')).toBe('70px')
    expect(checkbox3.css('width')).toBe('80px')
  })
})

// date picker
describe('Date Picker Manipulation Tests', () => {
  it('should add attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveAttr('testAttribute', 'test4')
    expect(datePicker2).not.toHaveAttr('testAttribute', 'test5')
    expect(datePicker3).not.toHaveAttr('testAttribute', 'test6')
    $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveAttr('testAttribute', 'test4')
    expect(datePicker2).toHaveAttr('testAttribute', 'test5')
    expect(datePicker3).toHaveAttr('testAttribute', 'test6')
  })

  it('should add class to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveClass('testClass')
    expect(datePicker2).not.toHaveClass('testClass')
    expect(datePicker3).not.toHaveClass('testClass')
    $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveClass('testClass')
    expect(datePicker2).toHaveClass('testClass')
    expect(datePicker3).toHaveClass('testClass')
  })

  it('should add max attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveAttr('max', '2017-06-01')
    expect(datePicker2).not.toHaveAttr('max', '2017-06-02')
    expect(datePicker3).not.toHaveAttr('max', '2017-06-03')
    $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveAttr('max', '2017-06-01')
    expect(datePicker2).toHaveAttr('max', '2017-06-02')
    expect(datePicker3).toHaveAttr('max', '2017-06-03')
  })

  it('should add min attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveAttr('min', '2016-06-01')
    expect(datePicker2).not.toHaveAttr('min', '2016-06-02')
    expect(datePicker3).not.toHaveAttr('min', '2016-06-03')
    $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveAttr('min', '2016-06-01')
    expect(datePicker2).toHaveAttr('min', '2016-06-02')
    expect(datePicker3).toHaveAttr('min', '2016-06-03')
  })

  it('should add value to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveValue('2016-06-01')
    expect(datePicker2).not.toHaveValue('2016-06-02')
    expect(datePicker3).not.toHaveValue('2016-06-03')
    $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveValue('2017-06-01')
    expect(datePicker2).toHaveValue('2017-06-02')
    expect(datePicker3).toHaveValue('2017-06-03')
  })
})

// image
describe('Image Manipulation Tests', () => {
  it('should add attribute to the image', async () => {
    resetImages()
    expect(image1).not.toHaveAttr('testAttribute', 'test7')
    expect(image2).not.toHaveAttr('testAttribute', 'test8')
    expect(image3).not.toHaveAttr('testAttribute', 'test9')
    $('#manipulateImages').click()
    expect(image1).toHaveAttr('testAttribute', 'test7')
    expect(image2).toHaveAttr('testAttribute', 'test8')
    expect(image3).toHaveAttr('testAttribute', 'test9')
  })

  it('should add class to the image', async () => {
    resetImages()
    expect(image1).not.toHaveClass('testClass')
    expect(image2).not.toHaveClass('testClass')
    expect(image3).not.toHaveClass('testClass')
    $('#manipulateImages').click()
    expect(image1).toHaveClass('testClass')
    expect(image2).toHaveClass('testClass')
    expect(image3).toHaveClass('testClass')
  })

  it('should add height attribute to the image', async () => {
    resetImages()
    expect(image1).not.toHaveAttr('height', '60px')
    expect(image2).not.toHaveAttr('height', '70px')
    expect(image3).not.toHaveAttr('height', '80px')
    $('#manipulateImages').click()
    expect(image1).toHaveAttr('height', '60px')
    expect(image2).toHaveAttr('height', '70px')
    expect(image3).toHaveAttr('height', '80px')
  })

  it('should add width attribute to the image', async () => {
    resetImages()
    expect(image1).not.toHaveAttr('width', '60px')
    expect(image2).not.toHaveAttr('width', '70px')
    expect(image3).not.toHaveAttr('width', '80px')
    $('#manipulateImages').click()
    expect(image1).toHaveAttr('width', '60px')
    expect(image2).toHaveAttr('width', '70px')
    expect(image3).toHaveAttr('width', '80px')
  })

  it('should add alt attribute to the date pickers', async () => {
    resetImages()
    expect(image1).not.toHaveAttr('alt', 'image1')
    expect(image2).not.toHaveAttr('alt', 'image2')
    expect(image3).not.toHaveAttr('alt', 'image3')
    $('#manipulateImages').click()
    expect(image1).toHaveAttr('alt', 'image1')
    expect(image2).toHaveAttr('alt', 'image2')
    expect(image3).toHaveAttr('alt', 'image3')
  })
})

// image button
describe('Image Button Manipulation Tests', () => {
  it('should add attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttr('testAttribute', 'test10')
    expect(imageButton2).not.toHaveAttr('testAttribute', 'test11')
    expect(imageButton3).not.toHaveAttr('testAttribute', 'test12')
    $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttr('testAttribute', 'test10')
    expect(imageButton2).toHaveAttr('testAttribute', 'test11')
    expect(imageButton3).toHaveAttr('testAttribute', 'test12')
  })

  it('should add class to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveClass('testClass')
    expect(imageButton1).not.toHaveClass('testClass')
    expect(imageButton1).not.toHaveClass('testClass')
    $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveClass('testClass')
    expect(imageButton2).toHaveClass('testClass')
    expect(imageButton3).toHaveClass('testClass')
  })

  it('should add height attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttr('height', '60px')
    expect(imageButton2).not.toHaveAttr('height', '70px')
    expect(imageButton3).not.toHaveAttr('height', '80px')
    $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttr('height', '60px')
    expect(imageButton2).toHaveAttr('height', '70px')
    expect(imageButton3).toHaveAttr('height', '80px')
  })

  it('should add width attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttr('width', '60px')
    expect(imageButton2).not.toHaveAttr('width', '70px')
    expect(imageButton3).not.toHaveAttr('width', '80px')
    $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttr('width', '60px')
    expect(imageButton2).toHaveAttr('width', '70px')
    expect(imageButton3).toHaveAttr('width', '80px')
  })

  it('should add alt attribute to the date pickers', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttr('alt', 'imageButton1')
    expect(imageButton2).not.toHaveAttr('alt', 'imageButton2')
    expect(imageButton3).not.toHaveAttr('alt', 'imageButton3')
    $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttr('alt', 'imageButton1')
    expect(imageButton2).toHaveAttr('alt', 'imageButton2')
    expect(imageButton3).toHaveAttr('alt', 'imageButton3')
  })
})

// inputs
describe('Input Manipulation Tests', () => {
  it('should add text to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveText('test13')
    expect(input2).not.toHaveText('test14')
    expect(input3).not.toHaveText('test15')
    $('#manipulateInputs').click()
    expect(input1).toHaveText('CHECK13')
    expect(input2).toHaveText('CHECK14')
    expect(input3).toHaveText('CHECK15')
  })

  it('should add attribute to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveAttr('testAttribute', 'test13')
    expect(input2).not.toHaveAttr('testAttribute', 'test14')
    expect(input3).not.toHaveAttr('testAttribute', 'test15')
    $('#manipulateInputs').click()
    expect(input1).toHaveAttr('testAttribute', 'test13')
    expect(input2).toHaveAttr('testAttribute', 'test14')
    expect(input3).toHaveAttr('testAttribute', 'test15')
  })

  it('should add class to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveClass('testClass')
    expect(input2).not.toHaveClass('testClass')
    expect(input3).not.toHaveClass('testClass')
    $('#manipulateInputs').click()
    expect(input1).toHaveClass('testClass')
    expect(input2).toHaveClass('testClass')
    expect(input3).toHaveClass('testClass')
  })

  it('should add value to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveValue('test')
    expect(input2).not.toHaveValue('test')
    expect(input3).not.toHaveValue('test')
    $('#manipulateInputs').click()
    expect(input1).toHaveValue('test13')
    expect(input2).toHaveValue('test14')
    expect(input3).toHaveValue('test15')
  })

  it('should add css to the inputs', async () => {
    resetInputs()
    expect(input1.css('background-color')).not.toBe('red')
    expect(input2.css('background-color')).not.toBe('green')
    expect(input3.css('background-color')).not.toBe('blue')
    $('#manipulateInputs').click()
    expect(input1.css('background-color')).toBe('red')
    expect(input2.css('background-color')).toBe('green')
    expect(input3.css('background-color')).toBe('blue')
  })
})

// number steppers
describe('Number Stepper Manipulation Tests', () => {
  it('should add attribute to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveAttr('testAttribute', 'test16')
    expect(numberStepper2).not.toHaveAttr('testAttribute', 'test17')
    expect(numberStepper3).not.toHaveAttr('testAttribute', 'test18')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveAttr('testAttribute', 'test16')
    expect(numberStepper2).toHaveAttr('testAttribute', 'test17')
    expect(numberStepper3).toHaveAttr('testAttribute', 'test18')
  })

  it('should add class to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveClass('testClass')
    expect(numberStepper2).not.toHaveClass('testClass')
    expect(numberStepper3).not.toHaveClass('testClass')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveClass('testClass')
    expect(numberStepper2).toHaveClass('testClass')
    expect(numberStepper3).toHaveClass('testClass')
  })

  it('should add step attribute to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveAttr('step', '2')
    expect(numberStepper2).not.toHaveAttr('step', '3')
    expect(numberStepper3).not.toHaveAttr('step', '4')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveAttr('step', '2')
    expect(numberStepper2).toHaveAttr('step', '3')
    expect(numberStepper3).toHaveAttr('step', '4')
  })

  it('should add value to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveValue('1')
    expect(numberStepper2).not.toHaveValue('1')
    expect(numberStepper3).not.toHaveValue('1')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveValue('16')
    expect(numberStepper2).toHaveValue('17')
    expect(numberStepper3).toHaveValue('18')
  })

  it('should add css to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1.css('background-color')).not.toBe('red')
    expect(numberStepper2.css('background-color')).not.toBe('green')
    expect(numberStepper3.css('background-color')).not.toBe('blue')
    $('#manipulateNumberSteppers').click()
    expect(numberStepper1.css('background-color')).toBe('red')
    expect(numberStepper2.css('background-color')).toBe('green')
    expect(numberStepper3.css('background-color')).toBe('blue')
  })
})

// radio buttons
describe('Radio Button Manipulation Tests', () => {
  it('should add attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toHaveAttr('testAttribute', 'test19')
    expect(radio2).not.toHaveAttr('testAttribute', 'test20')
    expect(radio3).not.toHaveAttr('testAttribute', 'test21')
    $('#manipulateRadios').click()
    expect(radio1).toHaveAttr('testAttribute', 'test19')
    expect(radio2).toHaveAttr('testAttribute', 'test20')
    expect(radio3).toHaveAttr('testAttribute', 'test21')
  })

  it('should add class to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toHaveClass('testClass')
    expect(radio2).not.toHaveClass('testClass')
    expect(radio3).not.toHaveClass('testClass')
    $('#manipulateRadios').click()
    expect(radio1).toHaveClass('testClass')
    expect(radio2).toHaveClass('testClass')
    expect(radio3).toHaveClass('testClass')
  })

  it('should add checked attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toBeChecked()
    expect(radio2).not.toBeChecked()
    expect(radio3).not.toBeChecked()
    $('#manipulateRadios').click()
    expect(radio1).toBeChecked()
    expect(radio2).toBeChecked()
    expect(radio3).toBeChecked()
  })

  it('should add disabled attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toBeDisabled()
    expect(radio1).not.toBeDisabled()
    expect(radio1).not.toBeDisabled()
    $('#manipulateRadios').click()
    expect(radio1).toBeDisabled()
    expect(radio2).toBeDisabled()
    expect(radio3).toBeDisabled()
  })

  it('should add name attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toHaveAttr('name', 'radio1')
    expect(radio2).not.toHaveAttr('name', 'radio2')
    expect(radio3).not.toHaveAttr('name', 'radio3')
    $('#manipulateRadios').click()
    expect(radio1).toHaveAttr('name', 'radio1')
    expect(radio2).toHaveAttr('name', 'radio2')
    expect(radio3).toHaveAttr('name', 'radio3')
  })
})

// texts
describe('Text Manipulation Tests', () => {
  it('should change text of the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveText('test22')
    expect(text2).not.toHaveText('test23')
    expect(text3).not.toHaveText('test24')
    $('#manipulateTexts').click()
    expect(text1).toHaveText('CHECK22')
    expect(text2).toHaveText('CHECK23')
    expect(text3).toHaveText('CHECK24')
  })

  it('should add attribute to the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveAttr('testAttribute', 'test22')
    expect(text2).not.toHaveAttr('testAttribute', 'test23')
    expect(text3).not.toHaveAttr('testAttribute', 'test24')
    $('#manipulateTexts').click()
    expect(text1).toHaveAttr('testAttribute', 'test22')
    expect(text2).toHaveAttr('testAttribute', 'test23')
    expect(text3).toHaveAttr('testAttribute', 'test24')
  })

  it('should add class to the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveClass('testClass')
    expect(text2).not.toHaveClass('testClass')
    expect(text3).not.toHaveClass('testClass')
    $('#manipulateTexts').click()
    expect(text1).toHaveClass('testClass')
    expect(text2).toHaveClass('testClass')
    expect(text3).toHaveClass('testClass')
  })

  it('should add color to the texts', async () => {
    resetTexts()
    expect(text1.css('color')).not.toContain('red')
    expect(text2.css('color')).not.toContain('green')
    expect(text3.css('color')).not.toContain('blue')
    $('#manipulateTexts').click()
    expect(text1.css('color')).toContain('red')
    expect(text2.css('color')).toContain('green')
    expect(text3.css('color')).toContain('blue')
  })

  it('should add font-size to the texts', async () => {
    resetTexts()
    expect(text1.css('font-size')).not.toContain('font-size')
    expect(text2.css('font-size')).not.toContain('font-size')
    expect(text3.css('font-size')).not.toContain('font-size')
    $('#manipulateTexts').click()
    expect(text1.css('font-size')).toContain('18px')
    expect(text2.css('font-size')).toContain('20px')
    expect(text3.css('font-size')).toContain('22px')
  })
})

// text buttons
describe('Text Button Manipulation Tests', () => {
  it('should change text to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveText('test25')
    expect(textButton2).not.toHaveText('test26')
    expect(textButton3).not.toHaveText('test27')
    $('#manipulateTextButtons').click()
    expect(textButton1).toHaveText('CHECK25')
    expect(textButton2).toHaveText('CHECK26')
    expect(textButton3).toHaveText('CHECK27')
  })

  it('should add attribute to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveAttr('testAttribute', 'test25')
    expect(textButton2).not.toHaveAttr('testAttribute', 'test26')
    expect(textButton3).not.toHaveAttr('testAttribute', 'test27')
    $('#manipulateTextButtons').click()
    expect(textButton1).toHaveAttr('testAttribute', 'test25')
    expect(textButton2).toHaveAttr('testAttribute', 'test26')
    expect(textButton3).toHaveAttr('testAttribute', 'test27')
  })

  it('should add class to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveClass('testClass')
    expect(textButton2).not.toHaveClass('testClass')
    expect(textButton3).not.toHaveClass('testClass')
    $('#manipulateTextButtons').click()
    expect(textButton1).toHaveClass('testClass')
    expect(textButton2).toHaveClass('testClass')
    expect(textButton3).toHaveClass('testClass')
  })

  it('should add color to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1.css('background-color')).not.toContain('red')
    expect(textButton2.css('background-color')).not.toContain('green')
    expect(textButton3.css('background-color')).not.toContain('blue')
    $('#manipulateTextButtons').click()
    expect(textButton1.css('background-color')).toContain('red')
    expect(textButton2.css('background-color')).toContain('green')
    expect(textButton3.css('background-color')).toContain('blue')
  })

  it('should add font-size to the text buttons', async () => {
    resetTextButtons()
    expect(text1.css('font-size')).not.toContain('font-size')
    expect(text2.css('font-size')).not.toContain('font-size')
    expect(text3.css('font-size')).not.toContain('font-size')
    $('#manipulateTextButtons').click()
    expect(text1.css('font-size')).toContain('18px')
    expect(text2.css('font-size')).toContain('20px')
    expect(text3.css('font-size')).toContain('22px')
  })
})
