import React from 'react';
import { Flex, Heading } from '@modulz/design-system';

export const RadixLogo = ({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { label?: string }) => (
  <Flex align="center">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" fill="currentColor" />
      <path d="M12 0H4V8H12V0Z" fill="currentColor" />
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentColor"
      />
    </svg>
    <Heading size="1" as="span" css={{ ml: '$1' }}>
      Radix
    </Heading>
  </Flex>
);
