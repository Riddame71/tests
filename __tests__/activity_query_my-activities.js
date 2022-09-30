import axios from 'axios';

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

test('activity_query_my-activities', async () => {
  const queryParams = {
    "type": "get_user_activity",
    "date": "2022-05-30T00:00:00.000",
    "uid": 70
}
  const res = await axios.post(`http://103.72.79.12/api/activity`, queryParams);
  const data = res.data.data.activityDetails
     console.log(data.map(i => i.title))
  expect(data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: 'postman testing 14',
      }),
    ]),
  );
}, 3000000);
