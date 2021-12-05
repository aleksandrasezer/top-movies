import {LayoutNav} from "./LayoutNav";
import Head from "next/head";
import s from '../../styles/Layout.module.css'
import {Footer} from "./Footer";

export const Layout = ({title, description, keywords, children}: LayoutPropsType) => {
    return(
        <div className={s.layout}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>
            <LayoutNav />
            <div className={s.content}>{children}</div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Top world movies',
    description: 'Find out latest amd hottest movies',
    keywords: 'movie, comedy, drama, film, watch, movies',
    }

//types
type LayoutPropsType = {
    title?: string
    description?: string
    keywords?: string
    children: any
}