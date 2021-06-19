/**
 * Part of Unicorn project.
 *
 * @copyright  Copyright (C) 2016 LYRASOFT. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

import { defData } from '../utilities.js';

/**
 * UnicornGrid
 */
export default class UnicornGrid {
  static get is() { return 'grid'; }

  static install(app, options = {}) {
    app.grid = (ele, options = {}) => {
      const selector = typeof ele === 'string' ? ele : null;
      ele = app.selectOne(ele);

      return defData(
        ele,
        'grid.plugin',
        () => new UnicornGridElement(selector, ele, options, app)
      );
    };
  }
}

class UnicornGridElement {
  ordering = '';

  static get defaultOptions() {
    return {
      //
    }
  }

  constructor(selector, element, options, app) {
    this.element = element;
    this.options = Object.assign({}, this.constructor.defaultOptions, options);
    this.app = app;
    this.form = app.form(selector || element);

    if (!this.form) {
      throw new Error('UnicornGrid is dependent on UnicornForm');
    }
  }

  initComponent(store = 'grid', custom = {}) {
    this.ordering = this.element.dataset.ordering;

    if (!this.ordering.toLowerCase().endsWith(' asc')
      && !this.ordering.toLowerCase().endsWith(' desc')) {
      this.ordering += ' ASC';
    }

    return this.app.loadAlpine(() => {
      Alpine.store(store, this.useState(custom));
    });
  }

  useState(custom = {}) {
    const state = {
      form: this.form.useState(custom)
    };
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .map(item => state[item] = this[item].bind(this));

    return Object.assign(
      state,
      custom
    );
  }

  getElement() {
    return this.element;
  }

  sendFilter($event) {
    if ($event) {
      $event.preventDefault();
    }

    this.form.put();
  }

  clearFilters(element) {
    element.querySelectorAll('input, textarea, select').forEach((ele) => {
      ele.value = '';
    });

    this.form.put();
  }

  toggleFilters(open, filterForm) {
    if (open) {
      this.app.$ui.slideDown(filterForm);
    } else {
      this.app.$ui.slideUp(filterForm);
    }
  }

  sort($el) {
    const dir = this.getDirection($el);

    const field = $el.dataset.field;
    let asc = $el.dataset.asc;
    let desc = $el.dataset.desc;

    if (field) {
      asc = field + ' ASC';
      desc = field + ' DESC';
    }

    if (dir === 'ASC') {
      return this.sortBy(desc);
    }

    return this.sortBy(asc);
  }

  /**
   * Sort two items.
   *
   * @param {string} ordering
   *
   * @returns {boolean}
   */
  sortBy(ordering) {
    let orderingInput = this.element.querySelector('input[name=list_ordering]');

    if (!orderingInput) {
      orderingInput = this.app.h('input', { name: 'list_ordering', type: 'hidden', value: '' });

      this.element.appendChild(orderingInput);
    }

    orderingInput.value = ordering;

    return this.form.put();
  }

  isSortActive($el) {
    return this.getDirection($el) != null;
  }

  getDirection($el) {
    const field = $el.dataset.field;
    let asc = $el.dataset.asc;
    let desc = $el.dataset.desc;

    if (field) {
      asc = field + ' ASC';
      desc = field + ' DESC';
    }

    if (this.orderingEquals(asc, this.ordering)) {
      return 'ASC';
    } else if (this.orderingEquals(desc, this.ordering)) {
      return 'DESC';
    }

    return null;
  }

  orderingEquals(a, b) {
    a = a.replace(/\s+/g, ' ').trim().toLowerCase();
    b = b.replace(/\s+/g, ' ').trim().toLowerCase();

    return a === b;
  }

  /**
   * Check a row's checkbox.
   *
   * @param {number}  row
   * @param {boolean} value
   */
  checkRow(row, value = true) {
    const ch = this.getCheckboxByRow(row);

    if (!ch) {
      throw new Error('Checkbox of row: ' + row + ' not found.');
    }

    ch.checked = value;
  }

  getCheckboxByRow(row) {
    return this.form.element.querySelector(`input[data-role=grid-checkbox][data-row-number="${row}"]`);
  }

  /**
   * Update a row.
   *
   * @param  {number} row
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  updateRow(row, url, queries = {}) {
    const ch = this.getCheckboxByRow(row);

    return this.updateItem(ch.value, url, queries);
  }

  /**
   * Update a row.
   *
   * @param  {string|number} id
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  updateItem(id, url, queries) {
    this.toggleAll(false);

    this.disableAllCheckboxes();

    this.form.injectInput('id[]', id);

    return this.form.patch(url, queries);
  }

  /**
   * Update a row with batch task.
   *
   * @param  {string} task
   * @param  {string} id
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  doTask(task, id, url, queries = {}) {
    queries.task = task;

    return this.updateItem(id, url, queries);
  }

  /**
   * Batch update items.
   *
   * @param  {string} task
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  batch(task, url, queries = {}) {
    queries.task = task;

    return this.form.patch(url, queries);
  }

  /**
   * Copy a row.
   *
   * @param  {string|number} id
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  copyItem(id, url, queries = {}) {
    this.toggleAll(false);

    this.disableAllCheckboxes();

    this.form.injectInput('id[]', id);

    return this.form.post(url, queries);
  }

  /**
   * Copy a row.
   *
   * @param  {number} row
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  copyRow(row, url, queries = {}) {
    const ch = this.getCheckboxByRow(row);

    return this.copyItem(ch.value, url, queries);
  }

  /**
   * Delete checked items.
   *
   * @param  {string} message
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  deleteList(message, url, queries) {
    try {
      this.validateChecked();
    } catch (e) {
      return false;
    }

    message = message == null ? this.app.__('unicorn.message.delete.confirm') : message;

    if (message !== false) {
      this.app.confirm(message).then(isConfirm => {
        if (isConfirm) {
          this.form.delete(url, queries);
        }
      });
    } else {
      this.form.delete(url, queries);
    }

    return true;
  }

  /**
   * Delete an item.
   *
   * @param  {number} row
   * @param  {string} msg
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  deleteRow(row, msg = null, url = null, queries = {}) {
    const  ch = this.getCheckboxByRow(row);

    return this.deleteItem(ch.value, msg, url, queries);
  }

  /**
   * Delete an item.
   *
   * @param  {number|string} id
   * @param  {string} msg
   * @param  {string} url
   * @param  {Object} queries
   *
   * @returns {boolean}
   */
  deleteItem(id, msg = null, url = null, queries = {}) {
    msg = msg || this.app.__('unicorn.message.delete.confirm');

    return this.app.confirm(msg)
      .then(isConfirm => {
        if (isConfirm) {
          // this.toggleAll(false);
          // this.checkRow(row);
          queries.id = id;

          this.form.delete(url, queries);
        }
      });
  }

  /**
   * Toggle all checkboxes.
   *
   * @param  {boolean}          value     Checked or unchecked.
   */
  toggleAll(value) {
    this.app.selectAll(
      this.element.querySelectorAll('input[data-role=grid-checkbox][type=checkbox]')
    )
      .map((input) => {
        input.checked = value;
      });

    return this;
  }

  disableAllCheckboxes() {
    this.app.selectAll(
      this.element.querySelectorAll('input[data-role=grid-checkbox][type=checkbox]'),
      (input) => {
        input.disabled = true;
      }
    );
  }

  /**
   * Count checked checkboxes.
   *
   * @returns {int}
   */
  countChecked() {
    return this.getChecked().length;
  }

  /**
   * Get Checked boxes.
   *
   * @returns {Element[]}
   */
  getChecked() {
    return this.app.selectAll(
      this.element.querySelectorAll('input[data-role=grid-checkbox][type=checkbox]:checked')
    );
  }

  /**
   * Validate there has one or more checked boxes.
   *
   * @param   {string}    msg
   * @param   {Function}  callback
   *
   * @returns {UnicornGridElement}
   */
  validateChecked(msg = null, callback = null) {
    msg = msg || this.app.__('unicorn.message.grid.checked');

    if (!this.hasChecked()) {
      alert(msg);

      throw new Error(msg);
    }

    if (callback) {
      callback(this);
    }

    return this;
  }

  /**
   * @return {boolean}
   */
  hasChecked() {
    return this.countChecked() > 0;
  }

  /**
   * Reorder all.
   *
   * @param   {string}  url
   * @param   {Object}  queries
   *
   * @returns {boolean}
   */
  reorderAll(url, queries) {
    return this.batch('reorder', url, queries);
  }

  /**
   * Reorder items.
   *
   * @param  {int}     id
   * @param  {int}     delta
   * @param  {string}  url
   * @param  {Object}  queries
   *
   * @returns {boolean}
   */
  moveItem(id, delta, url, queries) {
    queries = queries || {};
    queries.delta = delta;

    return this.doTask('move', id, url, queries);
  }

  moveUp(id, url, queries) {
    return this.moveRow(id, -1, url, queries);
  }

  moveDown(id, url, queries) {
    return this.moveRow(id, 1, url, queries);
  }

  getId(suffix = '') {
    return this.form.element.id + suffix;
  }
}
