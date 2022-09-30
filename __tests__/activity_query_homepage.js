import axios from 'axios';

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

test('Activity Checker', async () => {
  const queryParams = {
    type: 'get_activity',
    date: '2022-06-30T20:00-05:00',
    uid: 70,
    offset: 0,
  };

  const res = await axios.post(`http://103.72.79.12/api/activity`, queryParams);
  const data = res.data.data.activityDetails;
  console.log(data.map(i => i.title));
  //logger.debug(data.map(i => i.title));
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: 'traits testing',
      }),
    ]),
  );
}, 3000000);
