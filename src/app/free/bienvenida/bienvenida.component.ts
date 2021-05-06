import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
})
export class BienvenidaComponent implements OnInit {
  public dataUser: any;

  constructor(private githubSevice: GithubService) {
    this.githubSevice.getData().subscribe((data) => {
      this.dataUser = data;
    });
  }

  ngOnInit(): void {}
}
