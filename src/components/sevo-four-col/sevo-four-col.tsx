import { Component, h } from '@stencil/core';

@Component({
  tag: 'sevo-four-col',
  shadow: true,
  styleUrl: './sevo-four-col.css',
})
export class SevoFourCol {
  render() {
    return (
      <div class="container">
        <div class="col">
          <slot name="col-one"></slot>
        </div>
        <div class="col">
          <slot name="col-two"></slot>
        </div>
        <div class="col">
          <slot name="col-three"></slot>
        </div>
        <div class="col">
          <slot name="col-four"></slot>
        </div>
      </div>
    );
  }
}
