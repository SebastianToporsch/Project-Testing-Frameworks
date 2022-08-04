/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { JSDOM } from 'jsdom'
import chaiDOM from 'chai-dom'
import pug from 'pug'
import chai, { expect } from 'chai'
chai.use(chaiDOM)

const html = pug.renderFile('./views/ui/rest_index.pug')
const dom = new JSDOM(html).window.document

describe('Test the checkboxes', () => {
  it('should test the checked checkbox', () => {
    const checkbox = dom.getElementById('checkbox1')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('checked')
  })

  it('should test the disabled checkbox', () => {
    const checkbox = dom.getElementById('checkbox2')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('disabled')
  })

  it('should test the readonly checkbox', () => {
    const checkbox = dom.getElementById('checkbox3')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('readonly')
  })
})

describe('Test the date pickers', () => {
  it('should test the max min date picker', () => {
    const date = dom.getElementById('date1')
    expect(date).exist
    expect(date).empty
    expect(date).attr('max')
    expect(date).attr('min')
  })

  it('should test the step date picker', () => {
    const date = dom.getElementById('date2')
    expect(date).exist
    expect(date).empty
    expect(date).attr('step')
  })

  it('should test the value date picker', () => {
    const date = dom.getElementById('date3')
    expect(date).exist
    expect(date).empty
    expect(date).value('2022-07-23')
  })
})

describe('Test the images', () => {
  it('should test the alt image', () => {
    const image = dom.getElementById('image1')
    expect(image).exist
    expect(image).empty
    expect(image).attr('alt')
  })

  it('should test the height image', () => {
    const image = dom.getElementById('image2')
    expect(image).exist
    expect(image).empty
    expect(image).attr('height')
  })

  it('should test the width image', () => {
    const image = dom.getElementById('image3')
    expect(image).exist
    expect(image).empty
    expect(image).attr('width')
  })
})

describe('Test the image buttons', () => {
  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton1')
    expect(imageButton).exist
    expect(imageButton).empty
    expect(imageButton).attr('alt')
  })

  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton2')
    expect(imageButton).exist
    expect(imageButton).empty
    expect(imageButton).attr('height')
  })

  it('should test the alt image button', () => {
    const imageButton = dom.getElementById('imageButton3')
    expect(imageButton).exist
    expect(imageButton).empty
    expect(imageButton).attr('width')
  })
})

describe('Test the text input', () => {
  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput1')
    expect(textInput).exist
    expect(textInput).empty
    expect(textInput).attr('alt')
  })

  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput2')
    expect(textInput).exist
    expect(textInput).empty
    expect(textInput).attr('maxlength')
    expect(textInput).attr('minlength')
  })

  it('should test the alt text input', () => {
    const textInput = dom.getElementById('textInput3')
    expect(textInput).exist
    expect(textInput).empty
    expect(textInput).attr('placeholder')
  })
})

describe('Test the number steppers', () => {
  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number1')
    expect(numberStepper).exist
    expect(numberStepper).empty
    expect(numberStepper).attr('max')
    expect(numberStepper).attr('min')
  })

  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number2')
    expect(numberStepper).exist
    expect(numberStepper).empty
    expect(numberStepper).attr('placeholder')
  })

  it('should test the alt number stepper', () => {
    const numberStepper = dom.getElementById('number3')
    expect(numberStepper).exist
    expect(numberStepper).empty
    expect(numberStepper).attr('step')
  })
})

describe('Test the radio buttons', () => {
  it('should test the alt radio button', () => {
    const radio = dom.getElementById('radio1')
    expect(radio).exist
    expect(radio).empty
    expect(radio).attr('checked')
  })

  it('should test the disabled radio button', () => {
    const radio = dom.getElementById('radio2')
    expect(radio).exist
    expect(radio).empty
    expect(radio).attr('disabled')
  })

  it('should test the name radio button', () => {
    const radio = dom.getElementById('radio3')
    expect(radio).exist
    expect(radio).empty
    expect(radio).attr('name')
  })
})

describe('Test the text elements', () => {
  it('should test the accesskey text', () => {
    const text = dom.getElementById('text1')
    expect(text).exist
    expect(text).text('test1')
    expect(text).attr('accesskey')
  })

  it('should test the alt autofocus text', () => {
    const text = dom.getElementById('text2')
    expect(text).exist
    expect(text).text('test2')
    expect(text).attr('autofocus')
  })

  it('should test the alt dir text', () => {
    const text = dom.getElementById('text3')
    expect(text).exist
    expect(text).text('test3')
    expect(text).attr('dir')
  })
})

describe('Test the text buttons', () => {
  it('should test the autofocus text button', () => {
    const textButton = dom.getElementById('button1')
    expect(textButton).exist
    expect(textButton).text('test1')
    expect(textButton).attr('autofocus')
  })

  it('should test the disabled text button', () => {
    const textButton = dom.getElementById('button2')
    expect(textButton).exist
    expect(textButton).text('test2')
    expect(textButton).attr('disabled')
  })

  it('should test the value text button', () => {
    const textButton = dom.getElementById('button3')
    expect(textButton).exist
    expect(textButton).text('test3')
    expect(textButton).value('button3')
  })
})
