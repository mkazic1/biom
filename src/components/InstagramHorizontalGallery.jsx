import React from 'react';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import instagramImages from '../constants/instagramImages';
import { containerStyle, imageStyle } from '../style/components/InstagramHorizontalGalleryStyle';

const InstagramHorizontalGallery = () => (
  <Box sx={containerStyle}>
    <List component={Stack} direction="row">
      {instagramImages.map((item) => (
        <ImageListItem key={item.img} sx={imageStyle}>
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </List>
  </Box>
);

export default InstagramHorizontalGallery;
