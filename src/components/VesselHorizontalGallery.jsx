import React from 'react';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import vesselImages from '../constants/vesselImages';
import {
  containerStyle, galleryStyle, imageStyle,
} from '../style/components/VesselHorizontalGalleryStyle';

const VesselHorizontalGallery = () => (
  <Box sx={containerStyle}>
    <Box sx={galleryStyle}>
      <List component={Stack} direction="row" sx={{ paddingBottom: '0px' }}>
        {vesselImages.map((item) => (
          <ImageListItem
            key={item.img}
            sx={imageStyle}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ transition: 'transform 0.2s' }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateX(30px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateX(0)';
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateX(30px)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateX(0)';
              }}

            />
          </ImageListItem>
        ))}
      </List>
    </Box>
  </Box>
);

export default VesselHorizontalGallery;
