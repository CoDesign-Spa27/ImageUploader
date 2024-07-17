import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { storage } from "../services/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ImageUpload = ({ setPhotoUrl }) => {
  const [uploading, setUploading] = useState(false);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const storageRef = ref(storage, `images/${file.name}`);
    setUploading(true);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setPhotoUrl(downloadURL);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-full p-4 border-2 border-dashed border-gray-300 rounded cursor-pointer"
    >
      <input {...getInputProps()} />
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <p className="text-black">Drag and drop an image here, or click to select an image</p>
      )}
    </div>
  );
};

export default ImageUpload;
