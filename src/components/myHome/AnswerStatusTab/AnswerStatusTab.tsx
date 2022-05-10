import { FC, useState, SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { IsAnswered } from 'global/types/LeakType';

export const AnswerStatusTab: FC = () => {
  const [currentTab, setcurrentTab] = useState<IsAnswered>('Unanswered');

  const handleChange = (event: SyntheticEvent, newValue: IsAnswered) => {
    setcurrentTab(newValue);
  };

  return (
    <Box
      className="answerStatusTab"
      sx={{ width: '100%', typography: 'body1' }}
    >
      <TabContext value={currentTab}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          centered
        >
          <Tab label="未回答" value="Unanswered" />
          <Tab label="回答済み" value="Answered" />
        </TabList>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};

export default AnswerStatusTab;
