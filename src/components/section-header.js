import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box>
      <Heading
        as="h1"
        sx={{
          variant: 'sectionHeader.title',
          color:isWhite ? 'white' : '#002bfb',
          marginBottom:'20px'
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
