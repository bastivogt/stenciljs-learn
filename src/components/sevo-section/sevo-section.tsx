import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sevo-section',
  shadow: true,
  styleUrl: './sevo-section.css',
})
export class SevoSection {
  @Prop({ reflect: true }) imgSrc: string;
  @Prop({ reflect: true }) overlayColor: string;
  @Prop({ reflect: true }) backgroundColor: string;
  @Prop({ reflect: true }) backgroundFixed: boolean;
  @Prop({ reflect: true }) minHeight: string;

  render() {
    return (
      <section style={{ backgroundColor: this.backgroundColor ? this.backgroundColor : 'transparent' }}>
        <div
          class="background"
          style={{
            backgroundImage: this.imgSrc ? `url(${this.imgSrc})` : 'none',
            backgroundAttachment: this.backgroundFixed ? 'fixed' : 'scroll',
          }}
        >
          <div class="overlay" style={{ backgroundColor: this.overlayColor ? this.overlayColor : 'transparent' }}>
            <div class="inner" style={{ minHeight: this.minHeight ? this.minHeight : 'inherit' }}>
              <slot></slot>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
