const AWS = require("aws-sdk");

module.exports = {
  uploadImage: async (image) => {
    AWS.config.update({ region: "us-east-2" });
    s3 = new AWS.S3({ apiVersion: "2006-03-01" });
    let url = await s3.upload(
      {
        Bucket: "libraryapibookcovers",
        Key: "testimg32",
        ContentType: "image/jpeg",
        Body: image,
        ACL: "public-read",
      },
      (err, data) => {
        if (err) {
          console.log("Error uploading", err);
        }
        if (data) {
          console.log(data.Location);
        }
        return data;
      }
    );
    return url;
  },
};
