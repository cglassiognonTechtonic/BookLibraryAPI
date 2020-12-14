const AWS = require("aws-sdk");
const fs = require("fs");

let img = fs.readFileSync(
  "../../Desktop/testimg.jpeg", 'base64',
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return data;
  }
);

const test1 = () => {
  // console.log(img)
  // fs.writeFileSync("thisisatest.jpeg", img, 'base64')
  AWS.config.update({ region: "us-east-2" });
  s3 = new AWS.S3({ apiVersion: "2006-03-01" });
  // //   //   s3.listBuckets((err, data) => {
  // //   //     if (err) {
  // //   //       console.error("Error getting bucket list", err);
  // //   //     } else {
  // //   //       console.log(data.Buckets);
  // //   //     }
  // //   //   });
  s3.upload(
    {
      Bucket: "libraryapibookcovers",
      Key: "testimg32.jpeg",
      ContentType: "image/jpeg",
      Body: imgtest,
      ACL: "public-read"
    },
    (err, data) => {
      if (err) {
        console.log("Error uploading", err);
      }
      if (data) {
        console.log(data);
      }
    }
  );

};
test1();
