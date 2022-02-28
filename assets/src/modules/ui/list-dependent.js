/**
 * Part of starter project.
 *
 * @copyright  Copyright (C) 2021 __ORGANIZATION__.
 * @license    __LICENSE__
 */

import { defaultsDeep, each } from 'lodash-es';

const nope = (value, ele, dep) => {
};

/**
 * Class init.
 * @param {jQuery}        $element
 * @param {jQuery|string} dependent
 * @param {Object}        options
 * @constructor
 */
export class ListDependent {
  cancelToken = null;

  static get defaultOptions() {
    return {
      ajax: {
        url: null,
        value_field: 'value'
      },
      source: null,
      text_field: 'title',
      value_field: 'id',
      first_option: null,
      default_value: null,
      initial_load: true,
      empty_mark: '__EMPTY__',
      hooks: {
        before_request: nope,
        after_request: nope
      }
    };
  }

  static handle(el, dependent = null, options = {}) {
    return u.getBoundedInstance(el, 'list-dependent', () => {
      return new this(el, dependent, options);
    });
  }

  constructor(element, dependent, options) {
    this.element = u.selectOne(element);
    this.setOptions(options);

    this.dependent = u.selectOne(dependent);

    this.bindEvents();

    if (this.options.initial_load) {
      this.changeList(this.dependent.value, true);
    }
  }

  setOptions(options) {
    this.options = defaultsDeep({}, options, this.constructor.defaultOptions);
  }

  /**
   * Bind events.
   */
  bindEvents() {
    this.dependent.addEventListener('change', (event) => {
      this.changeList(event.currentTarget?.value);
    });
  }

  /**
   * Update the list elements.
   *
   * @param {*}    value
   * @param {bool} initial
   */
  changeList(value, initial = null) {
    value = value || this.dependent.value;

    // Empty mark
    if (value === '') {
      value = this.options.empty_mark;
    }

    if (this.options.ajax.url) {
      this.ajaxUpdate(value);
    } else if (this.options.source) {
      this.sourceUpdate(value, initial);
    }
  }

  /**
   * Update list by source.
   *
   * @param {string} value
   * @param {bool}   initial
   */
  sourceUpdate(value, initial = null) {
    const source = this.options.source;

    this.beforeHook(value, this.element, this.dependent);

    if (source[value]) {
      this.updateListElements(source[value]);
    } else {
      this.updateListElements([]);

      if (!initial && value !== '' && parseInt(value) !== 0) {
        console.log('List for value: ' + value + ' not found.');
      }
    }

    this.afterHook(value, this.element, this.dependent);
  }

  /**
   * Do ajax.
   *
   * @param {string} value
   */
  ajaxUpdate(value) {
    const data = {};
    data[this.options.ajax.value_field] = value;

    this.beforeHook(value, this.element, this.dependent);

    if (this.cancelToken) {
      this.cancelToken.cancel();
      this.cancelToken = null;
    }

    this.cancelToken = {};
    u.$http.get(this.options.ajax.url, {
      params: data,
      cancelToken: this.cancelToken
    })
      .then(res => res.data)
      .then((response) => {
        if (response.success) {
          this.updateListElements(response.data);
        } else {
          console.error(response.message);
        }
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        this.afterHook(value, this.element, this.dependent);
        this.cancelToken = null;
      });
  }

  /**
   * Update list elements.
   *
   * @param {Array} items
   */
  updateListElements(items) {
    const textField = this.options.text_field;
    const valueField = this.options.value_field;
    this.element.innerHTML = '';

    if (this.options.first_option) {
      items.unshift({});
      items[0][textField] = this.options.first_option[textField];
      items[0][valueField] = this.options.first_option[valueField];
    }

    each(items, (item, i) => {
      if (Array.isArray(item)) {
        const group = u.html(`<optgroup label="${i}"></optgroup>`);

        each(item, (child, k) => {
          this.appendOptionTo({
            value: child[valueField],
            text: child[textField],
            attributes: child.attributes,
          }, group);
        })

        this.element.appendChild(group);

        return;
      }

      this.appendOptionTo({
        value: item[valueField],
        text: item[textField],
        attributes: item.attributes,
      }, this.element);
    });

    this.element.dispatchEvent(new CustomEvent('change'));
  }

  appendOptionTo(item, parent) {
    const value = item.value;
    const option = u.html('<option>' + item.text + '</option>');
    option.setAttribute('value', value);

    if (item.attributes) {
      each(item.attributes, (val, index) => {
        option.setAttribute(index, val);
      });
    }

    if (this.isSelected(value)) {
      option.setAttribute('selected', 'selected');
    }

    parent.appendChild(option);
  }

  isSelected(value) {
    let defaultValues = '';

    // Convert all types to array
    if (Array.isArray(this.options.default_value)) {
      defaultValues = this.options.default_value;
    } else if (this.options.default_value && typeof this.options.default_value === 'object') {
      defaultValues = Object.keys(this.options.default_value);
    } else {
      defaultValues = [this.options.default_value];
    }

    return defaultValues.indexOf(value) !== -1;
  }

  /**
   * Before hook.
   *
   * @param {string} value
   * @param {jQuery} element
   * @param {jQuery} dependent
   * @returns {*}
   */
  beforeHook(value, element, dependent) {
    const before = this.options.hooks.before_request;

    return before.call(this, value, element, dependent);
  }

  /**
   * After hook.
   *
   * @param {string} value
   * @param {jQuery} element
   * @param {jQuery} dependent
   * @returns {*}
   */
  afterHook(value, element, dependent) {
    const after = this.options.hooks.after_request;

    return after.call(this, value, element, dependent);
  }
}

u.directive('list-dependent', {
  mounted(el, binding) {
    const options = JSON.parse(binding.value);

    ListDependent.handle(el, options.dependent, options);
  },
  updated(el, binding) {
    const options = JSON.parse(binding.value);

    ListDependent.handle(el).setOptions(options);
  }
});
