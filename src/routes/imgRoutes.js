const AWS = require("aws-sdk");
require('dotenv').config()

module.exports = {
    upload: (req, res) => {
        AWS.config.update({ region: "us-east-2" });
        s3 = new AWS.S3({ apiVersion: "2006-03-01" });
        s3.upload(
          {
            Bucket: process.env.S3_BUCKET,
            Key: `${req.params.key}`,
            ContentType: "image/jpeg",
            Body: Buffer.from(req.body, 'base64'),
            ACL: "public-read"
          },
          (err, data) => {
            if (err) {
              console.log("Error uploading", err);
              res.status(502).send("Error Uploading Image").end()
            }
            if (data) {
              console.log(data.Location);
              res.status(200).json({img: data.Location}).end();
            }
          }
        );
    }
}