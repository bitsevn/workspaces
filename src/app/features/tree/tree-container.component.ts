import { Component, Input, OnInit } from '@angular/core';
import { Item, NodeType, TreeNode } from './tree.component';
export interface ICallBacks {
  onCollapse?: Function;
  onExpand?: Function;
  onLeafNodeClick?: Function;
  onLeafNodeDblClick?: Function;
  onBranchNodeClick?: Function;
  onBranchNodeDblClick?: Function;
}

export interface ITreeConfig {
  expandOnFilter?: boolean;
  highlightOnNodeClick?: boolean;
  draggableLeaf?: boolean;
  draggableBranch?: boolean;
  ellipsisEnabled?: boolean;
  ellipsisCharLimit?: number;
  callbacks: ICallBacks;
}

export interface ITreeApi {
  expandAll: Function;
  collapseAll: Function;
  expandNode: Function;
  collapseNode: Function;
}

export const getNodesByLimit = (limit: number = 1): TreeNode<Item>[] => {
  const nodes = [];
  for (let i = 0; i < limit; i++) {
    nodes.push(...getNodes());
  }
  return nodes;
};

export const getNodes = (): TreeNode<Item>[] => [
  {
    id: 1,
    name: 'Neelgiri Tea',
    nodeType: NodeType.LEAF
  },
  {
    id: 2,
    name: 'Assam Tea',
    nodeType: NodeType.LEAF
  },
  {
    id: 3,
    name: 'Beverages',
    nodeType: NodeType.BRANCH,
    children: [
      {
        id: 3.1,
        name: 'Water',
        nodeType: NodeType.LEAF
      },
      {
        id: 3.2,
        name: 'Coffee',
        nodeType: NodeType.LEAF
      },
      {
        id: 3.3,
        name: 'Tea',
        nodeType: NodeType.BRANCH,
        children: [
          {
            id: 3.3,
            name: 'Black Tea',
            nodeType: NodeType.LEAF
          },
          {
            id: 3.31,
            name: 'White Tea',
            nodeType: NodeType.LEAF
          },
          {
            id: 3.32,
            name: 'Green Tea',
            nodeType: NodeType.BRANCH,
            children: [
              {
                id: 3.321,
                name: 'Sencha',
                nodeType: NodeType.LEAF
              },
              {
                id: 3.322,
                name: 'Gyokuro',
                nodeType: NodeType.LEAF
              },
              {
                id: 3.323,
                name: 'Matcha',
                nodeType: NodeType.LEAF
              },
              {
                id: 3.324,
                name: 'Pi Lo Chun',
                nodeType: NodeType.LEAF
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3.32,
    name: 'Green Tea',
    nodeType: NodeType.BRANCH,
    children: [
      {
        id: 3.321,
        name: 'Sencha',
        nodeType: NodeType.LEAF
      },
      {
        id: 3.322,
        name: 'Gyokuro',
        nodeType: NodeType.LEAF
      },
      {
        id: 3.323,
        name: 'Matcha',
        nodeType: NodeType.LEAF
      },
      {
        id: 3.324,
        name: 'Pi Lo Chun',
        nodeType: NodeType.LEAF
      }
    ]
  },
  {
    id: 3.322,
    name: 'Gyokuro',
    nodeType: NodeType.LEAF
  },
  {
    id: 3.323,
    name: 'Matcha',
    nodeType: NodeType.LEAF
  }
];

@Component({
  selector: 'app-tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['./tree-container.component.scss']
})
export class TreeContainerComponent implements OnInit {
  @Input() term: string;
  nodes: TreeNode<Item>[];
  filteredNodes: TreeNode<Item>[];

  constructor() {
    this.nodes = getNodesByLimit(5);
    this.filteredNodes = this.newTree(this.nodes); // getting new tree object
    this.filteredNodes.forEach(node => this.makeVisible(node));
  }

  ngOnInit() {}

  makeVisible(node: TreeNode<Item>) {
    node.visible = true;
    if (node.children && node.children.length > 0) {
      node.children.map(ch => this.makeVisible(ch));
    }
  }

  newTree(nodes: TreeNode<Item>[]): TreeNode<Item>[] {
    return JSON.parse(JSON.stringify(this.nodes));
  }

  filterTree(term: string) {
    //const started = performance.now();
    if (term != null && (term = term.trim()).length > 1) {
      this.filteredNodes = this.filter(this.newTree(this.nodes), term);
    } else {
      this.filteredNodes = this.newTree(this.nodes);
    }
    //const finished = performance.now();
    //console.log('search time', finished - started + ' ms');
  }

  filter(nodes: TreeNode<Item>[], term: string): TreeNode<Item>[] {
    const filtered = nodes.filter(node => {
      let matches = node.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
      if (node.children && node.children.length > 0) {
        node.children = this.filter(node.children, term);
      }
      matches = matches || (node.children && node.children.length > 0);
      if (matches && node.nodeType === NodeType.BRANCH) {
        node.expanded = true;
      }
      return matches;
    });
    return filtered;
  }

  expandAll() {
    this._expandAll(this.newTree(this.nodes), true);
  }

  collapseAll() {
    this._expandAll(this.newTree(this.nodes), false);
  }

  _expandAll(nodes: TreeNode<Item>[], expand = true) {
    nodes.forEach(node => this._expand(node, expand));
  }

  _expand(node: TreeNode<Item>, expand = true) {
    if (node.children) {
      node.expanded = expand;
      node.children.forEach(chNode => this._expand(chNode));
    }
  }
}
