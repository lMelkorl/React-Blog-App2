
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const config = {
    buttons: ["bold",
        "italic",
        'paragraph',
        'font',
        'fontsize',
        "underline",
        'hr',
        'image',
        "link",
        'table',
        'outdent', 'indent',  '|',
        'align', 'undo', 'redo', '|',
        'fullsize'],
    toolbarAdaptive: false,
    // enableDragAndDropFileToEditor: true,
    //   uploader: {
    //     url: 'http://localhost:5000/api/upload',
    // },
 
};

const RichTextEditor = ({ initialValue, getValue }) => {
    const editor = useRef(null);

    return (
        <JoditEditor
            ref={editor}
            value={initialValue}
            config={config}
            tabIndex={1}
            //   onBlur={(newContent) => getValue(newContent)}
            onChange={(newContent) => getValue(newContent)}
        />
    );
};

export default RichTextEditor;