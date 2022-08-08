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

// flush cache
beforeEach(function () {
  flush()
})

const container = $('.container')

const element = '<p id="testElement" class="testClass" testAttribute="true" >test</p>'

describe('Adding Elements Before Tests', () => {
  it('should add element before the container', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.prepend(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })

  it('should add element before the container and check the attributes', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.prepend(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })

  it('should add element before the container', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.before(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })

  it('should add element before the container and check the attributes', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.before(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })
})

describe('Adding Elements After Tests', () => {
  it('should add element after the container', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.append(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })

  it('should add element before the container and check the attributes', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.append(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })

  it('should add element after the container', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.after(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })

  it('should add element after the container and check the attributes', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.after(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toExist()
    expect(createdElement).toContainText('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttr('testAttribute', 'true')
    $('#testElement')[0].remove()
  })
})
