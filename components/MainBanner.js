import VerbisButton from './VerbisButton'


function MainBanner() {
    return (
        <div className="slider">
            <VerbisButton />
            <div className="slider-bg">
                <img src="images/rasyotek.jpg" alt="Rasyotek A.Ş" />
            </div>
            <div className="slider-mask">
                <img src="images/kvkk-icon.png" alt="Kvkk Icon" />
                <h1>Kişisel Verilerin Korunması</h1>
                <div className="slider-colored-text">hakkında detaylı bilgi edinin</div>
            </div>
        </div>
    )
}

export default MainBanner
