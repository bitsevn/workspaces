import { Component, Input, OnInit } from '@angular/core';

export class Item {
  id: number | string;
  name: string;
}

export enum NodeType {
  BRANCH = 'branch',
  LEAF = 'leaf'
}
export interface TreeNode<T> {
  id: number | string;
  name: string;
  nodeType: NodeType;
  value?: T;
  children?: TreeNode<T>[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() rootNodeClass = 'tree-root';
  @Input() nestedRootNodeClass = 'tree-nested';
  branchNodeType = NodeType.BRANCH;
  leafNodeType = NodeType.LEAF;
  @Input() nodes: TreeNode<Item>[] = [];
  constructor() {}

  ngOnInit() {
    const toggler = document.getElementsByClassName('folder-caret');
    let i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        console.log(this);
        this.parentElement.querySelector('.tree-nested').classList.toggle('tree-active');
        this.classList.toggle('folder-caret-down');
      });
      toggler[i].addEventListener('mousedown', function() {
        this.parentElement.querySelector('.tree-branch').classList.toggle('tree-highlight');
      });
      toggler[i].addEventListener('mouseup', function() {
        this.parentElement.querySelector('.tree-branch').classList.toggle('tree-highlight');
      });
    }
  }
}
