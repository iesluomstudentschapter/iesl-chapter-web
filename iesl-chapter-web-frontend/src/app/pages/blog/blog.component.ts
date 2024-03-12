import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { BlogPost } from '../../models/blog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: BlogPost[] = [];

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.blogService.getArticles()
      .subscribe(
        (data: BlogPost[]) => {
          this.articles = data;
        },
        error => {
          console.error('Error fetching articles:', error);
        }
      );
  }

  onArticleClick(article: BlogPost): void {
    this.router.navigate(['blog', article.id]);
  }
}
