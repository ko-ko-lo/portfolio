import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReflectionsService } from '../../services/reflections.service';

@Component({
  selector: 'app-content-reflections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-reflections.component.html',
  styleUrl: './content-reflections.component.scss',
})
export class ContentReflectionsComponent implements OnInit {
  content: any[] = [];

  constructor(private reflectionsService: ReflectionsService) {}

  ngOnInit(): void {
    this.content = this.reflectionsService.getContent();
  }
}
