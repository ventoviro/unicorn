import type { Unicorn } from '../../index';
import type { UnicornFormElement } from './form';
import { defData } from '../utilities';

/**
 * UnicornGrid
 */
export default class UnicornGrid {
  static get is() { return 'grid'; }

  static install(app: Unicorn, options = {}) {
    app.grid = (ele: string | HTMLElement, options: Record<string, any> | undefined = {}) => {
      const selector = typeof ele === 'string' ? ele : '';
      const element = app.selectOne(ele);

      if (!element) {
        throw new Error('Element is empty');
      }

      return defData(
        element,
        'grid.plugin',
        () => new UnicornGridElement(app, selector, element, options)
      );
    };
  }
}

const defaultOptions: Record<string, any> = {};

export class UnicornGridElement {
  app: Unicorn;
  element: HTMLElement;
  options: Record<string, any>;
  form: UnicornFormElement;
  ordering = '';
  state = {};

  static get defaultOptions() {
    return {
      //
    }
  }

  constructor(app: Unicorn, selector: string, element: HTMLElement, options: Record<string, any> = {}) {
    this.element = element;
    this.options = Object.assign({}, defaultOptions, options);
    this.app = app;
    this.form = app.form(selector || element);

    if (!this.form) {
      throw new Error('UnicornGrid is dependent on UnicornForm');
    }

    this.bindEvents();
  }

  bindEvents() {
    this.app.selectAll('input[data-role=grid-checkbox]', (ch) => {
      ch.addEventListener('click', () => {
        ch.dispatchEvent(new CustomEvent('change'));
      });
      ch.addEventListener('change', () => {
        const event = new CustomEvent('unicorn:checked', {
          detail: { grid: this }
        });

        this.form.element?.dispatchEvent(event);
      });
    });
  }

  initComponent(store = 'grid', custom = {}) {
    this.ordering = this.element?.dataset?.ordering || '';

    if (this.ordering) {
      if (!this.ordering.toLowerCase().endsWith(' asc')
        && !this.ordering.toLowerCase().endsWith(' desc')) {
        this.ordering += ' ASC';
      }
    }

    return this.app.loadAlpine(() => {
      Alpine.store(store, this.useState(custom));
    });
  }

  useState(this: any, custom: Record<string, any> = {}) {
    const state: Partial<Record<string, any>> = {
      form: this.form.useState(custom),
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

  sendFilter($event: Event | undefined = undefined, method = null) {
    if ($event) {
      $event.preventDefault();
    }

    this.form.submit(null, null, method);
  }

  clearFilters(element: HTMLElement, method?: Nullable<string>) {
    element.querySelectorAll('input, textarea, select').forEach((ele) => {
      (ele as HTMLInputElement).value = '';
    });

    this.form.submit(null, null, method);
  }

  toggleFilters(open: boolean, filterForm: HTMLElement) {
    if (open) {
      this.app.$ui.slideDown(filterForm);
    } else {
      this.app.$ui.slideUp(filterForm);
    }
  }

  sort($el: HTMLElement): boolean {
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
   */
  sortBy(ordering: Nullable<string>): boolean {
    if (!ordering) {
      return false;
    }

    let orderingInput = this.element.querySelector<HTMLInputElement>('input[name=list_ordering]');

    if (!orderingInput) {
      orderingInput = this.app.h('input', { name: 'list_ordering', type: 'hidden', value: '' });

      this.element.appendChild(orderingInput);
    }

    orderingInput.value = ordering;

    return this.form.put();
  }

  isSortActive($el: HTMLElement): boolean {
    return this.getDirection($el) != null;
  }

  getDirection($el: HTMLElement): "ASC" | "DESC" | null {
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

  orderingEquals(a: Nullable<string>, b: Nullable<string>) {
    a = a || '';
    b = b || '';

    a = a.replace(/\s+/g, ' ').trim().toLowerCase();
    b = b.replace(/\s+/g, ' ').trim().toLowerCase();

    return a === b;
  }

  /**
   * Check a row's checkbox.
   */
  checkRow(row: number, value = true) {
    const ch = this.getCheckboxByRow(row);

    if (!ch) {
      throw new Error('Checkbox of row: ' + row + ' not found.');
    }

    ch.checked = value;
    ch.dispatchEvent(new Event('input'));
    ch.dispatchEvent(new Event('change'));
  }

  getCheckboxByRow(row: number): Nullable<HTMLInputElement> {
    return this.form.element?.querySelector<HTMLInputElement>(`input[data-role=grid-checkbox][data-row-number="${row}"]`);
  }

  /**
   * Update a row.
   */
  updateRow(row: number, url?: Nullable<string>, data?: Nullable<Record<string, any>>) {
    const ch = this.getCheckboxByRow(row);

    if (!ch) {
      return false;
    }

    return this.updateItem(ch.value, url, data);
  }

  /**
   * Update an item by id.
   */
  updateItem(id: string | number , url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    this.toggleAll(false);

    this.disableAllCheckboxes();

    this.form.injectInput('id[]', id);

    return this.form.patch(url, data);
  }

  /**
   * Update a item with batch task.
   */
  updateItemByTask(task: string, id: string | number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    data = data || {};
    data.task = task;

    return this.updateItem(id, url, data);
  }

  /**
   * Update a row with batch task.
   */
  updateRowByTask(task: string, row: number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    const ch = this.getCheckboxByRow(row);

    if (!ch) {
      return false;
    }

    return this.updateItemByTask(task, ch.value, url, data);
  }

  /**
   * @deprecated  Use updateItemByTask() instead.
   */
  doTask(task: string, id: number | string, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    return this.updateItemByTask(task, id, url, data);
  }

  /**
   * Batch update items.
   */
  updateByTask(task: string, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    data = data || {};
    data.task = task;

    return this.form.patch(url, data);
  }

  batch(task: string, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    return this.updateByTask(task, url, data);
  }

  /**
   * Copy a row.
   */
  copyItem(id: string | number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    this.toggleAll(false);

    this.disableAllCheckboxes();

    this.form.injectInput('id[]', id);

    return this.form.post(url, data);
  }

  /**
   * Copy a row.
   */
  copyRow(row: number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    const ch = this.getCheckboxByRow(row);

    if (!ch) {
      return false;
    }

    return this.copyItem(ch.value, url, data);
  }

  /**
   * Delete checked items.
   */
  deleteList(message?: Nullable<string> | false, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    if (!this.validateChecked()) {
      return false;
    }

    message = message == null ? this.app.__('unicorn.message.delete.confirm') : message;

    if (message !== false) {
      this.app.confirm(message).then(isConfirm => {
        if (isConfirm) {
          this.form.delete(url, data);
        }
      });
    } else {
      this.form.delete(url, data);
    }

    return true;
  }

  /**
   * Delete an item by row.
   */
  async deleteRow(row: number, msg?: Nullable<string>, url?: Nullable<string>, data?: Nullable<Record<string, any>>): Promise<boolean> {
    const  ch = this.getCheckboxByRow(row);

    if (!ch) {
      return false;
    }
    
    return this.deleteItem(ch.value, msg, url, data);
  }

  /**
   * Delete an item.
   */
  async deleteItem(id: string, msg?: Nullable<string>, url?: Nullable<string>, data?: Nullable<Record<string, any>>): Promise<boolean> {
    msg = msg || this.app.__('unicorn.message.delete.confirm');

    return this.app.confirm(msg)
      .then((isConfirm) => {
        if (isConfirm) {
          // this.toggleAll(false);
          // this.checkRow(row);
          data = data || {};

          data.id = id;

          this.form.delete(url, data);
        }
        
        return isConfirm;
      });
  }

  /**
   * Toggle all checkboxes.
   */
  toggleAll(value: boolean) {
    this.app.selectAll(
      this.element.querySelectorAll<HTMLInputElement>('input[data-role=grid-checkbox][type=checkbox]')
    )
      .map((input) => {
        input.checked = value;

        input.dispatchEvent(new CustomEvent('input'));
        input.dispatchEvent(new CustomEvent('change'));
      });

    return this;
  }

  disableAllCheckboxes() {
    this.app.selectAll(
      this.element.querySelectorAll<HTMLInputElement>('input[data-role=grid-checkbox][type=checkbox]'),
      (input) => {
        input.disabled = true;
      }
    );
  }

  /**
   * Count checked checkboxes.
   */
  countChecked(): number {
    return this.getChecked().length;
  }

  /**
   * Get Checked boxes.
   */
  getChecked(): HTMLInputElement[] {
    return this.app.selectAll(
      this.element.querySelectorAll<HTMLInputElement>('input[data-role=grid-checkbox][type=checkbox]:checked')
    );
  }
  
  getCheckedValues(): string[] {
    return this.getChecked().map(input => input.value);
  }

  /**
   * Validate there has one or more checked boxes.
   */
  validateChecked(event?: Event, callback?: Function, msg?: string): this {
    msg = msg || this.app.__('unicorn.message.grid.checked');

    if (!this.hasChecked()) {
      if (msg !== '') {
        this.app.alert(msg);
      }

      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }

      return this;
    }

    if (callback) {
      callback(this);
    }

    return this;
  }
  
  hasChecked(): boolean {
    return this.countChecked() > 0;
  }

  /**
   * Reorder all.
   */
  reorderAll(url?: Nullable<string>, data?: Nullable<Record<string, any>>) {
    return this.batch('reorder', url, data);
  }

  /**
   * Reorder items.
   */
  moveItem(id: number | string, delta: number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    data = data || {};
    data.delta = delta;

    return this.updateItemByTask('move', id, url, data);
  }
  
  moveUp(id: string | number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    return this.moveItem(id, -1, url, data);
  }
  moveDown(id: string | number, url?: Nullable<string>, data?: Nullable<Record<string, any>>): boolean {
    return this.moveItem(id, 1, url, data);
  }

  getId(suffix = '') {
    return this.form.element?.id + suffix;
  }
}
