const AWS = require("aws-sdk");
const fs = require("fs")
const {decode} = require("js-base64")

module.exports = {
    upload: (req, res) => {
        // console.log("\n\n IMG:", Base64.btoa(req.body.img))
        fs.writeFileSync('finaltest.jpg', req.body, 'base64')
        AWS.config.update({ region: "us-east-2" });
        s3 = new AWS.S3({ apiVersion: "2006-03-01" });
        s3.upload(
          {
            Bucket: "libraryapibookcovers",
            Key: `${req.params.key}`,
            ContentType: "image/jpeg",
            Body: Buffer.from(req.body, 'base64'),
            ACL: "public-read"
          },
          (err, data) => {
            if (err) {
              console.log("Error uploading", err);
            }
            if (data) {
              console.log(data.Location);
            }
          }
        );
    }
}