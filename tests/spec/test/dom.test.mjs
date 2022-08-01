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
    const checkbox = dom.getElementById('date1')
    expect(checkbox).toExist()
    expect(checkbox).toHaveAttr('max')
    expect(checkbox).toHaveAttr('min')
  })

  it('should test the step date picker', () => {
    const checkbox = dom.getElementById('date2')
    expect(checkbox).toExist()
    expect(checkbox).toHaveAttr('step')
  })

  it('should test the value date picker', () => {
    const checkbox = dom.getElementById('date3')
    expect(checkbox).toExist()
    expect(checkbox).toHaveValue('2022-07-23')
  })
})

describe('Test the images', () => {
  it('should test the alt image', () => {
    const checkbox = dom.getElementById('image1')
    expect(checkbox).toBeInTheDocument
    expect(checkbox).toBeEmptyDOMElement
    expect(checkbox).toHaveAttr('alt')
  })

  it('should test the height image', () => {
    const checkbox = dom.getElementById('image2')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('height')
  })

  it('should test the width image', () => {
    const checkbox = dom.getElementById('image3')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('width')
  })
})

describe('Test the image buttons', () => {
  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton1')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('alt')
  })

  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton2')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('height')
  })

  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton3')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('width')
  })
})

describe('Test the text input', () => {
  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput1')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('alt')
  })

  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput2')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('maxlength')
    expect(checkbox).toHaveAttr('minlength')
  })

  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput3')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('placeholder')
  })
})

describe('Test the number steppers', () => {
  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number1')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('max')
    expect(checkbox).toHaveAttr('min')
  })

  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number2')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('placeholder')
  })

  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number3')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('step')
  })
})

describe('Test the radio buttons', () => {
  it('should test the alt radio button', () => {
    const checkbox = dom.getElementById('radio1')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toBeChecked()
  })

  it('should test the disabled radio button', () => {
    const checkbox = dom.getElementById('radio2')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toBeDisabled()
  })

  it('should test the name radio button', () => {
    const checkbox = dom.getElementById('radio3')
    expect(checkbox).toExist()
    expect(checkbox).toContainText('')
    expect(checkbox).toHaveAttr('name')
  })
})

describe('Test the text buttons', () => {
  it('should test the autofocus text button', () => {
    const checkbox = dom.getElementById('button1')
    expect(checkbox).toExist()
    expect(checkbox).toHaveAttr('autofocus')
  })

  it('should test the disabled text button', () => {
    const checkbox = dom.getElementById('button2')
    expect(checkbox).toExist()
    expect(checkbox).toBeDisabled()
  })

  it('should test the value text button', () => {
    const checkbox = dom.getElementById('button3')
    expect(checkbox).toExist()
    expect(checkbox).toHaveValue('button3')
  })
})
