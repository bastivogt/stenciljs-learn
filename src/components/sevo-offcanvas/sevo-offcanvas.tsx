import { Component, h, Method, Prop, Event, EventEmitter } from '@stencil/core';

interface EventDetail {
  opened: boolean;
}

@Component({
  tag: 'sevo-offcanvas',
  shadow: true,
  styleUrl: './sevo-offcanvas.css',
})
export class SevoOffcanvas {
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  @Prop({ reflect: true, mutable: true }) left: boolean;
  @Prop({ reflect: true, mutable: true }) right: boolean;
  @Prop({ reflect: true, mutable: true }) canvasClick: boolean; // canvas-click

  @Event() offcanvasOpened: EventEmitter<EventDetail>;
  @Event() offcanvasClosed: EventEmitter<EventDetail>;

  @Method()
  async open() {
    this.opened = true;
    this.offcanvasOpened.emit({ opened: true });
  }

  @Method()
  async close() {
    this.opened = false;
    this.offcanvasClosed.emit({ opened: false });
  }

  @Method()
  async setDirection(right: boolean) {
    if (right) {
      this.left = false;
      this.right = true;
    } else {
      this.right = false;
      this.left = true;
    }
  }

  onBackdropClick() {
    this.close();
  }

  onCanvasClick() {
    if (this.canvasClick) {
      this.close();
    }
  }

  render() {
    return [
      <div id="backdrop" onClick={this.onBackdropClick.bind(this)}></div>,

      <aside id="offcanvas" onClick={this.onCanvasClick.bind(this)}>
        <slot></slot>
      </aside>,
    ];
  }
}
