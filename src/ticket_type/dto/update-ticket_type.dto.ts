import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketTypeDto } from './create-ticket_type.dto';

export class UpdateTicketTypeDto extends PartialType(CreateTicketTypeDto) {}
