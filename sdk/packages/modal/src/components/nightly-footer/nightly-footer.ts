import { customElement } from 'lit/decorators.js'
import { tailwindElement } from '../../shared/tailwind.element'
import style from './nightly-footer.css'
import { LitElement, html } from 'lit'

@customElement('nightly-footer')
export class NightlyFooter extends LitElement {
  static styles = tailwindElement(style)

  render() {
    return html`
      <div class="nc_footerWrapper">
        <p class="nc_footerTerms"> 
            By connecting, you agree to Common's 
            <a class="nc_footerLink" href="/">Terms of Service</a>
            and to its 
            <a class="nc_footerLink" href="/">Privacy Policy</a>.
        </p>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nightly-footer': NightlyFooter
  }
}
