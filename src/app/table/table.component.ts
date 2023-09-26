import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSortModule, MatSort} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';



export interface UserData {
  id: string;
  livro: string;
  escritor: string;
  editora: string;
}

const EDITORA: string[] = [
  'Editora Arqueiro',
  'Leya',
  'Editora Intrísica',
  'Saraiva',
  'Harper Collins',
  'Editora Rocco',
  'Globo Livros',
  'Darkside Books',
];
const LIVRO: string[] = [
  'Don Quixote de La Mancha',
  'Alice no País das Maravilhas',
  'Peter Pan',
  'Gabriela, Cravo e Canela',
  '1001 noites',
  'A Arte de Perder',
  'A bela e a Fera',
  'O Magico de Oz',
  'A Letra Escarlate',
  'O Patinho Feio',
  'Orfeu da Conceição',
  'Fausto',
  'Otelo',
  'As Aventuras de Sherlock Holmes',
  'Dom Casmurro',
  'O Primo Basílio',
  'Cyrano Bergerac',
  'Um Conto de Natal',
  'Capitães da Areia',
];
const ESCRITOR: string[] = [
  'Miguel de Cervantes',
  'Lewis Carroll',
  'J. M. Barrie',
  'Jorge Leal Amado de Faria',
  'Antoine Galland',
  'Elizabeth Bishop',
  'Gabrielle-Suzanne de Villeneuve',
  'L. Frank Baum',
  'Nathaniel Hawthorne',
  'Hans Christian Andersen',
  'Vinicius de Moraes',
  'Johann Wolfgang von Goethe',
  'William Shakespeare',
  'Arthur Conan Doyle',
  'Machado de Assis',
  'Eça de Queiroz',
  'Edmond Rostand',
  'Charles Dickens',
  'Jorge Leal Amado de Faria',
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],

})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'livro', 'escritor', 'editora'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number): UserData {
  const livro =
    LIVRO[Math.round(Math.random() * (LIVRO.length - 1))] 
    // +
    // ' ' +
    // LIVRO[Math.round(Math.random() * (LIVRO.length - 1))].charAt(0) +
    // '.'
    ;

  return {
    id: id.toString(),
    livro: livro,
    escritor: ESCRITOR[Math.round(Math.random() * (ESCRITOR.length - 1))],
    editora: EDITORA[Math.round(Math.random() * (EDITORA.length - 1))],
  };
}

