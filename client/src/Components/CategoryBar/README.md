# CategoryBar & CategoryCard

## Introduction

CategoryBar shows the important categories on Home Page. Each category is displayed as CategoryCard. 

## Usage

```javascript
import { CategoryBar } from 'some-package-name';
import { CategoryCard } from 'some-package-name';
```

## Example use

```javascript
const myPage = props => {
  return (
    <main>
      <CategoryBar />

      <CategoryCard/>
    </main>
  );
};
```

## Properties

It fetches categories from Category list from root folder. 
