import { LitElement, html } from 'lit'
import { tailwindElement } from '../../shared/tailwind.element'
import { customElement, property } from 'lit/decorators.js'
import { svgToBase64 } from '../../utils/images'
import { generateQrCodeXml } from '@nightlylabs/qr-code'
import vector from '../../static/svg/backButton.svg'
import style from './nightly-mobile-qr.css'

@customElement('nightly-mobile-qr')
export class NightlyMobileQr extends LitElement {
  static styles = tailwindElement(style, `
  .nc_mobileQrBackButton {
    background-image: url('${vector}');
  }
  `)

  @property({ type: String })
  sessionId = ''

  @property({ type: String })
  relay = ''

  @property({ type: String })
  chainName = ''

  @property({ type: Function })
  showAllWallets!: () => void

  render() {
    return html`
      <div class="nc_mobileQrWrapper">
        <div class="nc_mobileQrTopBar">
          <button class="nc_mobileQrBackButton" @click=${this.showAllWallets}>
          </button>
          <span class="nc_mobileQrTitle">
            QR Code
          </span>
          <div class="nc_mobileQrTopJustify"></div>
        </div>
        <img
          class="nc_mobileQrCode"
          src=${svgToBase64(
            generateQrCodeXml(
              'nc:' +
                this.sessionId +
                '?network=' +
                this.chainName.replace(/\s/g, '') +
                '&relay=' +
                this.relay,
              {
                width: 500,
                height: 500,
                margin: 10
              }
            )
          )}
        />
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nightly-mobile-qr': NightlyMobileQr
  }
}
