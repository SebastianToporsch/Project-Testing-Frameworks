/* eslint-disable no-undef */
import { JSDOM } from 'jsdom'
import '@testing-library/jest-dom'
import pug from 'pug'

const html = pug.renderFile('./views/ui/rest_index.pug')
const dom = new JSDOM(html).window.document

describe('Test the checkboxes', () => {
  it('should test the checked checkbox', () => {
    const checkbox = dom.getElementById('checkbox1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toBeChecked()
  })

  it('should test the readonly checkbox', () => {
    const checkbox = dom.getElementById('checkbox2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toBeDisabled()
  })

  it('should test the disabled checkbox', () => {
    const checkbox = dom.getElementById('checkbox3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('readonly')
  })
})

describe('Test the date pickers', () => {
  it('should test the max min date picker', () => {
    const checkbox = dom.getElementById('date1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('max')
    expect(checkbox).toHaveAttribute('min')
  })

  it('should test the step date picker', () => {
    const checkbox = dom.getElementById('date2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('step')
  })

  it('should test the value date picker', () => {
    const checkbox = dom.getElementById('date3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveValue('2022-07-23')
  })
})

describe('Test the images', () => {
  it('should test the alt image', () => {
    const checkbox = dom.getElementById('image1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('alt')
  })

  it('should test the height image', () => {
    const checkbox = dom.getElementById('image2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('height')
  })

  it('should test the width image', () => {
    const checkbox = dom.getElementById('image3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('width')
  })
})

describe('Test the image buttons', () => {
  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('alt')
  })

  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('height')
  })

  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('width')
  })
})

describe('Test the text input', () => {
  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('alt')
  })

  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('maxlength')
    expect(checkbox).toHaveAttribute('minlength')
  })

  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('placeholder')
  })
})

describe('Test the number steppers', () => {
  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('max')
    expect(checkbox).toHaveAttribute('min')
  })

  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('placeholder')
  })

  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('step')
  })
})

describe('Test the radio buttons', () => {
  it('should test the alt radio button', () => {
    const checkbox = dom.getElementById('radio1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toBeChecked()
  })

  it('should test the disabled radio button', () => {
    const checkbox = dom.getElementById('radio2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toBeDisabled()
  })

  it('should test the name radio button', () => {
    const checkbox = dom.getElementById('radio3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeEmptyDOMElement()
    expect(checkbox).toHaveAttribute('name')
  })
})

describe('Test the text elements', () => {
  it('should test the accesskey text', () => {
    const checkbox = dom.getElementById('text1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('accesskey')
  })

  it('should test the alt autofocus text', () => {
    const checkbox = dom.getElementById('text2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('autofocus')
  })

  it('should test the alt dir text', () => {
    const checkbox = dom.getElementById('text3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('dir')
  })
})

describe('Test the text buttons', () => {
  it('should test the autofocus text button', () => {
    const checkbox = dom.getElementById('button1')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('autofocus')
  })

  it('should test the disabled text button', () => {
    const checkbox = dom.getElementById('button2')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeDisabled()
  })

  it('should test the value text button', () => {
    const checkbox = dom.getElementById('button3')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveValue('button3')
  })
})
