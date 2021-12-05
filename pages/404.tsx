import {Layout} from "../components/layout/Layout";
import Link from 'next/link'

export default function PageNotFound() {
    return (
        <Layout title='Page not found'>
            <div style={{marginTop: '100px',textAlign: 'center'}}>
                <h1>404</h1>
                <h2>Sorry, there is nothing here..</h2>
                <Link href='/'>Go home</Link>
            </div>
        </Layout>
    )
}