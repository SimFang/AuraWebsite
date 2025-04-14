import axios from 'axios';
import FormData from 'form-data';

interface FileUploadResponse {
  success: boolean;
  key: string;
  link: string;
  expiry: string;
}

/**
 * Uploads a file to file.io and returns a temporary download link
 * @param file The file to upload
 * @param expiryDays Number of days before the link expires (default: 3)
 * @returns Promise containing the download link and expiry information
 */
export const uploadFileForSharing = async (file: File, expiryDays: number = 3): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post<FileUploadResponse>(
      `https://file.io/?expires=${expiryDays}d`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (!response.data.success) {
      throw new Error('Failed to upload file');
    }

    return response.data.link;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to generate download link. Please try again.');
  }
};