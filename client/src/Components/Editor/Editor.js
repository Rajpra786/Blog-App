import React from "react";
import ReactQuill, { Quill } from "react-quill";
import {Box} from "@mui/material";
import ImageUploader from "quill-image-uploader";
import ImageUpload from '../../Requests/ImageUpload';
import hljs from 'highlight.js'
import ImageResize from 'quill-image-resize-module-react'
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/atom-one-dark.css'
/* 
other available themes
	atom-one-light.css
	arta.css
	brown-paper.css
	dark.css
	googlecode.css
*/


hljs.configure({
	languages: ['javascript', 'ruby', 'python', 'rust','c++','java'],
});

Quill.register("modules/imageUploader", ImageUploader);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);


const Modules = {
    toolbar : [
		[{ 'header': [1, 2, false] }],
		['bold', 'italic', 'underline','strike', 'blockquote','code-block'],
		[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
		['link', 'image','video'],
		['clean'],
	  ],

	imageResize: {
		parchment: Quill.import('parchment')
	},
	syntax: {
		highlight: text => hljs.highlightAuto(text).value,
	}, 
	imageDrop: true,
    imageUploader: {
      upload: (file)=>ImageUpload(file),
    },
	clipboard: {
		matchVisual: false,
	},
  };

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "clear", 
	"code-block"
  ];

const Editor = props => {  
	return (
		<div>
			<Box sx={{marginTop:'2vh', marginLeft:'7.5vw'}}>
				<ReactQuill theme="snow" 
						value={props.content} 
						onChange={props.setContent} 
						modules={Modules}
						formats={formats}
						bounds={'.blogContainer'}
						style={{width:'80vw',height:'60vh',alignItems:'center'}}
						/>
			</Box>
		</div>
	);
}

export default Editor;
