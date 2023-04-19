export const containerStyle = {
  position: 'relative',
  height: '400px',
  width: '100%',
  overflow: 'hidden',
};

export const galleryStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '50px',
  marginBottom: '120px',
  overflowX: 'auto',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  borderRadius: '14px',
};

export const imageStyle = {
  width: '433px',
  height: '415px',
  paddingLeft: '20px',
};

export const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  color: 'secondary.main',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
