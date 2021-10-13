# HorizontalBlogCard

## Introduction

HorizontalBlogCard is a blog card which displays basic blog details. 

## Usage

```javascript
import { HorizontalBlogCard } from 'some-package-name';
```

## Example use

```javascript
const myPage = props => {
  return (
    <main>
      <HorizontalBlogCard {...props}/>
    </main>
  );
};
```

## Properties

- `url` - The link to the blog
- `title` - The blog title
- `description` - The blog description 
- `avatar` - Author avatar link 
- `author` - Author's name 
- `date` - last updated date in (mmmm dS, yyyy) format
- `readTime` - The avg read time of blog
- `authorUrl` - author profile url
