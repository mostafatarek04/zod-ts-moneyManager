import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex px-8 items-center h-[80px] bg-gray-900 text-gray-50">
      <div className="me-auto ">
        <Link className="text-2xl font-semibold" href="/">
          Money Manager
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4 items-center ">
          <li>
            <Link href="/all-transactions">Transactions</Link>
          </li>
          <li>
            <Link href="/add-new-transaction">Add Transaction</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
          <li>
            <Link href="/"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
