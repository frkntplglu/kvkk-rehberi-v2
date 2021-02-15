import React,{useState} from 'react'

function Accordion(props) {
    const [isOpen, setOpen] = useState(props.open);

    return (
        <div className={`accordion-element ${isOpen ? 'show' : ''}`}>
            <div className="accordion-element-title" role="button" onClick={() => setOpen(!isOpen)}>{props.title}</div>
            <div className="accordion-element-content">
                {props.children}
            </div>
        </div>
    )
}

export default Accordion
