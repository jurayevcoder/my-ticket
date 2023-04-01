import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryMethodDto } from './create-delivery_method.dto';

export class UpdateDeliveryMethodDto extends PartialType(CreateDeliveryMethodDto) {}
