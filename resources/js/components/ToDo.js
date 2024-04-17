import React from 'react';
import { Card, CardHeader, CardContent, List } from '@mui/material';

const ToDo = () => {
  return (
    <Card>
      <CardHeader title="test todo" />
      <CardContent>
        <List>
          {
            [0, 1, 2, 3].map((value) => {
              return (
                <p>{ value }</p>
              )
            })
          }
        </List>
      </CardContent>
    </Card>
  );
}

export default ToDo;
