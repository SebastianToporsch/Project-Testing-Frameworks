/* eslint-disable no-undef */
import { JSDOM } from 'jsdom'
import pug from 'pug'
import flush from 'flush-cache'
import { expect } from '@jest/globals'

const html = pug.renderFile('./views/ui/rest_index.pug')
const dom = new JSDOM(html).window.document

// flush cache
beforeEach(function () {
  flush()
})

describe('Test the checkboxes', () => {
  it('should test the checked checkbox', () => {
    const checkbox = dom.getElementById('checkbox1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toBeChecked()
  })

  it('should test the disabled checkbox', () => {
    const checkbox = dom.getElementById('checkbox2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toBeDisabled()
  })

  it('should test the readonly checkbox', () => {
    const checkbox = dom.getElementById('checkbox3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('readonly')
  })
})

describe('Test the date pickers', () => {
  it('should test the max min date picker', () => {
    const date = dom.getElementById('date1')
    expect(date).toBeInTheDocument()
    expect(date).toBeEmptyDOMElement()
    expect(date).toHaveAttribute('max')
    expect(date).toHaveAttribute('min')
  })

  it('should test the step date picker', () => {
    const date = dom.getElementById('date2')
    expect(date).toBeInTheDocument()
    expect(date).toBeEmptyDOMElement()
    expect(date).toHaveAttribute('step')
  })

  it('should test the value date picker', () => {
    const date = dom.getElementById('date3')
    expect(date).toBeInTheDocument()
    expect(date).toBeEmptyDOMElement()
    expect(date).toHaveValue('2022-07-23')
  })
})

describe('Test the images', () => {
  it('should test the alt image', () => {
    const image = dom.getElementById('image1')
    expect(image).toBeInTheDocument()
    expect(image).toBeEmptyDOMElement()
    expect(image).toHaveAttribute('alt')
  })

  it('should test the height image', () => {
    const image = dom.getElementById('image2')
    expect(image).toBeInTheDocument()
    expect(image).toBeEmptyDOMElement()
    expect(image).toHaveAttribute('height')
  })

  it('should test the width image', () => {
    const image = dom.getElementById('image3')
    expect(image).toBeInTheDocument()
    expect(image).toBeEmptyDOMElement()
    expect(image).toHaveAttribute('width')
  })
})

describe('Test the image buttons', () => {
  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton1')
    expect(imageButton).toBeInTheDocument()
    expect(imageButton).toBeEmptyDOMElement()
    expect(imageButton).toHaveAttribute('alt')
  })

  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton2')
    expect(imageButton).toBeInTheDocument()
    expect(imageButton).toBeEmptyDOMElement()
    expect(imageButton).toHaveAttribute('height')
  })

  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton3')
    expect(imageButton).toBeInTheDocument()
    expect(imageButton).toBeEmptyDOMElement()
    expect(imageButton).toHaveAttribute('width')
  })
})

describe('Test the text input', () => {
  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput1')
    expect(textInput).toBeInTheDocument()
    expect(textInput).toBeEmptyDOMElement()
    expect(textInput).toHaveAttribute('alt')
  })

  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput2')
    expect(textInput).toBeInTheDocument()
    expect(textInput).toBeEmptyDOMElement()
    expect(textInput).toHaveAttribute('maxlength')
    expect(textInput).toHaveAttribute('minlength')
  })

  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput3')
    expect(textInput).toBeInTheDocument()
    expect(textInput).toBeEmptyDOMElement()
    expect(textInput).toHaveAttribute('placeholder')
  })
})

describe('Test the number steppers', () => {
  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number1')
    expect(numberStepper).toBeInTheDocument()
    expect(numberStepper).toBeEmptyDOMElement()
    expect(numberStepper).toHaveAttribute('max')
    expect(numberStepper).toHaveAttribute('min')
  })

  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number2')
    expect(numberStepper).toBeInTheDocument()
    expect(numberStepper).toBeEmptyDOMElement()
    expect(numberStepper).toHaveAttribute('placeholder')
  })

  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number3')
    expect(numberStepper).toBeInTheDocument()
    expect(numberStepper).toBeEmptyDOMElement()
    expect(numberStepper).toHaveAttribute('step')
  })
})

describe('Test the radio buttons', () => {
  it('should test the alt radio button', () => {
    const radio = dom.getElementById('radio1')
    expect(radio).toBeInTheDocument()
    expect(radio).toBeEmptyDOMElement()
    expect(radio).toBeChecked()
  })

  it('should test the disabled radio button', () => {
    const radio = dom.getElementById('radio2')
    expect(radio).toBeInTheDocument()
    expect(radio).toBeEmptyDOMElement()
    expect(radio).toBeDisabled()
  })

  it('should test the name radio button', () => {
    const radio = dom.getElementById('radio3')
    expect(radio).toBeInTheDocument()
    expect(radio).toBeEmptyDOMElement()
    expect(radio).toHaveAttribute('name')
  })
})

describe('Test the text elements', () => {
  it('should test the accesskey text', () => {
    const text = dom.getElementById('text1')
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent('test1')
    expect(text).toHaveAttribute('accesskey')
  })

  it('should test the alt autofocus text', () => {
    const text = dom.getElementById('text2')
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent('test2')
    expect(text).toHaveAttribute('autofocus')
  })

  it('should test the alt dir text', () => {
    const text = dom.getElementById('text3')
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent('test3')
    expect(text).toHaveAttribute('dir')
  })
})

describe('Test the text buttons', () => {
  it('should test the autofocus text button', () => {
    const textButton = dom.getElementById('button1')
    expect(textButton).toBeInTheDocument()
    expect(textButton).toHaveTextContent('test1')
    expect(textButton).toHaveAttribute('autofocus')
  })

  it('should test the disabled text button', () => {
    const textButton = dom.getElementById('button2')
    expect(textButton).toBeInTheDocument()
    expect(textButton).toHaveTextContent('test2')
    expect(textButton).toBeDisabled()
  })

  it('should test the value text button', () => {
    const textButton = dom.getElementById('button3')
    expect(textButton).toBeInTheDocument()
    expect(textButton).toHaveTextContent('test3')
    expect(textButton).toHaveValue('button3')
  })
})
