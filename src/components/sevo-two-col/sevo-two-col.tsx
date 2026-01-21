import { Component, h } from '@stencil/core';

@Component({
  tag: 'sevo-two-col',
  shadow: true,
  styleUrl: './sevo-two-col.css',
})
export class SevoTwoCol {
  render() {
    return (
      <div class="container">
        <div class="col">
          <slot name="col-one"></slot>
        </div>
        <div class="col">
          <slot name="col-two"></slot>
        </div>
      </div>
    );
  }
}
