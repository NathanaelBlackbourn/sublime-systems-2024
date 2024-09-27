'use server';

import type { ImageMetaData } from '@/index';
import path from 'path';
import { promises as fs } from 'fs';

const getImageMetaData = async (src: string): Promise<ImageMetaData> => {
  const fullPath = path.join(process.cwd(), 'public', src);
  const buffer = await fs.readFile(fullPath);

  let width: number, height: number;

  if (src.toLowerCase().endsWith('.png')) {
    width = buffer.readUInt32BE(16);
    height = buffer.readUInt32BE(20);
  } else if (src.toLowerCase().endsWith('.jpg') || src.toLowerCase().endsWith('.jpeg')) {
    for (let i = 0; i < buffer.length; i++) {
      if (buffer[i] === 0xff && buffer[i + 1] === 0xc0) {
        height = buffer.readUInt16BE(i + 5);
        width = buffer.readUInt16BE(i + 7);
        break;
      }
    }
  } else {
    throw new Error('Unsupported image format');
  }

  const aspectRatio = width / height;

  return {
    width,
    height,
    aspectRatio,
  };
};

export default getImageMetaData;
