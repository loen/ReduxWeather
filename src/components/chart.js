import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return(
    <Sparklines w={120} h={180} data={props.data}>
      <SparklinesLine color={props.color} />
    </Sparklines>
  );
}
