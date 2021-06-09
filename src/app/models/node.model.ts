interface Options {
  id: string;
  language: string;
  country: string;
  project: string;
}

export class Node {
  id: string;
  info: string;
  desc: string;
  imageURL: string;
  type: string;
  tags: string[];
  options: Options;
  children: Node[];

  constructor({
    id = '',
    info = '',
    desc = '',
    imageURL = '',
    type = 'None', // TODO
    tags = [],
    children = [],
    options = {
      id: '',
      language: '',
      country: '',
      project: ''      
    }
  }: Partial<Node> = {}) {
    this.id = id;
    this.info = info;
    this.desc = desc;
    this.imageURL = imageURL;
    this.type = type;
    this.tags = tags;
    this.options = options;
    this.children = children.map(child => new Node(child));
  }

  addTag(tag: string): void { // DRY
    this.tags = [...new Set([...this.tags, tag])];
  }

  removeTag(tagToRemove: string): void { // DRY
    this.tags = this.tags.filter(tag => tag !== tagToRemove);
  }

  addChild(): void {
    this.children = [...this.children, new Node()];
  }

  removeChild(childToRemove): void {
    this.children = this.children.filter(child => child !== childToRemove);
  }
}

export type Filter = keyof Omit<Node, 'children'>;
