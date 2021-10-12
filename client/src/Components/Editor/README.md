# Editor

## Introduction

Editor is an easy-to-use component to create new blog posts. It uses Quill Component. 

1. It allows add images via drag&drop, copy/paste, and upload
2. Images can be resized. 
3. Saves images directly to S3 engine to reduce blog content size. 

## Usage

```javascript
import { Editor } from 'some-package-name';
```

## Example use

```javascript
const myPage = props => {
  return (
    <main>
      <Editor />
    </main>
  );
};
```

## Properties
