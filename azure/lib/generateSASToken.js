const{
    BlobServiceClient,
    StorageSharedKeyCredential,
    BlobSASPermissions,
    generateBlobSASQueryParameters,
} = require("@azure/storage-blob");

const accountKey = process.env.accountKey;
const accountName = process.env.accountName;
const containerName = "images";

//create shared key credentials
const sharedKeyCredential = new StorageSharedKeyCredential(
    accountName, 
    accountKey
);

//create blob service client
const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
);

//Generate SAS token
async function generateSASToken(){
    const containerClient = blobServiceClient.getContainerClient(containerName);

    //permissions for SAS token
    const permissions = new BlobSASPermissions;
    permissions.write = true;
    permissions.read = true;
    permissions.create = true;

    //token validity
    const expiryDate = new Date();
    expiryDate.setMinutes(expiryDate.getMinutes() + 30);

    //create token
    const sasToken = generateBlobSASQueryParameters(
        {
            containerName: containerClient.containerName,
            permissions: permissions.toString(),
            expiresOn: expiryDate,
        },
        sharedKeyCredential
    ).toString();
    return sasToken;
}

module.exports = generateSASToken;