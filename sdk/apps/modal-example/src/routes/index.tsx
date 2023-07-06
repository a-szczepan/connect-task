import { Title, A } from 'solid-start'

export default function Home() {
  return (
    <main>
      <Title>Nightly Connect Examples</Title>

      <A href="/solana">
        <button>Solana</button>
      </A>
      <A href="/sui">
        <button>Sui</button>
      </A>
    </main>
  )
}