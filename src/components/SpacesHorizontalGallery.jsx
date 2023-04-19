import React from 'react';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';
import spacesImages from '../constants/spacesImages';
import {
  containerStyle, contentStyle, galleryStyle, imageStyle,
} from '../style/components/SpacesHorizontalGalleryStyle';

const SpacesHorizontalGallery = () => (
  <Box sx={containerStyle}>
    <Box sx={galleryStyle}>
      <List component={Stack} direction="row">
        {spacesImages.map((item) => (
          <ImageListItem
            key={item.img}
            sx={imageStyle}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ borderRadius: '16px' }}
            />
          </ImageListItem>
        ))}
        <Box sx={contentStyle}>
          <Typography variant="body2" sx={{ letterSpacing: '2.4px' }}>WHERE YOU NEED IT,</Typography>
          <Typography
            variant="h2"
            sx={{
              marginTop: '6px', width: '336px', textAlign: 'center',
            }}
          >
            when you need it.
          </Typography>
        </Box>
      </List>
    </Box>
  </Box>
);

export default SpacesHorizontalGallery;
