# BlogsList

## Introduction

BlogsList is an easy-to-use component.

## Usage

```javascript
import { BlogsList } from 'some-package-name';
```

## Example use

```javascript
const myPage = props => {
  return (
    <main>
      <BlogsList />
    </main>
  );
};
```

## Properties

- `maximumBlogs` - is the number of maximum blogs to be displayed. If no value is passed, it fetchs all blogs based on other parameters

- `category` - is the String which tells the tag of blog. If value is not passed, it fetches from all categories.

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| maximumBlogs | Number   | -        | No         |
| category | String   | -            | No          |
