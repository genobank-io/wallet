/*Configuration file for AWS */
var AWS_AccessKeyId = 'AWS_AccessKeyId'; 
var AWS_SecretAccessKey = '<secretAccessKey>'; 
var AWS_Region = 'us-west-2';  // Configure your region
var AWS_BucketName = 'AWS_BucketName';
var AWS_MaxKeys = 500; //How many objects will retrive (include folders and items)
var AWS_Prefix = ''; //Stating folder, by default start on root
var AWS_SignedUrl_Expires = 900; //This is the default value for expires getSignedUrl
var AWS_ACL = 'public-read'; //Permissions on the new object