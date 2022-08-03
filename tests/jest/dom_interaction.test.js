/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
import flush from 'flush-cache'
import pug from 'pug'

const { JSDOM } = jsdom

// setup JSDOM and jquery
const html = pug.renderFile('./views/ui/rest_index.pug')
const dom = new JSDOM(html)

const { window } = dom
const $ = jquery(window)

// flush cache and click events
beforeEach(async function () {
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
    expect(checkbox1).not.toHaveAttribute('testAttribute', 'test1')
    expect(checkbox2).not.toHaveAttribute('testAttribute', 'test2')
    expect(checkbox3).not.toHaveAttribute('testAttribute', 'test3')
    await $('#manipulateCheckboxes').click()
    expect(checkbox1).toHaveAttribute('testAttribute', 'test1')
    expect(checkbox2).toHaveAttribute('testAttribute', 'test2')
    expect(checkbox3).toHaveAttribute('testAttribute', 'test3')
  })

  it('should add class to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toHaveClass('testClass')
    expect(checkbox2).not.toHaveClass('testClass')
    expect(checkbox3).not.toHaveClass('testClass')
    await $('#manipulateCheckboxes').click()
    expect(checkbox1).toHaveClass('testClass')
    expect(checkbox2).toHaveClass('testClass')
    expect(checkbox3).toHaveClass('testClass')
  })

  it('should add checked attribute to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toBeChecked()
    expect(checkbox2).not.toBeChecked()
    expect(checkbox3).not.toBeChecked()
    await $('#manipulateCheckboxes').click()
    expect(checkbox1).toBeChecked()
    expect(checkbox2).toBeChecked()
    expect(checkbox3).toBeChecked()
  })

  it('should add disabled attribute to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toBeDisabled()
    expect(checkbox2).not.toBeDisabled()
    expect(checkbox3).not.toBeDisabled()
    await $('#manipulateCheckboxes').click()
    expect(checkbox1).toBeDisabled()
    expect(checkbox2).toBeDisabled()
    expect(checkbox3).toBeDisabled()
  })

  it('should add css to the checkboxes', async () => {
    resetCheckboxes()
    expect(checkbox1).not.toHaveStyle('width: 60px;')
    expect(checkbox2).not.toHaveStyle('width: 70px;')
    expect(checkbox3).not.toHaveStyle('width: 80px;')
    await $('#manipulateCheckboxes').click()
    expect(checkbox1).toHaveStyle('width: 60px;')
    expect(checkbox2).toHaveStyle('width: 70px;')
    expect(checkbox3).toHaveStyle('width: 80px;')
  })
})

// date picker
describe('Date Picker Manipulation Tests', () => {
  it('should add attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveAttribute('testAttribute', 'test4')
    expect(datePicker2).not.toHaveAttribute('testAttribute', 'test5')
    expect(datePicker3).not.toHaveAttribute('testAttribute', 'test6')
    await $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveAttribute('testAttribute', 'test4')
    expect(datePicker2).toHaveAttribute('testAttribute', 'test5')
    expect(datePicker3).toHaveAttribute('testAttribute', 'test6')
  })

  it('should add class to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveClass('testClass')
    expect(datePicker2).not.toHaveClass('testClass')
    expect(datePicker3).not.toHaveClass('testClass')
    await $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveClass('testClass')
    expect(datePicker2).toHaveClass('testClass')
    expect(datePicker3).toHaveClass('testClass')
  })

  it('should add max attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveAttribute('max', '2017-06-01')
    expect(datePicker2).not.toHaveAttribute('max', '2017-06-02')
    expect(datePicker3).not.toHaveAttribute('max', '2017-06-03')
    await $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveAttribute('max', '2017-06-01')
    expect(datePicker2).toHaveAttribute('max', '2017-06-02')
    expect(datePicker3).toHaveAttribute('max', '2017-06-03')
  })

  it('should add min attribute to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveAttribute('min', '2016-06-01')
    expect(datePicker2).not.toHaveAttribute('min', '2016-06-02')
    expect(datePicker3).not.toHaveAttribute('min', '2016-06-03')
    await $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveAttribute('min', '2016-06-01')
    expect(datePicker2).toHaveAttribute('min', '2016-06-02')
    expect(datePicker3).toHaveAttribute('min', '2016-06-03')
  })

  it('should add value to the date pickers', async () => {
    resetDatePickers()
    expect(datePicker1).not.toHaveValue('2016-06-01')
    expect(datePicker2).not.toHaveValue('2016-06-02')
    expect(datePicker3).not.toHaveValue('2016-06-03')
    await $('#manipulateDatePickers').click()
    expect(datePicker1).toHaveValue('2017-06-01')
    expect(datePicker2).toHaveValue('2017-06-02')
    expect(datePicker3).toHaveValue('2017-06-03')
  })
})

// image
describe('Image Manipulation Tests', () => {
  it('should add attribute to the image', async () => {
    resetImages()
    expect(image1).not.toHaveAttribute('testAttribute', 'test7')
    expect(image2).not.toHaveAttribute('testAttribute', 'test8')
    expect(image3).not.toHaveAttribute('testAttribute', 'test9')
    await $('#manipulateImages').click()
    expect(image1).toHaveAttribute('testAttribute', 'test7')
    expect(image2).toHaveAttribute('testAttribute', 'test8')
    expect(image3).toHaveAttribute('testAttribute', 'test9')
  })

  it('should add class to the image', async () => {
    resetImages()
    expect(image1).not.toHaveClass('testClass')
    expect(image2).not.toHaveClass('testClass')
    expect(image3).not.toHaveClass('testClass')
    await $('#manipulateImages').click()
    expect(image1).toHaveClass('testClass')
    expect(image2).toHaveClass('testClass')
    expect(image3).toHaveClass('testClass')
  })

  it('should add height attribute to the image', async () => {
    resetImages()
    expect(image1).not.toHaveAttribute('height', '60px')
    expect(image2).not.toHaveAttribute('height', '70px')
    expect(image3).not.toHaveAttribute('height', '80px')
    await $('#manipulateImages').click()
    expect(image1).toHaveAttribute('height', '60px')
    expect(image2).toHaveAttribute('height', '70px')
    expect(image3).toHaveAttribute('height', '80px')
  })

  it('should add width attribute to the image', async () => {
    resetImages()
    expect(image1).not.toHaveAttribute('width', '60px')
    expect(image2).not.toHaveAttribute('width', '70px')
    expect(image3).not.toHaveAttribute('width', '80px')
    await $('#manipulateImages').click()
    expect(image1).toHaveAttribute('width', '60px')
    expect(image2).toHaveAttribute('width', '70px')
    expect(image3).toHaveAttribute('width', '80px')
  })

  it('should add alt attribute to the date pickers', async () => {
    resetImages()
    expect(image1).not.toHaveAttribute('alt', 'image1')
    expect(image2).not.toHaveAttribute('alt', 'image2')
    expect(image3).not.toHaveAttribute('alt', 'image3')
    await $('#manipulateImages').click()
    expect(image1).toHaveAttribute('alt', 'image1')
    expect(image2).toHaveAttribute('alt', 'image2')
    expect(image3).toHaveAttribute('alt', 'image3')
  })
})

// image button
describe('Image Button Manipulation Tests', () => {
  it('should add attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttribute('testAttribute', 'test10')
    expect(imageButton2).not.toHaveAttribute('testAttribute', 'test11')
    expect(imageButton3).not.toHaveAttribute('testAttribute', 'test12')
    await $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttribute('testAttribute', 'test10')
    expect(imageButton2).toHaveAttribute('testAttribute', 'test11')
    expect(imageButton3).toHaveAttribute('testAttribute', 'test12')
  })

  it('should add class to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveClass('testClass')
    expect(imageButton1).not.toHaveClass('testClass')
    expect(imageButton1).not.toHaveClass('testClass')
    await $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveClass('testClass')
    expect(imageButton2).toHaveClass('testClass')
    expect(imageButton3).toHaveClass('testClass')
  })

  it('should add height attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttribute('height', '60px')
    expect(imageButton2).not.toHaveAttribute('height', '70px')
    expect(imageButton3).not.toHaveAttribute('height', '80px')
    await $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttribute('height', '60px')
    expect(imageButton2).toHaveAttribute('height', '70px')
    expect(imageButton3).toHaveAttribute('height', '80px')
  })

  it('should add width attribute to the image', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttribute('width', '60px')
    expect(imageButton2).not.toHaveAttribute('width', '70px')
    expect(imageButton3).not.toHaveAttribute('width', '80px')
    await $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttribute('width', '60px')
    expect(imageButton2).toHaveAttribute('width', '70px')
    expect(imageButton3).toHaveAttribute('width', '80px')
  })

  it('should add alt attribute to the date pickers', async () => {
    resetImageButtons()
    expect(imageButton1).not.toHaveAttribute('alt', 'imageButton1')
    expect(imageButton2).not.toHaveAttribute('alt', 'imageButton2')
    expect(imageButton3).not.toHaveAttribute('alt', 'imageButton3')
    await $('#manipulateImageButtons').click()
    expect(imageButton1).toHaveAttribute('alt', 'imageButton1')
    expect(imageButton2).toHaveAttribute('alt', 'imageButton2')
    expect(imageButton3).toHaveAttribute('alt', 'imageButton3')
  })
})

// inputs
describe('Input Manipulation Tests', () => {
  it('should add text to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveTextContent('test13')
    expect(input2).not.toHaveTextContent('test14')
    expect(input3).not.toHaveTextContent('test15')
    await $('#manipulateInputs').click()
    expect(input1).toHaveTextContent('CHECK13')
    expect(input2).toHaveTextContent('CHECK14')
    expect(input3).toHaveTextContent('CHECK15')
  })

  it('should add attribute to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveAttribute('testAttribute', 'test13')
    expect(input2).not.toHaveAttribute('testAttribute', 'test14')
    expect(input3).not.toHaveAttribute('testAttribute', 'test15')
    await $('#manipulateInputs').click()
    expect(input1).toHaveAttribute('testAttribute', 'test13')
    expect(input2).toHaveAttribute('testAttribute', 'test14')
    expect(input3).toHaveAttribute('testAttribute', 'test15')
  })

  it('should add class to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveClass('testClass')
    expect(input2).not.toHaveClass('testClass')
    expect(input3).not.toHaveClass('testClass')
    await $('#manipulateInputs').click()
    expect(input1).toHaveClass('testClass')
    expect(input2).toHaveClass('testClass')
    expect(input3).toHaveClass('testClass')
  })

  it('should add value to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveValue('test')
    expect(input2).not.toHaveValue('test')
    expect(input3).not.toHaveValue('test')
    await $('#manipulateInputs').click()
    expect(input1).toHaveValue('test13')
    expect(input2).toHaveValue('test14')
    expect(input3).toHaveValue('test15')
  })

  it('should add css to the inputs', async () => {
    resetInputs()
    expect(input1).not.toHaveStyle('background-color: red')
    expect(input2).not.toHaveStyle('background-color: green')
    expect(input3).not.toHaveStyle('background-color: blue')
    await $('#manipulateInputs').click()
    expect(input1).toHaveStyle('background-color: red')
    expect(input2).toHaveStyle('background-color: green')
    expect(input3).toHaveStyle('background-color: blue')
  })
})

// number steppers
describe('Number Stepper Manipulation Tests', () => {
  it('should add attribute to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveAttribute('testAttribute', 'test16')
    expect(numberStepper2).not.toHaveAttribute('testAttribute', 'test17')
    expect(numberStepper3).not.toHaveAttribute('testAttribute', 'test18')
    await $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveAttribute('testAttribute', 'test16')
    expect(numberStepper2).toHaveAttribute('testAttribute', 'test17')
    expect(numberStepper3).toHaveAttribute('testAttribute', 'test18')
  })

  it('should add class to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveClass('testClass')
    expect(numberStepper2).not.toHaveClass('testClass')
    expect(numberStepper3).not.toHaveClass('testClass')
    await $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveClass('testClass')
    expect(numberStepper2).toHaveClass('testClass')
    expect(numberStepper3).toHaveClass('testClass')
  })

  it('should add step attribute to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveAttribute('step', '2')
    expect(numberStepper2).not.toHaveAttribute('step', '3')
    expect(numberStepper3).not.toHaveAttribute('step', '4')
    await $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveAttribute('step', '2')
    expect(numberStepper2).toHaveAttribute('step', '3')
    expect(numberStepper3).toHaveAttribute('step', '4')
  })

  it('should add value to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveValue('1')
    expect(numberStepper2).not.toHaveValue('1')
    expect(numberStepper3).not.toHaveValue('1')
    await $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveValue(16)
    expect(numberStepper2).toHaveValue(17)
    expect(numberStepper3).toHaveValue(18)
  })

  it('should add css to the number steppers', async () => {
    resetNumberSteppers()
    expect(numberStepper1).not.toHaveStyle('background-color: red')
    expect(numberStepper2).not.toHaveStyle('background-color: green')
    expect(numberStepper3).not.toHaveStyle('background-color: blue')
    await $('#manipulateNumberSteppers').click()
    expect(numberStepper1).toHaveStyle('background-color: red')
    expect(numberStepper2).toHaveStyle('background-color: green')
    expect(numberStepper3).toHaveStyle('background-color: blue')
  })
})

// radio buttons
describe('Radio Button Manipulation Tests', () => {
  it('should add attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toHaveAttribute('testAttribute', 'test19')
    expect(radio2).not.toHaveAttribute('testAttribute', 'test20')
    expect(radio3).not.toHaveAttribute('testAttribute', 'test21')
    await $('#manipulateRadios').click()
    expect(radio1).toHaveAttribute('testAttribute', 'test19')
    expect(radio2).toHaveAttribute('testAttribute', 'test20')
    expect(radio3).toHaveAttribute('testAttribute', 'test21')
  })

  it('should add class to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toHaveClass('testClass')
    expect(radio2).not.toHaveClass('testClass')
    expect(radio3).not.toHaveClass('testClass')
    await $('#manipulateRadios').click()
    expect(radio1).toHaveClass('testClass')
    expect(radio2).toHaveClass('testClass')
    expect(radio3).toHaveClass('testClass')
  })

  it('should add checked attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toBeChecked()
    expect(radio2).not.toBeChecked()
    expect(radio3).not.toBeChecked()
    await $('#manipulateRadios').click()
    expect(radio1).toBeChecked()
    expect(radio2).toBeChecked()
    expect(radio3).toBeChecked()
  })

  it('should add disabled attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toBeDisabled()
    expect(radio1).not.toBeDisabled()
    expect(radio1).not.toBeDisabled()
    await $('#manipulateRadios').click()
    expect(radio1).toBeDisabled()
    expect(radio2).toBeDisabled()
    expect(radio3).toBeDisabled()
  })

  it('should add name attribute to the radio buttons', async () => {
    resetRadios()
    expect(radio1).not.toHaveAttribute('name', 'radio1')
    expect(radio2).not.toHaveAttribute('name', 'radio2')
    expect(radio3).not.toHaveAttribute('name', 'radio3')
    await $('#manipulateRadios').click()
    expect(radio1).toHaveAttribute('name', 'radio1')
    expect(radio2).toHaveAttribute('name', 'radio2')
    expect(radio3).toHaveAttribute('name', 'radio3')
  })
})

// texts
describe('Text Manipulation Tests', () => {
  it('should change text of the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveTextContent('test22')
    expect(text2).not.toHaveTextContent('test23')
    expect(text3).not.toHaveTextContent('test24')
    await $('#manipulateTexts').click()
    expect(text1).toHaveTextContent('CHECK22')
    expect(text2).toHaveTextContent('CHECK23')
    expect(text3).toHaveTextContent('CHECK24')
  })

  it('should add attribute to the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveAttribute('testAttribute', 'test22')
    expect(text2).not.toHaveAttribute('testAttribute', 'test23')
    expect(text3).not.toHaveAttribute('testAttribute', 'test24')
    await $('#manipulateTexts').click()
    expect(text1).toHaveAttribute('testAttribute', 'test22')
    expect(text2).toHaveAttribute('testAttribute', 'test23')
    expect(text3).toHaveAttribute('testAttribute', 'test24')
  })

  it('should add class to the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveClass('testClass')
    expect(text2).not.toHaveClass('testClass')
    expect(text3).not.toHaveClass('testClass')
    await $('#manipulateTexts').click()
    expect(text1).toHaveClass('testClass')
    expect(text2).toHaveClass('testClass')
    expect(text3).toHaveClass('testClass')
  })

  it('should add color to the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveStyle('color: red')
    expect(text2).not.toHaveStyle('color: green')
    expect(text3).not.toHaveStyle('color: blue')
    await $('#manipulateTexts').click()
    expect(text1).toHaveStyle('color: red')
    expect(text2).toHaveStyle('color: green')
    expect(text3).toHaveStyle('color: blue')
  })

  it('should add font-size to the texts', async () => {
    resetTexts()
    expect(text1).not.toHaveStyle('font-size: 18px')
    expect(text2).not.toHaveStyle('font-size: 20px')
    expect(text3).not.toHaveStyle('font-size: 22px')
    await $('#manipulateTexts').click()
    expect(text1).toHaveStyle('font-size: 18px')
    expect(text2).toHaveStyle('font-size: 20px')
    expect(text3).toHaveStyle('font-size: 22px')
  })
})

// text buttons
describe('Text Button Manipulation Tests', () => {
  it('should change text to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveTextContent('test25')
    expect(textButton2).not.toHaveTextContent('test26')
    expect(textButton3).not.toHaveTextContent('test27')
    await $('#manipulateTextButtons').click()
    expect(textButton1).toHaveTextContent('CHECK25')
    expect(textButton2).toHaveTextContent('CHECK26')
    expect(textButton3).toHaveTextContent('CHECK27')
  })

  it('should add attribute to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveAttribute('testAttribute', 'test25')
    expect(textButton2).not.toHaveAttribute('testAttribute', 'test26')
    expect(textButton3).not.toHaveAttribute('testAttribute', 'test27')
    await $('#manipulateTextButtons').click()
    expect(textButton1).toHaveAttribute('testAttribute', 'test25')
    expect(textButton2).toHaveAttribute('testAttribute', 'test26')
    expect(textButton3).toHaveAttribute('testAttribute', 'test27')
  })

  it('should add class to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveClass('testClass')
    expect(textButton2).not.toHaveClass('testClass')
    expect(textButton3).not.toHaveClass('testClass')
    await $('#manipulateTextButtons').click()
    expect(textButton1).toHaveClass('testClass')
    expect(textButton2).toHaveClass('testClass')
    expect(textButton3).toHaveClass('testClass')
  })

  it('should add color to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveStyle('background-color: red')
    expect(textButton2).not.toHaveStyle('background-color: green')
    expect(textButton3).not.toHaveStyle('background-color: blue')
    await $('#manipulateTextButtons').click()
    expect(textButton1).toHaveStyle('background-color: red')
    expect(textButton2).toHaveStyle('background-color: green')
    expect(textButton3).toHaveStyle('background-color: blue')
  })

  it('should add font-size to the text buttons', async () => {
    resetTextButtons()
    expect(textButton1).not.toHaveStyle('font-size: 18px')
    expect(textButton2).not.toHaveStyle('font-size: 20px')
    expect(textButton3).not.toHaveStyle('font-size: 22px')
    await $('#manipulateTextButtons').click()
    expect(textButton1).toHaveStyle('font-size: 18px')
    expect(textButton2).toHaveStyle('font-size: 20px')
    expect(textButton3).toHaveStyle('font-size: 22px')
  })
})
