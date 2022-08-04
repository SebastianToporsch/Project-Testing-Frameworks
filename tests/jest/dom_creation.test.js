/* eslint-disable no-undef */
import jsdom from 'jsdom'
import jquery from 'jquery'
import flush from 'flush-cache'
import pug from 'pug'

const { JSDOM } = jsdom

// setup JSDOM and jquery
const html = pug.renderFile('./views/ui/rest_index.pug')
const dom = new JSDOM(html)
global.window = dom.window
global.document = dom.window.document
const $ = jquery(window)

// flush cache
beforeEach(function () {
  flush()
  element = '<p id="testElement" class="testClass" testAttribute="true" >test</p>'
})

afterEach(function () { $('#testElement')[0].remove() })

const container = $('.container')

let element

describe('Adding Elements Before Tests', () => {
  it('should add element before the container', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.prepend(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })

  it('should add element before the container and manipulate it', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.prepend(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })

  it('should add element before the container', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.before(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })

  it('should add element before the container and manipulate it', () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.before(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })
})

describe('Adding Elements After Tests', () => {
  it('should add element after the container', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.append(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })

  it('should add element before the container and manipulate it', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.append(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
    // manipulate
  })

  it('should add element after the container', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.after(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })

  it('should add element after the container and manipulate it', async () => {
    expect($('#testElement')[0]).toBe(undefined)
    container.after(element)
    const createdElement = $('#testElement')[0]
    expect(createdElement).toBeInTheDocument()
    expect(createdElement).toHaveTextContent('test')
    expect(createdElement).toHaveClass('testClass')
    expect(createdElement).toHaveAttribute('testAttribute', 'true')
  })
})
