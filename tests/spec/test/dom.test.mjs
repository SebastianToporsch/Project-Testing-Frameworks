/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { JSDOM } from 'jsdom'
import pug from 'pug'
import 'jasmine_dom_matchers'
import flush from 'flush-cache'

beforeEach(function () { flush() })

const html = pug.renderFile('../views/ui/rest_index.pug')
const dom = new JSDOM(html).window.document

describe('Test the checkboxes', () => {
  it('should test the checked checkbox', () => {
    const checkbox = dom.getElementById('checkbox1')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toBeChecked()
  })

  it('should test the disabled checkbox', () => {
    const checkbox = dom.getElementById('checkbox2')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toBeDisabled()
  })

  it('should test the readonly checkbox', () => {
    const checkbox = dom.getElementById('checkbox3')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('readonly')
  })
})

describe('Test the date pickers', () => {
  it('should test the max min date picker', () => {
    const date = dom.getElementById('date1')
    expect(date).toExist()
    expect(date).toHaveAttr('max')
    expect(date).toHaveAttr('min')
  })

  it('should test the step date picker', () => {
    const date = dom.getElementById('date2')
    expect(date).toExist()
    expect(date).toHaveAttr('step')
  })

  it('should test the value date picker', () => {
    const date = dom.getElementById('date3')
    expect(date).toExist()
    expect(date).toHaveValue('2022-07-23')
  })
})

describe('Test the images', () => {
  it('should test the alt image', () => {
    const image = dom.getElementById('image1')
    expect(image).toBeInTheDocument
    expect(image).toBeEmptyDOMElement
    expect(image).toHaveAttr('alt')
  })

  it('should test the height image', () => {
    const image = dom.getElementById('image2')
    expect(image).toExist()
    expect(image).toContainText('')
    expect(image).toHaveAttr('height')
  })

  it('should test the width image', () => {
    const image = dom.getElementById('image3')
    expect(image).toExist()
    expect(image).toContainText('')
    expect(image).toHaveAttr('width')
  })
})

describe('Test the image buttons', () => {
  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton1')
    expect(imageButton).toExist()
    expect(imageButton).toContainText('')
    expect(imageButton).toHaveAttr('alt')
  })

  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton2')
    expect(imageButton).toExist()
    expect(imageButton).toContainText('')
    expect(imageButton).toHaveAttr('height')
  })

  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton3')
    expect(imageButton).toExist()
    expect(imageButton).toContainText('')
    expect(imageButton).toHaveAttr('width')
  })
})

describe('Test the text input', () => {
  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput1')
    expect(textInput).toExist()
    expect(textInput).toContainText('')
    expect(textInput).toHaveAttr('alt')
  })

  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput2')
    expect(textInput).toExist()
    expect(textInput).toContainText('')
    expect(textInput).toHaveAttr('maxlength')
    expect(textInput).toHaveAttr('minlength')
  })

  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput3')
    expect(textInput).toExist()
    expect(textInput).toContainText('')
    expect(textInput).toHaveAttr('placeholder')
  })
})

describe('Test the number steppers', () => {
  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number1')
    expect(numberStepper).toExist()
    expect(numberStepper).toContainText('')
    expect(numberStepper).toHaveAttr('max')
    expect(numberStepper).toHaveAttr('min')
  })

  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number2')
    expect(numberStepper).toExist()
    expect(numberStepper).toContainText('')
    expect(numberStepper).toHaveAttr('placeholder')
  })

  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number3')
    expect(numberStepper).toExist()
    expect(numberStepper).toContainText('')
    expect(numberStepper).toHaveAttr('step')
  })
})

describe('Test the radio buttons', () => {
  it('should test the alt radio button', () => {
    const radio = dom.getElementById('radio1')
    expect(radio).toExist()
    expect(radio).toContainText('')
    expect(radio).toBeChecked()
  })

  it('should test the disabled radio button', () => {
    const radio = dom.getElementById('radio2')
    expect(radio).toExist()
    expect(radio).toContainText('')
    expect(radio).toBeDisabled()
  })

  it('should test the name radio button', () => {
    const radio = dom.getElementById('radio3')
    expect(radio).toExist()
    expect(radio).toContainText('')
    expect(radio).toHaveAttr('name')
  })
})

describe('Test the text elements', () => {
  it('should test the accesskey text', () => {
    const text = dom.getElementById('text1')
    expect(text).toExist()
    expect(text).toContainText('test1')
    expect(text).toHaveAttr('accesskey')
  })

  it('should test the alt autofocus text', () => {
    const text = dom.getElementById('text2')
    expect(text).toExist()
    expect(text).toContainText('test2')
    expect(text).toHaveAttr('autofocus')
  })

  it('should test the alt dir text', () => {
    const text = dom.getElementById('text3')
    expect(text).toExist()
    expect(text).toContainText('test3')
    expect(text).toHaveAttr('dir')
  })
})

describe('Test the text buttons', () => {
  it('should test the autofocus text button', () => {
    const textButton = dom.getElementById('button1')
    expect(textButton).toExist()
    expect(textButton).toContainText('test1')
    expect(textButton).toHaveAttr('autofocus')
  })

  it('should test the disabled text button', () => {
    const textButton = dom.getElementById('button2')
    expect(textButton).toExist()
    expect(textButton).toContainText('test2')
    expect(textButton).toBeDisabled()
  })

  it('should test the value text button', () => {
    const textButton = dom.getElementById('button3')
    expect(textButton).toExist()
    expect(textButton).toContainText('test3')
    expect(textButton).toHaveValue('button3')
  })
})
