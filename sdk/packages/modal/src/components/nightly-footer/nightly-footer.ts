import { customElement, property } from 'lit/decorators.js'
import { tailwindElement } from '../../shared/tailwind.element'
import style from './nightly-footer.css'
import { LitElement, html } from 'lit'
import { FooterConfig } from 'src/utils/types'

@customElement('nightly-footer')
export class NightlyFooter extends LitElement {
  static styles = tailwindElement(style)

  @property({ type: Object })
  footerConfigOverride: Partial<FooterConfig> | undefined = {}

  footerConfig: FooterConfig = {
    termsOfServiceURL: '/',
    privacyPolicyURL: '/',
    linkTarget: '_self'
  }

  render() {
    return html`
      <div class="nc_footerWrapper">
        <p class="nc_footerTerms">
          By connecting, you agree to Common's
          <a
            class="nc_footerLink"
            href=${this.footerConfigOverride?.termsOfServiceURL ??
            this.footerConfig.termsOfServiceURL}
            target=${this.footerConfigOverride?.linkTarget ?? this.footerConfig.linkTarget}
            >Terms of Service</a
          >
          and to its
          <a
            class="nc_footerLink"
            href=${this.footerConfigOverride?.privacyPolicyURL ??
            this.footerConfig.privacyPolicyURL}
            target=${this.footerConfigOverride?.linkTarget ?? this.footerConfig.linkTarget}
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
