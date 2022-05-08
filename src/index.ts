import { File } from "./interface";

const instance = new File();

const Download = async () => await instance.get({
    Bucket: "aws-s3-example-bucket-name",
    Key: "example-file.zip"  }
);

void (async () => await Download())();