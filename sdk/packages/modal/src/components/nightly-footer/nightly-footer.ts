import { customElement, property } from 'lit/decorators.js'
import { tailwindElement } from '../../shared/tailwind.element'
import style from './nightly-footer.css'
import { LitElement, html } from 'lit'


@customElement('nightly-footer')
export class NightlyFooter extends LitElement {
  static styles = tailwindElement(style)

  @property({ type: String })
  termsOfServiceURL = '/'

  @property({ type: String })
  pivacyPolicyURL = '/'

  @property({ type: String })
  linkTarget = "_blank"

  render() {
    return html`
      <div class="nc_footerWrapper">
        <p class="nc_footerTerms">
          By connecting, you agree to Common's
          <a class="nc_footerLink" href=${this.termsOfServiceURL} target=${this.linkTarget}
            >Terms of Service</a
          >
          and to its
          <a class="nc_footerLink" href=${this.pivacyPolicyURL} target=${this.linkTarget}
            >Privacy Policy</a
          >.
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
