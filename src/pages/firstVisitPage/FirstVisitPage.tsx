import { FC } from 'react';

import { Box, Paper, Typography } from '@mui/material';

import Layout from 'components/frames/Layout/Layout';
import ThemeLogo from 'components/parts/ThemeLogo/ThemeLogo';
import ExplainServiceCard from './ExplainServiceCard/ExplainServiceCard';
import TopInfographic from 'components/parts/TopInfographic/TopInfographic';
import PaperGreen from 'components/frames/PaperGreen/PaperGreen';

/**
 * 初回訪問時の表示ページ。
 */
export const FirstVisitPage: FC = () => {
  return (
    <Layout title="あなたのクチコミ箱 - ButtonUp!">
      <PaperGreen>
        <Typography
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            margin: 2,
            mb: 0,
            fontSize: 'clamp(18px, 5vw, 30px)',
          }}
        >
          個人のレピュテーションマネジメント
        </Typography>
        <Box component="section" padding={2} mb={1} display="grid" gap={2.5}>
          <ThemeLogo
            sx={{
              width: 'clamp(250px, 50vw, 370px)',
              justifySelf: 'center',
              py: 1,
            }}
          />
          <ExplainServiceCard />
        </Box>
      </PaperGreen>
      <Paper
        component="aside"
        elevation={1}
        sx={{
          m: 0.5,
          width: '100%',
        }}
      >
        <TopInfographic width="100%" />
      </Paper>
    </Layout>
  );
};

export default FirstVisitPage;
