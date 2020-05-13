# Microsoft Teams Outgoing Webhook Cloudflare Worker

The Microsoft nodejs example code for a Microsoft Teams outgoing webhook handler in Javascript from https://github.com/OfficeDev/msteams-samples-outgoing-webhook-nodejs modifed for a Cloudflare Worker.
index.js is the content of the Workers script.

For dev, set `SECRET_TOKEN` in `wrangler.toml`. In production, recommended to use [Secrets](https://developers.cloudflare.com/workers/tooling/wrangler/secrets/)

See https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-outgoing-webhook for adding an outgoing webhook, and details on the HMAC signature in the request.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/piersc/msteams-outgoing-webhook-bot-worker
```

#### Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
