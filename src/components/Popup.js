import React, {useState} from 'react';

export const Popup = ({id, className, body}) => {
    const [display, setDisplay] = useState("none");

    const handleWindow = () => {
        setDisplay("none")
    }
    const handleClose = () => {
        setDisplay("none");
    }
    const handleRules = () => {
        setDisplay("block");
    }
    return (
        <div>
            <div  onClick={handleRules} className={className} >{id}</div>
            <div id={id} onClick={handleWindow} style={{display}} className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    {body}
                </div>
            </div>
        </div>
    );
}
export default Popup;
