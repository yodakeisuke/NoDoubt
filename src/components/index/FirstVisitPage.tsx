import { FC } from 'react';

import { Box, Paper, Typography, Divider } from '@mui/material';

import Layout from 'components/Layout/Layout';
import ThemeLogo from 'components/shared/ThemeLogo/ThemeLogo';
import ExplainServiceCard from './ExplainServiceCard/ExplainServiceCard';
import TopInfographic from 'components/shared/TopInfographic/TopInfographic';
import PaperGreen from 'components/shared/PaperGreen/PaperGreen';

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
            fontSize: 'clamp(18px, 5vw, 30px)',
          }}
        >
          個人のレピュテーションマネジメント
        </Typography>
        <Divider />
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
