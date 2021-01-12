import Image from 'next/image';
import VerbisButton from './VerbisButton';



function MainBanner() {
    return (
        <div className="slider">
            <VerbisButton />
            <div className="slider-bg">
                <Image src="/images/rasyotek.jpg" alt="KVKK Nedir" width={1900}  height={640} />
                <img src="" alt="Rasyotek A.Ş" />
            </div>
            <div className="slider-mask">
                <Image src="/images/kvkk-icon.png" alt="Kvkk Icon" width={410}  height={260} />
                <h1>Kişisel Verilerin Korunması</h1>
                <div className="slider-colored-text">hakkında detaylı bilgi edinin</div>
            </div>
        </div>
    )
}

export default MainBanner
