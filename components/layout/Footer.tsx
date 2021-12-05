import Image from 'next/image'
import ghIcon from '../../assets/images/github-logo.png'

export const Footer = () => {
    return (
            <div style={{marginTop: '100px',marginBottom: '30px',textAlign: 'center'}}>
                <a href='https://github.com/aleksandrasezer' target='_blank'>
                    <Image src={ghIcon} alt='gh-logo' height='20px' width='20px'/>
                    Aleksandra Sezer</a>
            </div>
    )
}