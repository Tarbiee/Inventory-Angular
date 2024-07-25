import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel'
  numberOfRooms = 10;
  hideRooms = false;
  rooms : Room ={
    totalRooms: 20,
    availableRooms : 10,
    bookedRooms : 5
  }
  roomList : RoomList[] = [
    {
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenties: 'Air Condtioner, Tv, ',
    price: 500,
    photos: 'https://media.licdn.com/dms/image/D4D12AQFZV-WCSGcQ8Q/article-cover_image-shrink_600_2000/0/1679880757083?e=2147483647&v=beta&t=oM75DL5PYsf9IbbfnFm1PTaEfT99ePWdmn3CUz_c0lw',
    checkinTime: new Date(2023, 6, 24, 15, 30),
    checkoutTime: new Date(2023, 6, 24, 15, 30)
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenties: 'Air Condtioner, Tv, ',
    price: 1000,
    photos: 'https://media.licdn.com/dms/image/D4D12AQFZV-WCSGcQ8Q/article-cover_image-shrink_600_2000/0/1679880757083?e=2147483647&v=beta&t=oM75DL5PYsf9IbbfnFm1PTaEfT99ePWdmn3CUz_c0lw',
    checkinTime: new Date(2023, 6, 24, 15, 30),
    checkoutTime: new Date(2023, 6, 24, 15, 30)
  },
  {
    roomNumber: 3,
    roomType: 'Deluxe Room',
    amenties: 'Air Condtioner, Tv, ',
    price: 1000,
    photos: 'https://media.licdn.com/dms/image/D4D12AQFZV-WCSGcQ8Q/article-cover_image-shrink_600_2000/0/1679880757083?e=2147483647&v=beta&t=oM75DL5PYsf9IbbfnFm1PTaEfT99ePWdmn3CUz_c0lw',
    checkinTime: new Date(2023, 6, 24, 15, 30),
    checkoutTime: new Date(2023, 6, 24, 15, 30)
  }
]

  toggle()
  {
    this.hideRooms = !this.hideRooms
  }

}
