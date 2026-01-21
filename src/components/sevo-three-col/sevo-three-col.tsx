import { Component, h } from '@stencil/core';

@Component({
  tag: 'sevo-three-col',
  shadow: true,
  styleUrl: './sevo-three-col.css',
})
export class SevoThreeCol {
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
      </div>
    );
  }
}
