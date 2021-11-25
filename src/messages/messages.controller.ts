import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  listMessages(): Promise<any> {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): Promise<any> {
    return this.messagesService.findOne(id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): Promise<any> {
    return this.messagesService.create(body.content);
  }
}
