import { Box } from '@mui/material';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import instagramImages from '../constants/instagramImages';
import { containerStyle, imageStyle } from '../style/components/InstagramHorizontalGalleryStyle';

const InstagramHorizontalGallery = () => (
  <Box sx={containerStyle}>
    <List component={Stack} direction="row">
      {instagramImages.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            ...imageStyle,
            marginTop: item.id % 2 !== 0 ? '40px' : '0px',
            marginBottom: item.id % 2 === 0 ? '40px' : '0px',
          }}
        >
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </List>
  </Box>
);

export default InstagramHorizontalGallery;
