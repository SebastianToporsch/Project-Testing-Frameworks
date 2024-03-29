/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
import flush from 'flush-cache'
import pug from 'pug'
import { expect } from '@jest/globals'

const { JSDOM } = jsdom

// setup JSDOM and jquery
const html = pug.renderFile('./views/ui/rest_index.pug')
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
    expect(testElement).toBeInTheDocument()
    $('#manipulateText1').remove()
    expect(testElement).not.toBeInTheDocument()
    container.append(testElement)
  })

  it('should test attributes before deleting element', () => {
    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveTextContent('test')
    $('#manipulateText1').remove()
    expect(testElement).not.toBeInTheDocument()
    expect(testElement).toHaveTextContent('test')
    container.append(testElement)
  })

  it('should test if Element is undefined after deleting it', () => {
    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveTextContent('test')
    $('#manipulateText1').remove()
    expect(testElement).not.toBeInTheDocument()
    expect($('#manipulateText1')[0]).toBe(undefined)
    container.append(testElement)
  })
})

describe('Remove Element with empty Method', () => {
  it('should remove Element inside testElement', () => {
    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveTextContent('test')
    $('#manipulateText1').empty()
    expect(testElement).toBeEmptyDOMElement()
    $('#manipulateText1').html('test')
  })

  it('should remove Element that was added to testElement', () => {
    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveTextContent('test')
    $('#manipulateText1').html('test2')
    expect(testElement).toHaveTextContent('test2')
    $('#manipulateText1').empty()
    expect(testElement).not.toHaveTextContent('test2')
    $('#manipulateText1').html('test')
  })

  it('should test if container is empty after using empty Method', () => {
    expect(container[0]).toBeInTheDocument()
    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveTextContent('test')
    $('.container').empty()
    expect(container[0]).toBeEmptyDOMElement()
    expect(container[0]).not.toContain(testElement)
  })
})
