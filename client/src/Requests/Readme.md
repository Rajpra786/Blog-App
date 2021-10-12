# Requests 

> Get, Delete, Post, Put, ImageUpload

## Introduction
This implements the api requests using promises as we need these implements at many parts of our code. 

## Usage

1. Get

```javascript
import Get from 'some-package-name/Requests/Get';
```

2. Put 
```javascript
import Put from 'some-package-name/Requests/Put';
```

3. Post
```javascript
import Post from 'some-package-name/Requests/Post';
```

4. Delete

```javascript
import Delete from 'some-package-name/Requests/Delete';
```

5. ImageUpload

```javascript
import ImageUpload from 'some-package-name/Requests/ImageUpload';
```

## Example use

1. Get
```javascript

    Get(endpoint)
    .then((res)=>{
        //handle response
    })
    .catch((err)=>{
        //handle error
    })
```

2. Put

```javascript

    Post(data, endpoint)
    .then((res)=>{
        //handle response
    })
    .catch((err)=>{
        //handle error
    })
```

3. Post 

```javascript

    Put(data, endpoint)
    .then((res)=>{
        //handle response
    })
    .catch((err)=>{
        //handle error
    })
```

4. Delete 
```javascript
    Delete(endpoint)
    .then((res)=>{
        //handle response
    })
    .catch((err)=>{
        //handle error
    })
```

5. ImageUpload

```javascript

    ImageUpload(file)
    .then((res)=>{
        //handle response
    })
    .catch((err)=>{
        //handle error
    })

```

## Properties

- `endpoint` - It is the api end-point. 
- `data` - It is the body part of any request
- `file` - It is File object(always image else will throw exception)