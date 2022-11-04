import Link from "next/link"

async function ambilPostingan() {
    const products = await fetch(`https://dummyjson.com/products`)
    return products.json()
}

export default async function Layout({ children }) {
    const { products } = await ambilPostingan()
    // console.log(products)
    return (
        <div>
            {
                products.map((product) => (
                    <>
                        <div key={product.id}>
                            <Link href={`/postingan/${product.id}`}>No. {product.id} - {product.title}</Link>
                        </div>
                    </>
                ))

            }
            <hr />
            <div>
                {children}
            </div>
        </div>
    )
}