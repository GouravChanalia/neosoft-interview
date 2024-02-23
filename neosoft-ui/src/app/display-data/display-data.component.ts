import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DisplayDataService } from '../display-data.service';

interface User {
  userId: Number,
  id: Number,
  title: String,
  body: String
}

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent implements OnInit {
  data: any = [];
  constructor(private dataService: DisplayDataService) {}

  ngOnInit(): void {
      this.dataService.getData().subscribe(result => {
        this.data = result;
      })
  }
}
