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
    const checkbox = dom.getElementById('date1')
    expect(checkbox).exist
    expect(checkbox).attr('max')
    expect(checkbox).attr('min')
  })

  it('should test the step date picker', () => {
    const checkbox = dom.getElementById('date2')
    expect(checkbox).exist
    expect(checkbox).attr('step')
  })

  it('should test the value date picker', () => {
    const checkbox = dom.getElementById('date3')
    expect(checkbox).exist
    expect(checkbox).value('2022-07-23')
  })
})

describe('Test the images', () => {
  it('should test the alt image', () => {
    const checkbox = dom.getElementById('image1')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('alt')
  })

  it('should test the height image', () => {
    const checkbox = dom.getElementById('image2')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('height')
  })

  it('should test the width image', () => {
    const checkbox = dom.getElementById('image3')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('width')
  })
})

describe('Test the image buttons', () => {
  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton1')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('alt')
  })

  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton2')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('height')
  })

  it('should test the alt image button', () => {
    const checkbox = dom.getElementById('imageButton3')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('width')
  })
})

describe('Test the text input', () => {
  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput1')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('alt')
  })

  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput2')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('maxlength')
    expect(checkbox).attr('minlength')
  })

  it('should test the alt text input', () => {
    const checkbox = dom.getElementById('textInput3')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('placeholder')
  })
})

describe('Test the number steppers', () => {
  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number1')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('max')
    expect(checkbox).attr('min')
  })

  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number2')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('placeholder')
  })

  it('should test the alt number stepper', () => {
    const checkbox = dom.getElementById('number3')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('step')
  })
})

describe('Test the radio buttons', () => {
  it('should test the alt radio button', () => {
    const checkbox = dom.getElementById('radio1')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('checked')
  })

  it('should test the disabled radio button', () => {
    const checkbox = dom.getElementById('radio2')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('disabled')
  })

  it('should test the name radio button', () => {
    const checkbox = dom.getElementById('radio3')
    expect(checkbox).exist
    expect(checkbox).empty
    expect(checkbox).attr('name')
  })
})

describe('Test the text elements', () => {
  it('should test the accesskey text', () => {
    const checkbox = dom.getElementById('text1')
    expect(checkbox).exist
    expect(checkbox).attr('accesskey')
  })

  it('should test the alt autofocus text', () => {
    const checkbox = dom.getElementById('text2')
    expect(checkbox).exist
    expect(checkbox).attr('autofocus')
  })

  it('should test the alt dir text', () => {
    const checkbox = dom.getElementById('text3')
    expect(checkbox).exist
    expect(checkbox).attr('dir')
  })
})

describe('Test the text buttons', () => {
  it('should test the autofocus text button', () => {
    const checkbox = dom.getElementById('button1')
    expect(checkbox).exist
    expect(checkbox).attr('autofocus')
  })

  it('should test the disabled text button', () => {
    const checkbox = dom.getElementById('button2')
    expect(checkbox).exist
    expect(checkbox).attr('disabled')
  })

  it('should test the value text button', () => {
    const checkbox = dom.getElementById('button3')
    expect(checkbox).exist
    expect(checkbox).value('button3')
  })
})
