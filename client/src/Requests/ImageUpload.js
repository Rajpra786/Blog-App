
const ImageUpload = (file) => {
  return new Promise((resolve, reject) => {
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      console.log(file.size);
      reject("File type is not supported!");
    }

    //get url to upload image from s3
    fetch("/api/blogs/image/new/" + file.name)
      .then(res => res.json())
      .then(res => {
        const url = res.url;
        //upload image to received url to s3
        fetch(
          url,
          {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            body: file
          }
        )
          .then(res => res.text())
          .then(() => {
            resolve(url.split('?')[0]);
          })
          .catch((error) => {
            console.error("Error:", error);
            reject("Upload failed");
          });
      });
  })
}

export default ImageUpload;