import { Component } from '@angular/core';
import {
  MatTreeModule,
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface chatNode {
  name: string;
  children?: chatNode[];
}
const TREE_DATA: chatNode[] = [
  {
    name: 'Direct Messages',
    children: [{ name: 'Torma' }, { name: 'Torpa' }, { name: 'Torti' }],
  },
  {
    name: 'Chat Groups',
    children: [{ name: 'GC1' }, { name: 'GC2' }, { name: 'GC3' }],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-chat-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './chat-tree.component.html',
  styleUrl: './chat-tree.component.css',
})
export class ChatTreeComponent {
  private _transformer = (node: chatNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
