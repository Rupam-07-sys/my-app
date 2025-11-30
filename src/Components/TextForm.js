import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Button Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success ");
      
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success ");

    }

    const removeExtraSpaces =() =>{
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
    }

    const handleAlternating = ()=>{
        const newText = text
        .split('')
        .map((char,index)=>{
                            if(index %2 === 0)
                            {
                                return char.toUpperCase();
                            }
                            else{
                                    return char.toLowerCase();
                                }
                    }).join('');
        setText(newText);
        props.showAlert("Converted to Alternating","success ");


    }
//     const handleAlternating = () => {
//   const newText = text
//     .split('')
//     .map((char, index) =>
//       index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
//     )
//     .join('');

//   setText(newText);
// };


    const handleClearChange = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success ");

    }


    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }


    const[text,setText] = useState('')

  return (
        <> 
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control"  style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color:props.mode==='dark' ? 'white' : '#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={handleAlternating}>Convert To Alternating Text</button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleClearChange}>Clear Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read the Text</p>
                <h2>preview</h2>
                <p>{text}</p>

            </div>
        </>
  )
}
