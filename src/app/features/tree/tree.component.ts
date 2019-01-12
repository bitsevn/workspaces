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
  visible?: boolean;
  expanded?: boolean;
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
  @Input() nodes: TreeNode<Item>[] = [];
  @Input() rootNode: TreeNode<Item>;

  branchNodeType = NodeType.BRANCH;
  leafNodeType = NodeType.LEAF;

  constructor() {}

  ngOnInit() {
    /* const toggler = document.getElementsByClassName('folder-caret');
    let i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        this.parentElement.querySelector('app-tree > .tree-nested').classList.toggle('tree-active');
        this.classList.toggle('folder-caret-down');
      });
      toggler[i].addEventListener('mousedown', function() {
        this.parentElement
          .querySelector('app-tree > .tree-branch')
          .classList.toggle('tree-highlight');
      });
      toggler[i].addEventListener('mouseup', function() {
        this.parentElement
          .querySelector('app-tree > .tree-branch')
          .classList.toggle('tree-highlight');
      });
    } */
  }

  toggle(event) {
    const caret = event.target;
    caret.classList.toggle('folder-caret-down');
    const nestedTree = caret.parentElement.querySelector('app-tree .tree-nested');
    if (nestedTree) nestedTree.classList.toggle('tree-active');
  }

  toggleHighlight(event) {
    const caret = event.target;
    const branch = caret.parentElement.querySelector('app-tree .tree-branch');
    branch.classList.toggle('tree-highlight');
  }
}
