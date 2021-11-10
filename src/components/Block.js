import React from 'react';
import propsType from 'prop-types';
import { Typography, Box, makeStyles } from '@material-ui/core';

const Block = ({ block }) => {
  const classes = useStyles();
  return (
    <Box className={classes.blockContainer}>
      <Box>
        <Typography className={classes.blockTitle} >{ block.attributes.index}</Typography>
      </Box>
      <Box>
        <Typography className={classes.blockBody}>
          {block.attributes.data}
        </Typography>
      </Box>
    </Box>
  )
}

Block.propTypes = {
  block: propsType.shape({
    attributes: propsType.shape({
      index: propsType.number,
      timestamp: propsType.number,
      data: propsType.string,
      hash: propsType.string,
      ["previous-hash"]: propsType.string,
    }),
    id: propsType.string,
    type: propsType.string
  }).isRequired
}

const useStyles = makeStyles((style) => ({
  blockContainer: {
    backgroundColor: '#E0E0E0',
    borderRadius: '4px',
    padding: '8px 10px',
    marginBottom: '5px'
  },
  blockTitle: {
    color: '#3855FC'
  },
  blockBody: {
    color: 'black'
  }
}))

export default Block;
