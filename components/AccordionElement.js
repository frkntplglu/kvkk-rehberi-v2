import React,{useState} from 'react'

function AccordionElement(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="accordion-element">
            <div className="accordion-element-title" role="button" onClick={() => setOpen(!isOpen)}>{props.title}</div>
            {
                isOpen ? 
                <div className="accordion-element-content">
                    {props.children}
                </div>
                : null
            }
        </div>
    )
}

export default AccordionElement
