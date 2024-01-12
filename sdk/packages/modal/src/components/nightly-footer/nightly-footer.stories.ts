import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit/static-html.js'
import './nightly-footer'
import { NightlyFooter } from './nightly-footer'
import { FooterConfig } from 'src/utils/types'

const meta = {
  title: 'nightly-footer',
  parameters: {
    layout: 'centered'
  },
  render: (args) => {
    return html`<nightly-footer .footerConfigOverride=${args.footerConfigOverride} />`
  }
} satisfies Meta<NightlyFooter>

export default meta
type Story = StoryObj<NightlyFooter>

export const Default: Story = {
  name: 'Default',
  args: {
    footerConfigOverride: {
      termsOfServiceURL: '/terms'
    } as FooterConfig
  }
}
