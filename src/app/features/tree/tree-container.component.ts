import { Component, OnInit } from '@angular/core';
import { Item, NodeType, TreeNode } from './tree.component';

@Component({
  selector: 'app-tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['./tree-container.component.scss']
})
export class TreeContainerComponent implements OnInit {
  nodes: TreeNode<Item>[] = [
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
    }
  ];

  constructor() {}

  ngOnInit() {}
}
