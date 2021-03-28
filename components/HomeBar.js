import React from 'react'
import Image from 'next/image';

function HomeBar({title, color, animationContent, animationImage, imageURL, align, children}) {
    const colorClass = color ? `home-section-${color}` : '';
    return (
        <div className={`home-section ${colorClass} ${align}`}>
            <div className="container">
            <div className="home-section-text aos-init aos-animate" data-aos={animationContent}>
                <h2>{title}</h2>
                {children}
            </div>
            <div className="home-section-image aos-init aos-animate"  data-aos={animationImage}>
                <Image src={imageURL} alt={title} width={420}  height={315} />
            </div>
            </div>
        </div>
    )
}

export default HomeBar
