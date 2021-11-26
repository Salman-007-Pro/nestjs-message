import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
const filePath = 'messages.json';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile(filePath, 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile(filePath, 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(content: string) {
    const contents = await readFile(filePath, 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.round(Math.random() * Math.pow(20, 20)).toString(16);
    messages[id] = {
      content,
      id,
    };
    await writeFile(filePath, JSON.stringify(messages));
  }
}
