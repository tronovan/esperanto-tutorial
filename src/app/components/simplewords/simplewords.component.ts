import { Component, OnInit } from '@angular/core';
import { SimplewordsService } from '../../services/simplewords.service';

@Component({
  selector: 'app-simplewords',
  templateUrl: './simplewords.component.html',
  styleUrls: ['./simplewords.component.css']
})
export class SimplewordsComponent implements OnInit {

  constructor(private simplewordsService: SimplewordsService) { }

  ngOnInit() {
  }

}
