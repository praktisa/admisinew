import React from 'react'
import LabelArea from '../_Label/TextArea/LabelArea'


interface TextArea__Inter {
    label: string
    rows?: number
}

const TextArea = ({ label, rows = 0 }: TextArea__Inter) => {
    return (

        <LabelArea htmlFor='Area' label={label} >
            <textarea rows={rows} spellCheck="false" id={"Area"} placeholder={``} >

            </textarea>
        </LabelArea>
    )
}

export default TextArea
