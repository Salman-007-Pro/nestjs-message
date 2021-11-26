import { Controller, Get, Post, Body, Param,NotFoundException} from '@nestjs/common';
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
  async getMessage(@Param('id') id: string): Promise<any> {
    const message=await this.messagesService.findOne(id);
    if(!message){
      throw new NotFoundException('message not found')
    }
    return message
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): Promise<any> {
    return this.messagesService.create(body.content);
  }
}
