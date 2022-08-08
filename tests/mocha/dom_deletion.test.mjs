/* eslint-disable no-unused-expressions */
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
const dom = new JSDOM(html, { url: 'http://localhost' })

const { window } = dom
const $ = jquery(window)

global.window = dom.window

// input
const testElement = $('#manipulateText1')[0]

const container = $('.container')

// flush cache
beforeEach(function () {
  flush()
})

describe('Remove Element with remove Method', () => {
  it('should delete element', () => {
    expect(testElement).exist
    $('#manipulateText1').remove()
    expect($('#manipulateText1')[0]).not.exist
    container.append(testElement)
  })

  it('should test attributes before deleting element', () => {
    expect(testElement).exist
    expect(testElement).text('test')
    $('#manipulateText1').remove()
    expect($('#manipulateText1')[0]).not.exist
    expect(testElement).text('test')
    container.append(testElement)
  })

  it('should test if Element is undefined after deleting it', () => {
    expect(testElement).exist
    expect(testElement).text('test')
    $('#manipulateText1').remove()
    expect($('#manipulateText1')[0]).not.exist
    expect($('#manipulateText1')[0]).to.equal(undefined)
    container.append(testElement)
  })
})

describe('Remove Element with empty Method', () => {
  it('should remove Element inside testElement', () => {
    expect(testElement).exist
    expect(testElement).text('test')
    $('#manipulateText1').empty()
    expect(testElement).empty
    $('#manipulateText1').html('test')
  })

  it('should remove Element that was added to testElement', () => {
    expect(testElement).exist
    expect(testElement).text('test')
    $('#manipulateText1').html('test2')
    expect(testElement).text('test2')
    $('#manipulateText1').empty()
    expect(testElement).empty
    $('#manipulateText1').html('test')
  })

  it('should test if container is empty after using empty Method', () => {
    expect(container[0]).exist
    expect(testElement).exist
    expect(testElement).text('test')
    $('.container').empty()
    expect(container[0]).empty
    expect(container[0]).not.contain(testElement)
  })
})
