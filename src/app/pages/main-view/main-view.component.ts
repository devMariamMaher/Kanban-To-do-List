import { Component } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';
import { Board } from '../../model/board.model';
import { Column } from '../../model/colum.model';

@Component({
  selector: 'app-main-view',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  board:Board = new Board('TextBoard', [
    new Column('Ideas', [
      'Some random idea',
      'Another random idea',
      'Build a project'
    ]),
    new Column('Research', [
      'Decorator Methods',
      'Design Patterns',
      'Data Structure',
      'OOP'
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail', 'Walk dog'
    ])
  ])

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
