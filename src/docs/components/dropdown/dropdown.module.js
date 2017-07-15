// Import Angular Resources
import template from './dropdown.html';
import controller from './dropdown.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./dropdown.html';
import ControllerRaw from '!raw-loader!./dropdown.controller.js';
import MarkdownRaw from '!raw-loader!./dropdown.md';

// manipulate controller to pass raw files up to demo
controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
  this.demo.js = ControllerRaw;
  this.demo.md = MarkdownRaw;
};

// Component definition
const Component = {
  require: {
    demo: '^demo',
  },
  template,
  controller
};

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.dropdownDemo', [])
  .component('dropdownDemo', Component)
  .name;
