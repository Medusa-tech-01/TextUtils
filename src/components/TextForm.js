import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [findWord, setFindWord] = useState("")
    const [replaceWord, setReplaceWord] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been converted to uppercase!", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been converted to lowercase!", "success")
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text has been cleared!", "success")
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied to clipboard!", "success")
    }
    const handleRemoveSpacesClick = () => {
        let newText = text.split(/[ ]+/ )
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed!", "success")
    }
    const handleReplaceClick = () => {
        let newText = text.replaceAll(findWord, replaceWord)
        setText(newText)
        props.showAlert("Text has been replaced!", "success")
    }

    const handleFindChange = (e) => {
        setFindWord(e.target.value)
    }
    const handleReplaceChange = (e) => {
        setReplaceWord(e.target.value)
    }
    
  return (
    <>
    <div className="container" style={{color:props.mode==='white'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{color:props.mode==='white'?'black':'white',backgroundColor:props.mode==='white'?'white':'#393941'}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode==='white'?'#0d6efd':props.mode}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode==='white'?'#0d6efd':props.mode}} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode==='white'?'#0d6efd':props.mode}} onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode==='white'?'#0d6efd':props.mode}} onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode==='white'?'#0d6efd':props.mode}} onClick={handleRemoveSpacesClick}>Remove Extra spaces</button>
        <button className='btn btn-primary mx-2' style={{backgroundColor:props.mode==='white'?'#0d6efd':props.mode}} data-bs-toggle="modal" data-bs-target="#replaceModal">Replace Text</button>
        <div className="modal fade" id="replaceModal" tabIndex="-1" aria-labelledby="replaceModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{color:props.mode==='white'?'black':'white', backgroundColor:props.mode==='white'?'white':'#042743'}}>
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="replaceModalLabel">Replace Text</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label htmlFor="word">Find the word to replace:</label>
                    <input className='mx-3' type="text" value={findWord} onChange={handleFindChange} style={{color:props.mode==='white'?'black':'white', backgroundColor:props.mode==='white'?'white':'#393941'}}/>
                    <label htmlFor="replaced" className='my-3'>Enter the replaced word:</label>
                    <input className='mx-3' type="text" value={replaceWord} onChange={handleReplaceChange} style={{color:props.mode==='white'?'black':'white', backgroundColor:props.mode==='white'?'white':'#393941'}}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleReplaceClick}>Replace Text</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='white'?'black':'white'}}>
        <h3>Text Summary</h3>
        <p><b>{text.trim()===""?0:text.trim().split(" ").length}</b> words and <b>{text.length}</b> characters.</p>
        <p>Number of sentences: <b>{text.split(".").length-1}</b></p>
        <p>Number of paragraphs: <b>{text===""?0:text.split("\n\n").length}</b></p>
        <p>It takes <b>{0.008 * text.split(" ").length}</b> minutes to read the above <b>{text.split(" ").length}</b> words.</p>
        <h3 className="my-2">Preview</h3>
        <p>{text.length>0?text:'Type something in the textbox above to preview it here'}</p>
    </div>
    </>
  )
}
