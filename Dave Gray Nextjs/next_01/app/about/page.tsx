import Link from "next/link"

const about = () => {
  // throw new Error("Sunday aaa pencho!");
  return (
    <>
    <h1>About</h1>
    <Link href="/" className="text-yellow-500">Link to home page</Link>
    </>
  )
}

export default about