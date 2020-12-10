const AWS = require("aws-sdk");
const fs = require("fs");

let img = fs.readFileSync(
  "../../Desktop/testimg.jpeg",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return data;
  }
);

const test1 = () => {
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
        Key: "testimg25",
        ContentType: "image/jpeg",
        Body: img,
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
//   fs.writeFile("testimggoodno.jpeg", img, "base64", (err) => {
//     console.error(err);
//   });
};
test1();
