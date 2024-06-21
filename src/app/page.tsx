import { CodeBlock } from "@/components/code";


export default async function Home() {
  const code = `current_user
  |> Order.get_orders
  |> Transaction.make_transactions
  |> Payment.make_payments(true)
`
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <CodeBlock code={code} lang="elixir" />
    </main >
  );
}
