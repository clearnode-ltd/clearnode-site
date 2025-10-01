import serverless from "serverless-http";
import { createServer } from "../../server";

const app = createServer();

export const handler = serverless(app, {
  binary: false,
  request: (request: any, event: any) => {
    if (event.body && event.headers['content-type']?.includes('application/json')) {
      try {
        request.body = JSON.parse(event.body);
      } catch (e) {
        console.error('Failed to parse body:', e);
      }
    }
  }
});
