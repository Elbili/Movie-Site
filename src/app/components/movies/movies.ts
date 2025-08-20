import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MyMovies } from '../../sevices/my-movies';
import { IMovie } from '../../interFace/i-movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,    
  imports: [CommonModule], 
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class Movies implements OnInit, OnDestroy {
  Allmovies: IMovie[] = []
  movieSub!:Subscription
  imagePath: string = 'https://image.tmdb.org/t/p/w500'
  private readonly movie = inject(MyMovies)

  ngOnInit(): void {
    this.getMoviesData()
  }

  getMoviesData(): void {
   this.movieSub =  this.movie.getAllMovies().subscribe({
      next: (ref) => {
        this.Allmovies = ref.results
      },
      error: () => {
       window.alert("يوجد خطأ ما!")
      },
      complete: () => {
        console.log("okay");
      },
    })
  }
  ngOnDestroy(): void {
    this.movieSub.unsubscribe();
  }
}
