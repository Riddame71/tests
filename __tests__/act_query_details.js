import axios from 'axios';

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

test('Activity_Query_Details | Email Check ', async () => {
  const queryParams = {
    "type": "get_details",
    "id": "b37ac95b-0ab6-46f2-9797-cbde4963d625"
  };
  const res = await axios.post(`http://103.72.79.12/api/activity`, queryParams);
  for (let i = 0; i <= 10; i++) {
    console.log(res.data.creatorConnection.Email)
    //logger.debug(res.data.creatorConnection.Email)
  }
  const data = res.data.creatorConnection;
  expect(data).toEqual(
      expect.objectContaining({
        Email: 'hasanr@gmail.com',
      }), 
  );
}, 3000000);
