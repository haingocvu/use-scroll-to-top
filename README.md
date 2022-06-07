# use-scroll-to-top

Scroll to top utilities for react hooks.

## Installation

```js
npm install use-scroll-to-top
```

or

```js
yarn add use-scroll-to-top
```

## API

```typescript
import React from 'react';
import styled from 'styled-components';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useScrollToTop } from 'use-scroll-to-top';

const StyledArrow = styled(FaArrowCircleUp)`
  height: 3em;
  position: fixed;
  width: 3em;
  bottom: 50%;
  right: 1em;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.2;
`;

const LongContent = styled.div`
  min-height: 150vh;
`;

export function Sandbox() {
  const { showScroll, scrollTop } = useScrollToTop({ pageYOffset: 200 });

  return (
    <>
      <StyledArrow onClick={scrollTop} style={{ display: showScroll ? 'inline' : 'none' }} />
      <LongContent>This is long content demo</LongContent>
    </>
  );
}
```
