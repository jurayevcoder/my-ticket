import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './venue/models/venue.model';
import { VenueModule } from './venue/venue.module';
import { VenuePhoto } from './venue_photo/models/venue_photo.model';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueType } from './venue_type/models/venue_type.model';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { EventModule } from './event/event.module';
import { EventTypeModule } from './event_type/event_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { LanguageModule } from './language/language.module';
import { StatusModule } from './status/status.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerModule } from './customer/customer.module';
import { TicketModule } from './ticket/ticket.module';
import { AdminModule } from './admin/admin.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CartModule } from './cart/cart.module';
import { BookingModule } from './booking/booking.module';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { Seat } from './seat/models/seat.model';
import { SeatType } from './seat_type/models/seat_type.model';
import { Region } from './region/models/region.model';
import { Country } from './country/models/country.model';
import { District } from './district/models/district.model';
import { Language } from './language/models/language.model';
import { Status } from './status/models/status.model';
import { HumanCategory } from './human_category/models/human_category.model';
import { EventType } from './event_type/models/event_type.model';
import { Event } from './event/models/event.model';
import { TicketType } from './ticket_type/models/ticket_type.model';
import { Ticket } from './ticket/models/ticket.model';
import { Cart } from './cart/models/cart.model';
import { Booking } from './booking/models/booking.model';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { DeliveryMethod } from './delivery_method/models/delivery_method.model';
import { DiscountCoupon } from './discount_coupon/models/discount_coupon.model';
import { CustomerCard } from './customer_card/models/customer_card.model';
import { CustomerAddress } from './customer_address/models/customer_address.model';
import { Customer } from './customer/models/customer.model';
import { Admin } from './admin/models/admin.model';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Venue,
        VenueType,
        VenuePhoto,
        Seat,
        SeatType,
        Region,
        Country,
        District,
        Language,
        Status,
        HumanCategory,
        EventType,
        Event,
        TicketType,
        Ticket,
        Cart,
        Booking,
        PaymentMethod,
        DeliveryMethod,
        DiscountCoupon,
        CustomerCard,
        CustomerAddress,
        Customer,
        Admin
      ],
      autoLoadModels: true,
      logging: false,
    }),
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
    CountryModule,
    RegionModule,
    DistrictModule,
    SeatModule,
    SeatTypeModule,
    EventModule,
    EventTypeModule,
    HumanCategoryModule,
    LanguageModule,
    StatusModule,
    CustomerAddressModule,
    CustomerModule,
    TicketModule,
    AdminModule,
    CustomerCardModule,
    CartModule,
    BookingModule,
    TicketTypeModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    DiscountCouponModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
