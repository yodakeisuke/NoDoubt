import { FC } from 'react';

import LeakList from '../components/myHome/LeakList/LeakList';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import Layout from 'components/Layout/Layout';
import Header from 'components/Layout/Header/Header';
import PaperGreen from 'components/shared/PaperGreen/PaperGreen';
import ButtonPrimary from 'components/shared/ButtonPrimary/ButtonPrimary';
import UserInfo from '../components/myHome/UserInfo/UserInfo';

/**
 * ログイン後のホーム画面。
 */
export const MyHomePage: FC = () => {
  return (
    <Layout title="Home - ButtonUp!" header={<Header />}>
      <PaperGreen>
        <Box
          className="reviewBoxContainer"
          sx={{ display: 'grid', gap: 1.5, alignItems: 'center', py: 2.5 }}
        >
          <UserInfo />
          <ButtonPrimary width="150px">募集する！</ButtonPrimary>
          <Divider sx={{ pt: 2 }} />
          <LeakList />
        </Box>
      </PaperGreen>
    </Layout>
  );
};

export default MyHomePage;
