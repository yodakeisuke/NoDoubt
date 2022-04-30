import { FC } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * 投稿の一覧
 * インタラクション：
 */
export const Leak: FC = () => {
  return (
    <Card className="leak" sx={{ width: '90%', mx: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          タイトル仮
        </Typography>
        <Typography variant="body2">
          本文仮
          <br />
          本文仮
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignSelf: 'end',
        }}
      >
        <Button size="small" sx={{ fontWeight: 'bold' }}>
          詳細表示
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ fontWeight: 'bold' }}
        >
          回答する
        </Button>
      </CardActions>
    </Card>
  );
};

export default Leak;
