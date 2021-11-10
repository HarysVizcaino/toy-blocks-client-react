import * as actionTypes from "../constants/actionTypes";
import reducer from './nodes';

describe('Reducers::Blocks', () => {
  const nodeTestA = {
    url: 'http://localhost:3032',
    online: true,
    name: 'test A',
    loading: false,
    blocks: {}
  }

  const nodeTestB = {
    url: 'http://localhost:3033',
    online: true,
    name: 'test B',
    loading: false,
    blocks: {}
  }

  it('Should perform GET_BLOCKS_STATUS_START', () => {
    const blockState = {
      list: [nodeTestA, nodeTestB]
    }

    const action = {
      type: actionTypes.GET_BLOCKS_STATUS_START, 
      nodeUrl: nodeTestB.url
    }

    const expected  = {
      list: [
        nodeTestA,
        {
          ...nodeTestB,
          blocks: {
            loading: true,
            error: false,
            data: []
          }
        }
      ]
    }
    expect(reducer(blockState, action)).toEqual(expected)
  })

  it('Should perform GET_BLOCKS_STATUS_SUCCESS', () => {
    const blockState = {
      list: [nodeTestA, nodeTestB]
    }

    const blockData = [
      {
        data: {
          id: 1,
          data: 'block test A'
        },
        id: 1,
        type: 'blocks'
      },
      {
        data: {
          id: 2,
          data: 'block test A'
        },
        id: 1,
        type: 'blocks'
      }
    ]

    const action = {
      type: actionTypes.GET_BLOCKS_STATUS_SUCCESS, 
      nodeUrl: nodeTestB.url,
      res: {
        data: blockData,
      }
    }

    const expected  = {
      list: [
        nodeTestA,
        {
          ...nodeTestB,
          blocks: {
            loading: false,
            error: false,
            data: blockData
          }
        }
      ]
    }

    expect(reducer(blockState, action)).toEqual(expected)
  })
});