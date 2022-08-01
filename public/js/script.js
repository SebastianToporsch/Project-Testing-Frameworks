/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const text1 = $('#manipulateText1')
const text2 = $('#manipulateText2')
const text3 = $('#manipulateText3')
function check () {
  text1.html('CHECK1')
    .attr('testAttribute', 'test1')
    .addClass('testClass', 'test1')
    .css('color', 'red')
    .css('font-size', '18')

  text2.html('CHECK2')
    .attr('testAttribute', 'test2')
    .addClass('testClass', 'test2')
    .css('color', 'green')
    .css('font-size', '20')

  text3.html('CHECK3')
    .attr('testAttribute', 'test3')
    .addClass('testClass', 'test3')
    .css('color', 'blue')
    .css('font-size', '22')
    .attr('val', 'test')
}

function reset () {
  text1.html('test1')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
  text2.html('test2')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
  text3.html('test3')
    .removeAttr('style')
    .removeAttr('testAttribute')
    .removeClass('testClass')
    .removeProp('testProp')
}
