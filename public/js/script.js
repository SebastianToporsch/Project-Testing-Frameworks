/* /* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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
    .attr('checked', 'true')
    .attr('testAttribute', 'test1')
    .addClass('testClass', 'test1')
    .val('test1')
    .css('width', '60px')

  checkbox2
    .attr('checked', 'true')
    .attr('testAttribute', 'test2')
    .addClass('testClass', 'test2')
    .val('test2')
    .css('width', '70px')

  checkbox3
    .attr('checked', 'true')
    .attr('testAttribute', 'test3')
    .addClass('testClass', 'test3')
    .val('test3')
    .css('width', '80px')
}

function manipulateDatePickers () {
  datePicker1
    .attr('testAttribute', 'test4')
    .addClass('testClass', 'test4')
    .attr('max', '2017-06-01')
    .attr('min', '2016-06-01')
    .val('2017-06-01')

  datePicker2
    .attr('testAttribute', 'test5')
    .addClass('testClass', 'test5')
    .attr('max', '2017-06-02')
    .attr('min', '2016-06-02')
    .val('2017-06-02')

  datePicker3
    .attr('testAttribute', 'test6')
    .addClass('testClass', 'test6')
    .attr('max', '2017-06-03')
    .attr('min', '2016-06-03')
    .val('2017-06-03')
}

function manipulateImages () {
  image1
    .attr('testAttribute', 'test7')
    .addClass('testClass', 'test7')
    .attr('height', '60px')
    .attr('width', '60px')
    .attr('alt', 'image1')

  image2
    .attr('testAttribute', 'test8')
    .addClass('testClass', 'test8')
    .attr('height', '70px')
    .attr('width', '70px')
    .attr('alt', 'image2')

  image3
    .attr('testAttribute', 'test9')
    .addClass('testClass', 'test9')
    .attr('height', '80px')
    .attr('width', '80px')
    .attr('alt', 'image3')
}

function manipulateImageButtons () {
  imageButton1
    .attr('testAttribute', 'test10')
    .addClass('testClass', 'test10')
    .attr('height', '60px')
    .attr('width', '60px')
    .val('test10')

  imageButton2
    .attr('testAttribute', 'test11')
    .addClass('testClass', 'test11')
    .attr('height', '70px')
    .attr('width', '70px')
    .val('test11')

  imageButton3
    .attr('testAttribute', 'test12')
    .addClass('testClass', 'test12')
    .attr('height', '80px')
    .attr('width', '80px')
    .val('test12')
}

function manipulateInputs () {
  input1
    .html('CHECK13')
    .attr('testAttribute', 'test13')
    .addClass('testClass', 'test13')
    .val('test13')
    .css('background-color', 'red')

  input2
    .html('CHECK14')
    .attr('testAttribute', 'test14')
    .addClass('testClass', 'test14')
    .val('test14')
    .css('background-color', 'green')

  input3
    .html('CHECK15')
    .attr('testAttribute', 'test15')
    .addClass('testClass', 'test15')
    .val('test15')
    .css('background-color', 'blue')
}

function manipulateNumberSteppers () {
  numberStepper1
    .html('CHECK16')
    .attr('testAttribute', 'test16')
    .addClass('testClass', 'test16')
    .val('16')
    .css('background-color', 'red')

  numberStepper2
    .html('CHECK17')
    .attr('testAttribute', 'test17')
    .addClass('testClass', 'test17')
    .val('17')
    .css('background-color', 'green')

  numberStepper3
    .html('CHECK18')
    .attr('testAttribute', 'test18')
    .addClass('testClass', 'test18')
    .val('18')
    .css('background-color', 'blue')
}

function manipulateRadios () {
  radio1
    .html('CHECK19')
    .attr('testAttribute', 'test19')
    .addClass('testClass', 'test19')
    .attr('checked', 'true')
    .attr('disabled', 'true')

  radio2
    .html('CHECK20')
    .attr('testAttribute', 'test20')
    .addClass('testClass', 'test20')
    .attr('checked', 'true')
    .attr('disabled', 'true')

  radio3
    .html('CHECK21')
    .attr('testAttribute', 'test21')
    .addClass('testClass', 'test21')
    .attr('checked', 'true')
    .attr('disabled', 'true')
}

function manipulateTexts () {
  text1
    .html('CHECK22')
    .attr('testAttribute', 'test22')
    .addClass('testClass', 'test22')
    .css('color', 'red')
    .css('font-size', '18px')

  text2
    .html('CHECK23')
    .attr('testAttribute', 'test23')
    .addClass('testClass', 'test23')
    .css('color', 'green')
    .css('font-size', '20px')

  text3
    .html('CHECK24')
    .attr('testAttribute', 'test24')
    .addClass('testClass', 'test24')
    .css('font-size', '22px')
    .css('color', 'blue')
}

function manipulateTextButtons () {
  textButton1
    .html('CHECK25')
    .attr('testAttribute', 'test25')
    .addClass('testClass', 'test25')
    .css('font-size', '18px')
    .css('background-color', 'red')

  textButton2
    .html('CHECK26')
    .attr('testAttribute', 'test26')
    .addClass('testClass', 'test26')
    .css('font-size', '20px')
    .css('background-color', 'green')

  textButton3
    .html('CHECK27')
    .attr('testAttribute', 'test27')
    .addClass('testClass', 'test27')
    .css('font-size', '22px')
    .css('background-color', 'blue')
}

// generic resetter
function resetElement (elem) {
  elem
    .removeClass('testClass')
    .removeAttr('testAttribute')
    .removeAttr('style')
    .removeAttr('value')
    .removeAttr('checked')
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
  resetElement(image2)
  resetElement(image3)
}

function resetImageButtons () {
  resetElement(imageButton1)
  resetElement(imageButton2)
  resetElement(imageButton3)
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
