# EditProfilePhoto

## Introduction

EditProfilePhoto is an easy-to-use component to edit user avatar

## Usage

```javascript
import { EditProfilePhoto } from 'some-package-name';
```

## Example use

```javascript
const myPage = props => {
  return (
    <main>
      <EditProfilePhoto setImage={setImage} src={avatar}/>
    </main>
  );
};
```

## Properties

- `setImage` - is the function to set Image url after upload the edited avatar to s3
- `src` - is the previous image which need to be updated

| propName  | propType | defaultValue | isRequired |
| --------- | -------- | ------------ | ---------- |
| setImage  | Function | -            | Yes        |
| src       | String   | ""           | No         |
