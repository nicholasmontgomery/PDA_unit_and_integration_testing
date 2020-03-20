const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update display with result of operation when button clicked', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  });

  it('should chain multiple arithmetical operations together', function() {
   running_total = element(by.css('#running_total'));
   element(by.css('#number5')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number1')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('40');
   });

  it('should display a positive result', function() {
   running_total = element(by.css('#running_total'));
   element(by.css('#number5')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('10');
  });

  it('should display a negative result', function() {
   running_total = element(by.css('#running_total'));
   element(by.css('#number2')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-6');
  });

  it ('should display a decimal number', function() {
   running_total = element(by.css('#running_total'));
   element(by.css('#number4')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
  })

  it('should display very large numbers', function() {
   running_total = element(by.css('#running_total'));
   element(by.css('#number9')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number9')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number9')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('970299');
  });

  it('should output NaN', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('NaN');
  })
});
