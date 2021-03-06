import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trindingMovies:any[]=[];
  imgBaseUrl:string="https://image.tmdb.org/t/p/original"
  constructor(private _MoviesService: MoviesService) { 
    _MoviesService.getTrendingItems(`movie`).subscribe((data)=>{
      this.trindingMovies= data.results
    })
  }
  
  
  ngOnInit(): void {
  }

}
