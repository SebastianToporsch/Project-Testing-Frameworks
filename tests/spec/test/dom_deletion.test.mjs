/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
import flush from 'flush-cache'
import 'jasmine_dom_matchers'
import pug from 'pug'

const { JSDOM } = jsdom

// setup JSDOM and jquery
const html = pug.renderFile('../views/ui/rest_index.pug')
const dom = new JSDOM(html)
global.window = dom.window
global.document = dom.window.document
const $ = jquery(window)

// input
const testElement = $('#manipulateText1')[0]

const container = $('.container')

// flush cache
beforeEach(function () {
  flush()
})

describe('Remove Element with remove Method', () => {
  it('should delete element', () => {
    expect(testElement).toExist()
    $('#manipulateText1').remove()
    expect($('#manipulateText1')).not.toExist()
    container.append(testElement)
  })

  it('should test attributes before deleting element', () => {
    expect(testElement).toExist()
    expect(testElement).toContainText('test')
    $('#manipulateText1').remove()
    expect($('#manipulateText1')).not.toExist()
    expect(testElement).toContainText('test')
    container.append(testElement)
  })

  it('should test if Element is undefined after deleting it', () => {
    expect(testElement).toExist()
    expect(testElement).toContainText('test')
    $('#manipulateText1').remove()
    expect($('#manipulateText1')).not.toExist()
    expect($('#manipulateText1')[0]).toBe(undefined)
    container.append(testElement)
  })
})

describe('Remove Element with empty Method', () => {
  it('should remove Element inside testElement', () => {
    expect(testElement).toExist()
    expect(testElement).toContainText('test')
    $('#manipulateText1').empty()
    expect(testElement).toContainText('')
    $('#manipulateText1').html('test')
  })

  it('should remove Element that was added to testElement', () => {
    expect(testElement).toExist()
    expect(testElement).toContainText('test')
    $('#manipulateText1').html('test2')
    expect(testElement).toContainText('test2')
    $('#manipulateText1').empty()
    expect(testElement).not.toContainText('test2')
    $('#manipulateText1').html('test')
  })

  it('should test if container is empty after using empty Method', () => {
    expect(container[0]).toExist()
    expect(testElement).toExist()
    expect(testElement).toContainText('test')
    $('.container').empty()
    expect(container[0]).toContainText('')
    expect(container[0]).not.toContain(testElement)
  })
})
