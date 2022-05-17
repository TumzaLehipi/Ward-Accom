import React from 'react';

import styled from 'styled-components';

export default function Button(props) {
  return (
      <button 
        style={styles}
        onClick={props.onClick}
      >
        {props.text}
      </button>
  )
}

const button = styled.button`

`;