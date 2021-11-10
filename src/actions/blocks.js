import fetch from "cross-fetch";
import * as types from "../constants/actionTypes";

const getNodeBlocksStatusStart = (node) => {
  return {
    type: types.GET_BLOCKS_STATUS_START,
    nodeUrl: node.url,
  }
}

const getNodeBlocksStatusSuccess = (node, res) => {
  return {
    type: types.GET_BLOCKS_STATUS_SUCCESS,
    nodeUrl: node.url,
    res
  }
}

const getNodeBlocksStatusFailure = (node) => {
  return {
    type: types.GET_BLOCKS_STATUS_FAILURE,
    nodeUrl: node.url,
  }
}

export function getNodeBlocks(node) {
  return async (dispatch) => {
    try {
      dispatch(getNodeBlocksStatusStart(node))
      const resp = await fetch(`${node.url}/api/v1/blocks`);

      if(resp.status >= 400) {
        dispatch(getNodeBlocksStatusFailure(node))
      }
      const resJson = await resp.json();
      console.log({ resJson })
      dispatch(getNodeBlocksStatusSuccess(node, resJson))
    } catch (err) {
      dispatch(getNodeBlocksStatusFailure(node))
    }
  }
}


