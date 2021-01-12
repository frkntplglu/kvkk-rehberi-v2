import Link from 'next/link'


function VerbisButton() {
    return (
        <div className="verbis-button">
            <Link href="/verbis"><a>VERBİS'e <span>son kayıt tarihleri</span></a></Link>
        </div>
    )
}

export default VerbisButton
