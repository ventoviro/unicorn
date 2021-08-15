/**
 * Part of starter project.
 *
 * @copyright  Copyright (C) 2021 __ORGANIZATION__.
 * @license    __LICENSE__
 */

export class UIBootstrap5 {
  static install(app) {
    app.$ui.bootstrap = new this(app.$ui);
    app.$ui.theme = new this(app.$ui);
  }

  constructor(ui) {
    this.ui = ui;
    this.app = ui.app;
  }

  renderMessage(messages, type = 'info') {
    if (!Array.isArray(messages)) {
      messages = [ messages ];
    }

    let text = '';

    messages.forEach((msg) => {
      text += `<div class="">${msg}</div>`;
    });

    const html = this.app.html(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  ${text}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`);

    const container = this.app.selectOne('.c-messages-container');

    if (container) {
      container.appendChild(html);
    }
  }

  clearMessages() {
    const container = this.app.selectOne('.c-messages-container');

    if (container) {
      container.innerHTML = '';
    }
  }

  /**
   * @see https://getbootstrap.com/docs/5.0/components/tooltips/#example-enable-tooltips-everywhere
   *
   * @param selector
   * @param config
   */
  tooltip(selector = '[data-bs-toggle="tooltip"]', config = {}) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll(selector))
    return tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, config);
    });
  }

  modal(selector, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.modal',
      (element) => new bootstrap.Modal(element, config)
    );
  }

  collapse(seletor, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.collapse',
      (element) => new bootstrap.Collapse(element, config)
    );
  }

  offcanvas(seletor, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.collapse',
      (element) => new bootstrap.Offcanvas(element, config)
    );
  }

  popover(seletor, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.collapse',
      (element) => new bootstrap.Popover(element, config)
    );
  }

  scrollspy(seletor, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.collapse',
      (element) => new bootstrap.ScrollSpy(element, config)
    );
  }

  tab(selector, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.collapse',
      (element) => new bootstrap.Tab(element, config)
    );
  }

  toast(seletor, config = {}) {
    return this.app.getBoundedInstance(
      selector,
      'bs.collapse',
      (element) => new bootstrap.Toast(element, config)
    );
  }

  keepTab(selector = null, options = {}) {
    return this.app.import('@unicorn/bootstrap/keep-tab.js')
      .then((m) => {
        if (selector) {
          return new m.LoadTab(selector, options);
        }

        return m;
      });
  }

  buttonRadio(selector = null, options = {}) {
    return this.app.import('@unicorn/bootstrap/button-radio.js')
      .then((m) => {
        if (selector) {
          return new m.ButtonRadio(selector, options);
        }

        return m;
      });
  }
}
